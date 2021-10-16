import { useEffect } from "react";
import { showDateAndTime } from "../../utils/moment";
import { Text, Container } from "./styles";

interface MessageProps{
    msg: string;
    isMine: boolean;
    date: string;
}

export default function Message({msg, isMine, date}: MessageProps){
    useEffect(() => {
        console.log(showDateAndTime(date, "LT"));
    }, [])

    return (
        <Container isMine={isMine}>
            <Text isMine={isMine}>
                <p>{showDateAndTime(date, "LT")}</p>
                {msg}
                <span></span> {/* Triangle */}
            </Text>
        </Container>
    )
}