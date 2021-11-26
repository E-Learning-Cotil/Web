import Loading from "react-loading";

import { IconContainer } from "./styles";
import ShimmerEffect from "../ShimmerEffect"

interface IconProps{
    color: string | undefined;
    icon: string | undefined;
}

export default function Icon({color, icon}: IconProps){

    return (
        <IconContainer
            background={color}
        >
            {icon === undefined ? (
                    <ShimmerEffect
                        width="60px"
                        height="60px"
                    />
            ) : (
                <img src={icon} alt="Ícone" />
            )}
        </IconContainer>
    )
}