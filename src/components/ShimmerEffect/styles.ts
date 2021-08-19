import styled from "styled-components"

interface ShimmerDivProps{
    width: string;
    height: string;
}

const ShimmerDiv = styled("div")<ShimmerDivProps>`
    width: ${props => props.width};
    height: ${props => props.height};
    background: #3D3D3D;
    background-image: linear-gradient(to right, #3D3D3D 0%, #555 20%, #3D3D3D 40%, #3D3D3D 100%);
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