import styled from 'styled-components';

const Container = styled.div`
    width: 80%;
    margin: 30px 10% 30px 10%;

    span{
        display: block;
        margin-top: 20px;
    }
    
    h3 {
        margin-top: 20px;
        font-family: ${props => props.theme.fonts.secondary};
        font-weight: 400;
    }
`;

const Title = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2, h4 {
        font-family: ${props => props.theme.fonts.secondary};
        font-weight: 400;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }
`;

const FileBox = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    section {
        h3{
            height: 40px;
        }
    }
`;

const Dropzone = styled.div`
    width: 100%;
    height: 100px;
    border: 2px dashed ${props => props.theme.colors.mediumDark};
    border-radius: 8px;
    display: grid;
    place-items: center;
    cursor: pointer;
    margin-top: 10px;
`;

const SpaceTop = styled.div`
    margin-top: 10px;
`;

interface SendFilesButtonProps {
    primary: string;
    secondary: string;
}

const SendFilesButton = styled.button<SendFilesButtonProps>`
    margin-top: 10px;
    width: 100%;
    height: 40px;
    background: ${props => props.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.light};
    font-family: ${props => props.theme.fonts.secondary};
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    box-shadow: 0 4px ${props => props.secondary};

    &:active{
      box-shadow: 0 2px ${props => props.secondary};
      transform: translateY(2px);
    }

    p{
        margin-right: 20px;
    }
`;

const SendedStatus = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export {
    Container,
    Title,
    FileBox,
    Dropzone,
    SpaceTop,
    SendFilesButton,
    SendedStatus
};