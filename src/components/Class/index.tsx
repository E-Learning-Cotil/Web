import Link from "next/link";
import {  Wrapper, ClassDetails } from "./styles";

export default function Class({photo, name, id, color, subtitle}){
    return (
        <Link href={`turmas/${id}`}>
            <Wrapper>
                <ClassDetails
                    backgroundColor={color}
                >
                    <div>
                        <img src={photo} alt={name} />
                    </div>
                    <section>
                        <p>{name}</p>
                        <span>{subtitle}</span>
                    </section>
                </ClassDetails>
            </Wrapper>
        </Link>
    )
}