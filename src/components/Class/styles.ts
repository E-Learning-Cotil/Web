import styled from "styled-components";

const Wrapper = styled.a`
    width: 100%;
    height: 80px;
    background: ${props => props.theme.colors.mediumDark};
    border-radius: 4px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`;

interface ClassDetailsProps{
    backgroundColor: string;
}

const ClassDetails = styled("div")<ClassDetailsProps>`
    display: flex;
    align-items: center;

    div{
        width: 60px;
        height: 60px;
        border-radius: 4px;
        background: ${props => props.backgroundColor};
        display: grid;
        place-items: center;

        img{
            width: 40px;
            height: 40px;
            object-fit: contain;
        }
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        p{
            margin-left: 10px;
            font-size: 20px;
            font-family: ${props => props.theme.fonts.secondary};
        }

        span {
            margin-left: 10px;
            font-size: 16px;
            font-family: ${props => props.theme.fonts.primary};
        }
    }

`;

export {
    Wrapper,
    ClassDetails
}