import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import useWindowDimensions from '../../hooks/useWindowDimensions';

import { Container, FileLink } from "./styles"
import { useEffect } from "react";

interface FileProps {
    name: string;
    color: string;
    route: string;
}

export default function File({ name, color, route }: FileProps) {
    const { height } = useWindowDimensions();

    return (
        <FileLink href={route} target="_blank">
            <Container
                height={(height / 1080) * 60 + "px"}
                background={color}
            >
                <p>{name}</p>
                <section>
                    <FontAwesomeIcon
                        icon={faDownload}
                        color="#fff"
                        size="lg"
                    />
                </section>
            </Container>
        </FileLink>
    )
}