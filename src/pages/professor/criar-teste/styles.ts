import styled from 'styled-components';

const Container = styled.div`
    width: 80%;
    margin: 30px 10% 30px 10%;
`;

const ContentHeader = styled.section`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;

    h2{
        font-family: ${props => props.theme.fonts.secondary};
        font-weight: 400;
    }

    h4{
        font-family: ${props => props.theme.fonts.primary};
        font-weight: 400;
    }
`;

const Dates = styled.div`
    display: flex;
`;

const Date = styled.div`
    margin-left: 10px;

    label{
        font-family: ${props => props.theme.fonts.secondary};
        font-weight: 400;
    }

    input{
        height: 36px;
        width: 180px;
        margin-left: 5px;
        outline: none;
        border: none;
        background: ${props => props.theme.colors.mediumDark};
        color: ${props => props.theme.colors.light};
        font-family: ${props => props.theme.fonts.primary};

        &::-webkit-calendar-picker-indicator {
            filter: invert(1);
        }
    }
`;

const ContentTitle = styled.section`
    margin-top: 30px;
    width: 100%;
    padding: 10px;
    background: ${props => props.theme.colors.mediumDark};
    border-radius: 4px;
    display: flex;
    align-items: center;

    input{
        margin: 0 10px 0 10px;
        border: none;
        border-bottom: 1px solid ${props => props.theme.colors.light};
        flex: 1;
        background: transparent;
        border-radius: 0;
        outline: none;
        color: ${props => props.theme.colors.light};
    }

    button{
        padding: 5px 20px 5px 20px;
        border: none;
        background: blue;
        color: ${props => props.theme.colors.light};
        font-family: ${props => props.theme.fonts.primary};
        box-shadow: 0 4px darkblue;

        &:active{
            box-shadow: 0 2px darkblue;
            transform: translateY(2px);
        }
    }
`;

const Grid = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
`;

const FakeGridDiv = styled.div`
    width: 100%;
`;

const CreateQuestion = styled.div`
    width: 100%;
    background: ${props => props.theme.colors.mediumDark};
    border-radius: 4px;
    padding: 20px;
`;

const QuestionTitle = styled.div`
    margin-bottom: 20px;

    h3{
        font-family: ${props => props.theme.fonts.secondary};
        font-weight: 400;
    }
`;

const QuestionTextarea = styled.div`
    width: calc(100% + 15px);
    height: auto;
    min-height: 70px;
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
`;

const Answers = styled.div`
    h3{
        font-family: ${props => props.theme.fonts.secondary};
        font-weight: 400;
    }
`;

const Answer = styled.div`
    margin-top: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    background: ${props => props.theme.colors.dark};
    border-radius: 2px;
    font-size: 14px;
`;

const NewAnswer = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input{
        flex: 1;
        margin-right: 10px;
        height: 30px;
        border: none;
        outline: none;
        background: ${props => props.theme.colors.dark};
        color: ${props => props.theme.colors.light};
        font-family: ${props => props.theme.fonts.primary};
        padding: 5px;
    }

    button{
        height: 30px;
        padding: 0 10px 0 10px;
        border: none;
        background: blue;
        color: ${props => props.theme.colors.light};
        font-family: ${props => props.theme.fonts.primary};
        cursor: pointer;
    }
`;

const Image = styled.div`
    margin-top: 20px;

    h3{
        font-family: ${props => props.theme.fonts.secondary};
        font-weight: 400;
    }
`;

const Dropzone = styled.div`
    margin-top: 15px;
    width: 100%;
    height: 100px;
    border: 2px dashed ${props => props.theme.colors.light};
    border-radius: 4px;
    display: grid;
    place-items: center;
    cursor: pointer;
`;

const CreateButton = styled.button`
    margin-top: 20px;
    width: 100%;
    padding: 10px 0 10px 0;
    border: none;
    border-radius: 4px;
    background: blue;
    font-family: ${props => props.theme.fonts.primary};
    font-size: 16px;
    color: ${props => props.theme.colors.light};
    cursor: pointer;
    box-shadow: 0 4px darkblue;

    &:active{
        box-shadow: 0 2px darkblue;
        transform: translateY(2px);
    }
`;

const QuestionsList = styled.div`
    width: 100%;
`;

const Question = styled.div`
    position: relative;
    width: 100%;
    padding: 20px;
    background: ${props => props.theme.colors.mediumDark};
    border-radius: 4px;
    margin-bottom: 20px;

    h4{
        font-family: ${props => props.theme.fonts.secondary};
        font-weight: 400;
    }
`;

const QuestionAnswer = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    input{
        margin-right: 10px;
    }
`;

const DeleteQuestion = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    background: blue;
    border-radius: 0 4px 0 4px;
    cursor: pointer;
`;

export {
    Container,
    Title,
    ContentHeader,
    Dates,
    Date,
    ContentTitle,
    Grid,
    FakeGridDiv,
    CreateQuestion,
    QuestionTitle,
    QuestionTextarea,
    Answers,
    Answer,
    NewAnswer,
    Image,
    Dropzone,
    CreateButton,
    QuestionsList,
    Question,
    QuestionAnswer,
    DeleteQuestion
};