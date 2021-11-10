import { useContext, useState } from "react";
import Link from 'next/link';
import { AuthContext } from "../../contexts/AuthContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Wrapper, ProfilePic, Trapezoid, ProfileButton, Triangle, MiniProfile, ControlButton, ProfileName, ProfileEmail, Text } from "./styles";
import { faPencilAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

interface HeaderProps{
    primaryColor?: string;
    secondaryColor?: string;
}

export default function Header({
    primaryColor = "#6D6D6D", 
    secondaryColor = "#454545"
}: HeaderProps){
    const { signOut, user } = useContext(AuthContext)
    const [ isProfileOpenned, setIsProfileOpenned ] = useState(false)

    return (
        <Wrapper background={secondaryColor}>
            <Link href={`/${user?.role.toLowerCase()}/dashboard`}>
                <Trapezoid background={primaryColor}>
                    <div></div> 
                    <img src="/logo_and_name.png" alt="" />
                </Trapezoid>    
            </Link>    

            <ProfileButton>
                <ProfilePic src={user?.foto} alt={user?.nome} hasBorder onClick={() => setIsProfileOpenned(!isProfileOpenned)}/>
                {isProfileOpenned && (
                    <MiniProfile>
                        <ProfilePic src={user?.foto} alt={user?.nome} hasBorder={false} />
                        <ProfileName>{user?.nome}</ProfileName>
                        <ProfileEmail>{user?.email}</ProfileEmail>
                        <Link href={`/${user?.role.toLowerCase()}/configuracoes`}>
                            {/* <a> */}
                                <ControlButton>
                                    <FontAwesomeIcon 
                                        icon={faPencilAlt}
                                        color="#fff"
                                        size="1x"
                                    />
                                    <Text>Editar</Text>
                                </ControlButton>
                            {/* </a> */}
                        </Link>
                        <ControlButton
                            onClick={signOut}
                        >
                            <FontAwesomeIcon 
                                icon={faSignOutAlt}
                                color="#fff"
                                size="1x"
                            />
                            <Text>Sair</Text>
                        </ControlButton>

                        {/* Position absolute */}
                        <Triangle/>
                    </MiniProfile>
                )}
            </ProfileButton>


        </Wrapper>
    )
}