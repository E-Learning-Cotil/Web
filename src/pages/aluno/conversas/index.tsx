import Head from "next/head";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { useFetch } from "../../../hooks/useFetch";
import withAuthSSG from "../../../hoc/withAuthSSG";
import Header from "../../../components/Header";
import Contact from "../../../components/Contact";
import Message from "../../../components/Message";

import { Container, Title, Chat, Contacts, Messages, MessagesBox, InputBox } from "./styles";

export function Conversas() {
    const { data } = useFetch('/pagina-inicial');

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

                <Chat>
                    <Contacts>
                        <Contact 
                            name={"José"}
                            img={"https://i.imgur.com/5hT8bpz.jpg"}
                            lastMsg={"Eae professor"}
                            newMsgs={5}
                            isSelected={false}
                        />
                        <Contact 
                            name={"José"}
                            img={"https://i.imgur.com/5hT8bpz.jpg"}
                            lastMsg={"Eae professor"}
                            newMsgs={5}
                            isSelected={false}
                        />
                        <Contact 
                            name={"José"}
                            img={"https://i.imgur.com/5hT8bpz.jpg"}
                            lastMsg={"Eae professor"}
                            newMsgs={5}
                            isSelected={false}
                        />
                        <Contact 
                            name={"José"}
                            img={"https://i.imgur.com/5hT8bpz.jpg"}
                            lastMsg={"Eae professor"}
                            newMsgs={5}
                            isSelected={false}
                        />
                        <Contact 
                            name={"José"}
                            img={"https://i.imgur.com/5hT8bpz.jpg"}
                            lastMsg={"Eae professor"}
                            newMsgs={5}
                            isSelected={false}
                        />
                        <Contact 
                            name={"José"}
                            img={"https://i.imgur.com/5hT8bpz.jpg"}
                            lastMsg={"Eae professor"}
                            newMsgs={5}
                            isSelected={false}
                        />
                        <Contact 
                            name={"José"}
                            img={"https://i.imgur.com/5hT8bpz.jpg"}
                            lastMsg={"Eae professor"}
                            newMsgs={5}
                            isSelected={false}
                        />
                        <Contact 
                            name={"José"}
                            img={"https://i.imgur.com/5hT8bpz.jpg"}
                            lastMsg={"Eae professor"}
                            newMsgs={5}
                            isSelected={false}
                        />
                        <Contact 
                            name={"José"}
                            img={"https://i.imgur.com/5hT8bpz.jpg"}
                            lastMsg={"Eae professor"}
                            newMsgs={5}
                            isSelected={false}
                        />
                        <Contact 
                            name={"José"}
                            img={"https://i.imgur.com/5hT8bpz.jpg"}
                            lastMsg={"Eae professor"}
                            newMsgs={5}
                            isSelected={false}
                        />
                    </Contacts>
                    <MessagesBox>
                        <Messages>
                            <Message 
                                msg={"Eae professor!"}
                                isMine={true}
                            />
                            <Message 
                                msg={"Eae aluno!"}
                                isMine={false}
                            />
                            <Message 
                                msg={"Eae professor!"}
                                isMine={true}
                            />
                            <Message 
                                msg={"Eae aluno!"}
                                isMine={false}
                            />
                            <Message 
                                msg={"Eae professor!"}
                                isMine={true}
                            />
                            <Message 
                                msg={"Eae aluno!"}
                                isMine={false}
                            />
                            <Message 
                                msg={"Eae aluno!"}
                                isMine={false}
                            />
                            <Message 
                                msg={"Eae professor!"}
                                isMine={true}
                            />
                            <Message 
                                msg={"Eae aluno!"}
                                isMine={false}
                            />
                        </Messages>
                        <InputBox>
                            <input type="text" placeholder="Digite aqui sua mensagem..."/>
                            <button>
                                <FontAwesomeIcon
                                    icon={faPaperPlane}
                                    color="#4AED64"
                                    size="lg"
                                />
                            </button>
                        </InputBox>
                    </MessagesBox>
                </Chat>
            </Container>
        </div>
    )
}

export default withAuthSSG(Conversas);