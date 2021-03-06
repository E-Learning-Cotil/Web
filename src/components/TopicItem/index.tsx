import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { AuthContext } from "../../contexts/AuthContext";
import { Container } from "./styles"
import { useContext } from "react";

export enum TopicItemTypes{
    ATIVIDADE = "faListUl",
    MATERIAL = "faBook",
    TESTE = "faCheckSquare"
}

interface TopicItemProps{
    type: TopicItemTypes;
    name: string;
    color: string;
    route: string;
}

export default function TopicItem({type, name, color, route}: TopicItemProps){
    const { user } = useContext(AuthContext);

    return (
        <Link href={`/${user?.role.toLowerCase()}/${route}`}>
            <Container
                background={color}
            >
                <section>
                    <FontAwesomeIcon 
                        icon={Icons[type]}
                        color="#fff"
                        size="lg"
                    />
                </section>
                <p>{name}</p>
            </Container>
        </Link>
    )
}