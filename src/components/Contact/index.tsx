import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from '@fortawesome/free-solid-svg-icons';

import { Container } from "./styles";

interface ContactProps{
    img: string;
    name: string;
    lastMsg: string;
    newMsgs: number;
    isSelected: boolean;
}

export default function Contact({img, name, lastMsg, newMsgs, isSelected}: ContactProps){
    return (
        <Container
            isSelected={isSelected}
        >
            <img src={img} alt={name} />
            <div>
                <h3>{name}</h3>
                <p>{lastMsg}</p>
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