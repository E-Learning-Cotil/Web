import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from '@fortawesome/free-solid-svg-icons';

import { Container } from "./styles";
import { useEffect, useState } from "react";

interface ContactProps{
    img: string;
    name: string;
    lastMsg: string;
    newMsgs: number;
    id: string;
    setAsSelected(id: string): void;
    selectedId: string;
}

export default function Contact({img, name, lastMsg, newMsgs, id, setAsSelected, selectedId}: ContactProps){
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
                newMsgs > 0 && (
                    <span>
                        <FontAwesomeIcon
                            icon={faComment}
                            color="#fff"
                            size="sm"
                        />
                        <p>{newMsgs}</p>
                    </span>
                )
            }
        </Container>
    )
}