import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

export default function Header(){
    const { signOut } = useContext(AuthContext)

    return (
        <div>
            <button onClick={signOut}>Logout</button>
        </div>
    )
}