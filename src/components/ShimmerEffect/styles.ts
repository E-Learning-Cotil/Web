import styled from "styled-components"

interface ShimmerDivProps{
    width: string;
    height: string;
}

const ShimmerDiv = styled("div")<ShimmerDivProps>`
    width: ${props => props.width};
    height: ${props => props.height};
    background: #4D4D4D;
    background-image: linear-gradient(to right, #4D4D4D 0%, #555 20%, #4D4D4D 40%, #4D4D4D 100%);
    background-repeat: no-repeat;
    background-size: 800px 104px; 
    display: inline-block;
    position: relative; 
    border-radius: 4px;
    
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeholderShimmer;
    animation-timing-function: linear;

    @keyframes placeholderShimmer {
        0% {
        background-position: -468px 0;
        }

        100% {
        background-position: 468px 0; 
        }
    }

    -webkit-animation-duration: 1s;
    -webkit-animation-fill-mode: forwards; 
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-name: placeholderShimmer;
    -webkit-animation-timing-function: linear;

    @-webkit-keyframes placeholderShimmer {
        0% {
        background-position: -468px 0;
        }

        100% {
        background-position: 468px 0; 
        }
    }
`;

export {
    ShimmerDiv
}