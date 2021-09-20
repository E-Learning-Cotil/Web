import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from '@fortawesome/free-solid-svg-icons';

import { Text, Container } from "./styles";

interface MessageProps{
    msg: string;
    isMine: boolean;
}

export default function Message({msg, isMine}: MessageProps){
    return (
        <Container isMine={isMine}>
            <Text isMine={isMine}>
                {msg}
                <span></span> {/* Triangle */}
            </Text>
        </Container>
    )
}