import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from '@fortawesome/free-solid-svg-icons';

import { Container } from "./styles";
import { useEffect, useState } from "react";

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
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        if(id === selectedId){
            setIsSelected(true);
        }else{
            setIsSelected(false);
        }
    }, [selectedId])

    return (
        <Container
            onClick={() => setAsSelected(id)}
            isSelected={isSelected}
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