import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

export default function Header(){
    const { signOut, user } = useContext(AuthContext)

    return (
        <div>
            <button onClick={signOut}>Logout</button>
            <img src={user?.foto} alt={user?.nome} width="50px" />
        </div>
    )
}