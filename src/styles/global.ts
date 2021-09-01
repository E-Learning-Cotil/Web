import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme.colors.dark};
        color: ${props => props.theme.colors.light};
        font: 400 16px ${props => props.theme.fonts.primary};
        overflow-x: hidden;
    }

    body::-webkit-scrollbar {
        width: 10px;
    }

    body::-webkit-scrollbar-track {
        background: ${props => props.theme.colors.dark};
    }

    body::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colors.mediumDark};
    }
`;