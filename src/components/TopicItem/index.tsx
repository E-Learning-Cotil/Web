import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

import { Container } from "./styles"

export enum TopicItemTypes{
    ATIVIDADE = "faListUl",
    MATERIAL = "faBook",
    TESTE = "faCheckSquare"
}

interface TopicItemProps{
    type: TopicItemTypes;
    name: string;
    color: string;
}

export default function TopicItem({type, name, color}: TopicItemProps){
    return (
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
    )
}