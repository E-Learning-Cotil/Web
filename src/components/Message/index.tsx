import { useEffect } from "react";
import { showDateAnTime } from "../../utils/moment";
import { Text, Container } from "./styles";

interface MessageProps{
    msg: string;
    isMine: boolean;
    date: string;
}

export default function Message({msg, isMine, date}: MessageProps){
    useEffect(() => {
        console.log(showDateAnTime(date, "LT"));
    }, [])

    return (
        <Container isMine={isMine}>
            <Text isMine={isMine}>
                <p>{showDateAnTime(date, "LT")}</p>
                {msg}
                <span></span> {/* Triangle */}
            </Text>
        </Container>
    )
}