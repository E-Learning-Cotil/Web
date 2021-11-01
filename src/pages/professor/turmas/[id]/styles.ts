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
    height: max-content;

    background: ${props => props.theme.colors.mediumDark};
    border-radius: 4px;

    margin-top: 20px;
    padding: 10px;
    padding-left: 10px;
    
    font-family: ${props => props.theme.fonts.secondary};
    font-size: 20px;

    div{
        height: max-content;

        input{
            width: 100%;
            background: ${props => props.theme.colors.mediumDark};
            
            color: ${props => props.theme.colors.light};
            font-family: ${props => props.theme.fonts.primary};
            font-size: 16px;

            border: 0;
            border-radius: 0;
            border-bottom: 1px solid #ccc;
            
            outline: ${props => props.theme.colors.mediumDark};
            margin-bottom: 10px;
        }

        div[contenteditable]{
            width: calc(100% + 15px);
            height: auto;
            min-height: 100px;
            overflow: auto;
            outline: ${props => props.theme.colors.mediumDark};
            resize: none;
            border: 0;

            background: ${props => props.theme.colors.mediumDark};
            
            color: ${props => props.theme.colors.light};
            font-family: ${props => props.theme.fonts.primary};
            font-size: 16px;

            background-attachment: local;
            background-image:
                linear-gradient(to right, #3D3D3D 10px, transparent 10px),
                linear-gradient(to left, #3D3D3D 10px, transparent 10px),
                repeating-linear-gradient(#3D3D3D, #3D3D3D 30px, #ccc 30px, #ccc 31px, #3D3D3D 31px);
            line-height: 31px;
            padding: 5px 0 0 10px;
            margin-left: -10px;

        }
    }
`;

interface CreateTopicButtonProps {
    background : string;
}

const CreateTopicButton = styled.div<CreateTopicButtonProps>`
    margin-left: calc(80% - 10px);
    margin-top: 20px;
    padding: 5px 10px 5px 10px;
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