import { io } from "socket.io-client";
import { parseCookies } from "nookies";

class Chat{
    private socket;
    private token;

    constructor(connectionUrl: string, setConversations, setMessages, messages){
        this.socket = io(connectionUrl);
        this.socket.on("conversations", setConversations);
        this.socket.on("previous_messages", setMessages);
        this.socket.on("new_message", data => setMessages([...messages, data]));
        const { 'elearning.token': token } = parseCookies();
        this.token = token;
        this.identify();
    }

    private async identify(): Promise<void>{
        this.socket.emit("identify", { token: this.token });
    }

    public newMessage(message: string, otherUser: string){
        this.socket.emit("new_message", {message, otherUser, token: this.token});
    }
}

export {
    Chat
}