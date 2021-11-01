import { useEffect } from "react";
import { showDateAndTime } from "../../utils/moment";
import { Text, Container } from "./styles";

interface MessageProps{
    msg: string;
    isMine: boolean;
    date: string;
    color: string;
}

export default function Message({msg, isMine, date, color}: MessageProps){
    return (
        <Container isMine={isMine} color={color}>
            <Text isMine={isMine} color={color}>
                <p>{showDateAndTime(date, "LT")}</p>
                {msg}
                <span></span> {/* Triangle */}
            </Text>
        </Container>
    )
}