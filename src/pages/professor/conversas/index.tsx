import { useState, useContext, useRef, useEffect } from 'react';
import Head from "next/head";

import { io } from "socket.io-client";
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { parseCookies } from "nookies";

import withAuthSSG from "../../../hoc/withAuthSSG";
import Header from "../../../components/Header";
import Contact from "../../../components/Contact";
import ContactSkeleton from "../../../components/ContactSkeleton";
import Message from "../../../components/Message";
import { AuthContext } from '../../../contexts/AuthContext';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faCommentAlt } from '@fortawesome/free-solid-svg-icons';

import 'react-toastify/dist/ReactToastify.css';
import { Container, Title, ChatDiv, Contacts, Messages, MessagesBox, InputBox, EmptyMessage } from "./styles";
import { api } from '../../../services/api';

const socket = io(process.env.NEXT_PUBLIC_BACKEND_URL);
const { 'elearning.token': token } = parseCookies();

export function Conversas() {
    const { user } = useContext(AuthContext);

    const router = useRouter();

    useEffect(() => {
        (async () => {
            if(router.query.idAluno){
                const response = await api.get(`/alunos/${router.query.idAluno}`, {
                    headers: {
                        'basic_token': process.env.NEXT_PUBLIC_BASIC_TOKEN
                    }
                });
                
                setConversations(prevConversations => {
                    return [...prevConversations, {aluno: response.data, data: null, mensagem: null, raAluno: response.data.ra}]
                });

                setSelected(Number(router.query.idAluno));
            }
        })()
        setSelected(Number(router.query.idAluno))
    }, [router.query.idAluno]);

    const [conversations, setConversations] = useState([]);
    const [messages, setMessages] = useState([]);
    const [selectedState, setSelectedState] = useState(null);

    const selectedRef = useRef(null);
    const messageBoxRef = useRef(null);

    const { register, getValues, reset } = useForm();

    function setSelected(value){
        console.log(value);
        selectedRef.current = value;
        setSelectedState(value);
    }

    useEffect(() => {
        socket.emit("identify", { token });
        socket.on("conversations", data => {
            setConversations(prevConv => {
                const newArray = [...prevConv, ...data];

                const uniqueValuesSet = new Set();
                const property = "raAluno";

                const filteredArray = newArray.filter(item => {
                    const isPresentInSet = uniqueValuesSet.has(item[property]);
                    uniqueValuesSet.add(item[property]);
                    return !isPresentInSet;
                })
                return filteredArray;
            })
        });
        socket.on("previous_messages", setMessages);
        socket.on("new_message", ([data]) => {
            console.log("Called");
            console.log(data);
            setMessages(prevMessages => {
                if((data.origem.identity === selectedRef.current) || (data.origem.role === "PROFESSOR")){
                    return [...prevMessages, data]
                }else{
                    playSoundNotification();

                    setConversations((prevConversations) => {
                        const updatedContacts = prevConversations.map(contact => {
                            if(contact.raAluno === data.origem.identity) {
                                contact.mensagem = data.mensagem;
                                contact.data = data.data;
                                contact.hasNewMsgs = true;
                            }
                
                            return contact;
                        })
            
            
                        return updatedContacts;
                    });
                    return prevMessages;
                }
            });
        });
    }, [])

    useEffect(() => {
        setConversations((prevConversations) => {
            const updatedContacts = prevConversations.map(contact => {
                if(selectedRef.current === contact.raAluno && messages.length > 0) {
                    contact.mensagem = messages[messages.length-1].mensagem;
                    contact.data = messages[messages.length-1].data;
                }
    
                return contact;
            })

            return updatedContacts;
        });

        if(messageBoxRef.current){
            messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
        }
        console.log(messages);
    }, [messages])

    useEffect(() => {
        socket.emit("open_chat", {otherUser: selectedRef.current, token});
        setConversations((prevConversations) => {
            const updatedContacts = prevConversations.map(contact => {
                if(contact.raAluno === selectedRef.current) {
                    contact.hasNewMsgs = false;
                }
    
                return contact;
            })

            return updatedContacts;
        });
    }, [selectedState])

    function sendNewMessage(){
        const {message} = getValues();

        socket.emit("new_message", {message, otherUser: selectedRef.current, token});

        reset({ message: '' });
    }

    function playSoundNotification(){
        const context = new AudioContext();
        const oscillator = context.createOscillator();
        const contextGain = context.createGain();
    
        oscillator.connect(contextGain);
        contextGain.connect(context.destination);
        oscillator.start(0);

        setTimeout(() => {
            contextGain.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 5);
        }, 250)
    }

    return (
        <div>
            <Head>
                <title>Conversas | E-Learning</title>
            </Head>

            <Header 
                primaryColor="#9F18DF"
                secondaryColor="#6C1795"
            />

            <Container>
                <Title>
                    <h1>Conversas</h1>
                </Title>

                <ChatDiv>
                    <Contacts>
                        {
                            conversations.length <= 0 ? (
                                <>
                                    <ContactSkeleton />
                                    <ContactSkeleton />
                                    <ContactSkeleton />
                                    <ContactSkeleton />
                                    <ContactSkeleton />
                                    <ContactSkeleton />
                                    <ContactSkeleton />
                                    <ContactSkeleton />
                                    <ContactSkeleton />
                                </>
                            ) : conversations.map((contact, index) => (
                                <Contact 
                                    key={index}
                                    id={contact.raAluno}
                                    name={contact.aluno.nome}
                                    img={contact.aluno.foto}
                                    lastMsg={contact.mensagem}
                                    hasNewMsgs={contact.hasNewMsgs}
                                    setAsSelected={setSelected}
                                    selectedId={selectedState}
                                />
                            ))
                        }
                    </Contacts>


                    {selectedState === null ? (
                        <EmptyMessage hasLeftBorder>
                            <img src="/select_conversation_purple.svg" alt="Selecione uma conversa" />
                            <h2>Selecione uma conversa</h2>
                        </EmptyMessage>
                    ) : (
                        <MessagesBox>
                            <Messages ref={messageBoxRef}>
                                {
                                    messages.length === 0 ? (
                                        <EmptyMessage hasLeftBorder={false}>
                                            <img src="/start_conversation_purple.svg" alt="Começar a conversar" />
                                            <h2>Começar a conversar</h2>
                                        </EmptyMessage>
                                    ) : messages.map((msg, index)=> (
                                        <Message 
                                            key={index}
                                            msg={msg.mensagem}
                                            date={msg.data}
                                            isMine={user.role === msg.origem.role}
                                            color="#009418"
                                        />
                                    ))
                                }
                            </Messages>
                            <InputBox>
                                <input 
                                    {...register('message')}
                                    type="text" 
                                    placeholder="Digite aqui sua mensagem..."
                                    name="message"
                                    onKeyPress={(e) => {if(e.key === 'Enter') sendNewMessage()}}
                                />
                                <button onClick={() => sendNewMessage()}>
                                    <FontAwesomeIcon
                                        icon={faPaperPlane}
                                        color="#9F18DF"
                                        size="lg"
                                    />
                                </button>
                            </InputBox>
                        </MessagesBox>
                    )}
                </ChatDiv>
            </Container> 
        </div>
    )
}

export default withAuthSSG(Conversas);