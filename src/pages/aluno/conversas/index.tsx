import { useState, useContext } from 'react';
import Head from "next/head";

import { io } from "socket.io-client";
import { useForm } from 'react-hook-form';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { useFetch } from "../../../hooks/useFetch";
import withAuthSSG from "../../../hoc/withAuthSSG";
import Header from "../../../components/Header";
import Contact from "../../../components/Contact";
import Message from "../../../components/Message";

import { Container, Title, ChatDiv, Contacts, Messages, MessagesBox, InputBox } from "./styles";
import { useEffect } from "react";
import { Chat } from "../../../services/socketio";

import { parseCookies } from "nookies";
import { AuthContext } from '../../../contexts/AuthContext';

const socket = io("https://elearning-tcc.herokuapp.com/");
const { 'elearning.token': token } = parseCookies();

export function Conversas() {
    const { user } = useContext(AuthContext);

    const [conversations, setConversations] = useState([]);
    const [messages, setMessages] = useState([]);
    const [selected, setSelected] = useState(null);
    
    const { register, getValues } = useForm();

    useEffect(() => {
        socket.on("conversations", setConversations);
        socket.on("previous_messages", setMessages);
        socket.emit("identify", { token });
    }, [])

    useEffect(() => {
        socket.on("new_message", ([data]) => {
            setMessages([...messages, data])

            const updatedContacts = conversations.map(contact => {
                if(contact.rgProfessor === selected) contact.mensagem = data.mensagem;

                return contact;
            })

            setConversations(updatedContacts);
        });
    }, [messages])

    useEffect(() => {
        socket.emit("open_chat", {otherUser: selected, token});
    }, [selected])

    function sendNewMessage(){
        const {message} = getValues();

        socket.emit("new_message", {message, otherUser: selected, token});
    }

    return (
        <div>
            <Head>
                <title>Conversas | E-Learning</title>
            </Head>

            <Header />

            <Container>
                <Title>
                    <h1>Conversas</h1>
                </Title>

                <ChatDiv>
                    <Contacts>
                        {conversations.map(contact => (
                            <Contact 
                                key={contact.rgProfessor}
                                id={contact.rgProfessor}
                                name={contact.professor.nome}
                                img={contact.professor.foto}
                                lastMsg={contact.mensagem}
                                newMsgs={0}
                                setAsSelected={setSelected}
                                selectedId={selected}
                            />
                        ))}
                    </Contacts>
                    <MessagesBox>
                        {selected === null ? (
                            <p>Selecione uma conversa</p>
                        ) : (
                            <>
                                <Messages>
                                    {messages.map((msg, index)=> (
                                        <Message 
                                            key={index}
                                            msg={msg.mensagem}
                                            isMine={user.role === msg.origem}
                                        />
                                    ))}
                                </Messages>
                                <InputBox>
                                    <input 
                                        type="text" 
                                        placeholder="Digite aqui sua mensagem..."
                                        {...register('message')}
                                        name="message"
                                    />
                                    <button onClick={() => sendNewMessage()}>
                                        <FontAwesomeIcon
                                            icon={faPaperPlane}
                                            color="#4AED64"
                                            size="lg"
                                        />
                                    </button>
                                </InputBox>
                            </>
                        )}
                    </MessagesBox>
                </ChatDiv>
            </Container>
        </div>
    )
}

export default withAuthSSG(Conversas);