import styled, {css} from 'styled-components';

const Container = styled.div`
    width: 80%;
    margin: 30px 10% 30px 10%;
`;

const Title = styled.div`
    h1 {
        font-family: ${props => props.theme.fonts.secondary};
        font-weight: 400;
    }
`;

const ChatDiv = styled.div`
    margin-top: 30px;
    width: 100%;
    height: calc(100vh - 280px);
    background: ${props => props.theme.colors.mediumDark};
    border-radius: 8px;
    display: grid;
    grid-template-columns: 30% 70%;
`;

const Contacts = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 8px 0 0 8px;
    overflow-x: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 0;
    }
`;

const MessagesBox = styled.section`
    display: grid;
    grid-template-rows: 90% 10%;
`;

const Messages = styled.div`
    width: 100%;
    max-height: 100%;
    height: calc((100vh - 280px) * 0.9);
    border-radius: 0 8px 0 0;
    border-left: 1px solid ${props => props.theme.colors.light};
    padding: 20px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 0;
    }
`;

const InputBox = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 0 0 8px 0;
    border-left: 1px solid ${props => props.theme.colors.light};
    border-top: 1px solid ${props => props.theme.colors.light};
    background: #161616;

    display: grid;
    grid-template-columns: 85% 10%;
    gap: 5%;

    input{
        width: 100%;
        height: calc(100% - 5px);
        margin-bottom: 5px;
        margin-left: 10px;
        background: transparent;
        outline: none;
        border: none;
        color: ${props => props.theme.colors.light};
        font-family: ${props => props.theme.fonts.primary};
    }

    button{
        border: none;
        background: transparent;
    }
`;

interface EmptyMessageProps{
    hasLeftBorder: boolean;
}

const EmptyMessage = styled.div<EmptyMessageProps>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${props => props.hasLeftBorder && css`
        border-left: 1px solid ${props => props.theme.colors.light};
    `}

    img{
        width: 150px;
    }

    h2{
        font-size: 24px;
        font-weight: 400;
        font-family: ${props => props.theme.fonts.secondary};
    }
`;

export {
    Container,
    Title,
    ChatDiv,
    Contacts,
    MessagesBox,
    Messages,
    InputBox,
    EmptyMessage
}