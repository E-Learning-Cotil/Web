import Link from "next/link";
import {  Wrapper, ClassDetails } from "./styles";

export default function Class({photo, name, id, color, teacher}){
    return (
        <Link href="/">
            <Wrapper>
                <ClassDetails
                    backgroundColor={color}
                >
                    <div>
                        <img src={photo} alt={name} />
                    </div>
                    <section>
                        <p>{name}</p>
                        <span>Prof: {teacher}</span>
                    </section>
                </ClassDetails>
            </Wrapper>
        </Link>
    )
}