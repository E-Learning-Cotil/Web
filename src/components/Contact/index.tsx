import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from '@fortawesome/free-solid-svg-icons';

import { Container } from "./styles";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

interface ContactProps{
    img: string;
    name: string;
    lastMsg: string;
    hasNewMsgs: boolean;
    id: string;
    setAsSelected(id: string): void;
    selectedId: string;
}

export default function Contact({img, name, lastMsg, hasNewMsgs, id, setAsSelected, selectedId}: ContactProps){
    const { user } = useContext(AuthContext);
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        setIsSelected(id === selectedId);
    }, [selectedId])

    return (
        <Container
            onClick={() => setAsSelected(id)}
            isSelected={isSelected}
            color={user.role === "PROFESSOR" ? "#6C1795" : "#009418"}
            secondaryColor={user.role === "PROFESSOR" ? "#9F18DF" : "#0CBE29"}
        >
            <img src={img} alt={name} />
            <div>
                <h3>{name}</h3>
                {lastMsg === null ? (
                        <p><i>Começar a conversar</i></p>                    
                    ) : (
                        <p>{lastMsg}</p>
                )}
            </div>
            {
                hasNewMsgs && (
                    <span>
                        <FontAwesomeIcon
                            icon={faComment}
                            color="#fff"
                            size="sm"
                        />
                        <p>NEW</p>
                    </span>
                )
            }
        </Container>
    )
}