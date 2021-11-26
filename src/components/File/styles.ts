import styled from 'styled-components';

interface TopicItemContainerProps{
    background: string;
    height: string;
}

const Container = styled("nav")<TopicItemContainerProps>`
    width: 100%;
    height: ${props => props.height};
    background: ${props => props.theme.colors.mediumDark};
    border-radius: 4px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    section {
        width: 60px;
        height: 100%;
        max-width: 60px;
        background: ${props => props.background};
        display: grid;
        place-items: center;
        border-radius: 0 4px 4px 0;
    }

    p{
        margin-left: 5px;
    }
`;

const FileLink = styled("a")`
    color: ${props => props.theme.colors.light};
    text-decoration: none;
`;

export {
    Container,
    FileLink
}