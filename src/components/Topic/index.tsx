import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Wrapper, TopicDetails } from "./styles";

export default function Topic({name, id, subtitle}){
    const { user } = useContext(AuthContext);

    return (
        <Link href={`/${user.role.toLowerCase()}/topicos/${id}`}>
            <Wrapper>
                    <TopicDetails>
                        <section>
                            <p>{name}</p>
                            <span>{subtitle}</span>
                        </section>
                    </TopicDetails>
            </Wrapper>
        </Link>
    )
}