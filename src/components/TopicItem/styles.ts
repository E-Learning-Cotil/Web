import styled from 'styled-components';

interface TopicItemContainerProps{
    background: string;
}

const Container = styled("nav")<TopicItemContainerProps>`
    width: 100%;
    height: 40px;
    background: ${props => props.theme.colors.mediumDark};
    border-radius: 4px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;

    section {
        width: 40px;
        height: 100%;
        max-width: 40px;
        background: ${props => props.background};
        display: grid;
        place-items: center;
        border-radius: 4px 0 0 4px;
    }

    p{
        margin-left: 5px;
    }
`;

export {
    Container
}