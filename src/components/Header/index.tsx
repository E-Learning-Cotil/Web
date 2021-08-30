import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

import { Wrapper, ProfilePic, Trapezoid } from "./styles";

export default function Header(){
    const { signOut, user } = useContext(AuthContext)

    return (
        <Wrapper>
            <Trapezoid>
                <div></div> 
                <img src="/logo_and_name.png" alt="" />
            </Trapezoid>        

            <ProfilePic src={user?.foto} alt={user?.nome} />
            {/* <button onClick={signOut}>Logout</button> */}
        </Wrapper>
    )
}