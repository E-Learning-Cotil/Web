import ShimmerEffect from "../ShimmerEffect";

import { Container } from "./styles";

export default function ContactSkeleton(){
    return (
        <Container>
            <section>
                <ShimmerEffect width="40px" height="40px" />
            </section>
            <ShimmerEffect width="160px" height="24px"/>
        </Container>
    )
}