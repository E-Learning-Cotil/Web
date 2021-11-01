import styled from 'styled-components';

const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Container = styled.div`
    width: 80%;
    margin: 30px 10% 30px 10%;
`;

const ClassName = styled.p`
    font-size: 40px;
    font-family: ${props => props.theme.fonts.secondary};
`;

const CreateTopic = styled.div`
    width: 100%;
    background: ${props => props.theme.colors.mediumDark};
    border-radius: 4px;

    margin-top: 20px;
    padding: 10px;
    padding-left: 10px;
    
    font-family: ${props => props.theme.fonts.secondary};
    font-size: 20px;

    div{
        input{
            width: 100%;
            background: ${props => props.theme.colors.mediumDark};
            
            color: ${props => props.theme.colors.light};
            font-family: ${props => props.theme.fonts.primary};
            font-size: 16px;

            border: 0;
            border-bottom: 1px solid ${props => props.theme.colors.light};
            
            outline: ${props => props.theme.colors.mediumDark};
            margin-bottom: 10px;
        }

        textarea{
            width: 100%;
            outline: ${props => props.theme.colors.mediumDark};
            resize: none;
            border: 0;

            background: ${props => props.theme.colors.mediumDark};
            
            color: ${props => props.theme.colors.light};
            font-family: ${props => props.theme.fonts.primary};
            font-size: 16px;

            line-height: 4ch;
            background-image: linear-gradient(transparent, transparent calc(4ch - 1px), #fff 0px);
            background-size: 100% 4ch;

        }
    }
`;

interface CreateTopicButtonProps {
    background : string;
}

const CreateTopicButton = styled.div<CreateTopicButtonProps>`
    margin-left: calc(80% - 10px);
    margin-top: 20px;
    width: 20%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    background-color: ${props => props.background};

    border: 0;
    border-radius: 4px;

    p {
        font-family: ${props => props.theme.fonts.secondary};
        font-size: 20px;
        color: ${props => props.theme.colors.light};
        margin-left: 10px;
    }
`;

export {
    Title,
    Container,
    ClassName, 
    CreateTopic, 
    CreateTopicButton
};