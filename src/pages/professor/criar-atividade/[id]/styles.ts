import styled, {css} from 'styled-components';

interface ColorsProps {
    primaryColor: string;
    secondaryColor: string;
}

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

const DateDiv = styled.div`
    margin-left: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    label{
        font-family: ${props => props.theme.fonts.secondary};
        font-weight: 400;
    }

    input{
        height: 40px;
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

const Info = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ContentTitle = styled.section<ColorsProps>`
    margin-top: 30px;
    flex:1;
    padding: 10px;
    background: ${props => props.theme.colors.mediumDark};
    border-radius: 4px;
    display: flex;
    align-items: center;

    input{
        margin: 0 10px 0 10px;
        border: none;
        border-bottom: 1px solid ${props => props.theme.colors.light};
        font-family: ${props => props.theme.fonts.primary};
        flex: 1;
        background: transparent;
        border-radius: 0;
        outline: none;
        color: ${props => props.theme.colors.light};
    }
`;

const Grid = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 40px;
`;

const FakeGridDiv = styled.div`
    width: 100%;
`;

const ContentEditor = styled.div`
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.mediumDark};
    border-radius: 4px;
    padding: 20px;

    .ck-content{
    background: #fff;
    color: #000;
    min-height: 300px;
    }
`;

const Image = styled.div`
    h3{
        font-family: ${props => props.theme.fonts.secondary};
        font-weight: 400;
    }

    img{
        width: 100%;
        margin-top: 15px;
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

const FilesList = styled.div`
    width: 100%;
`;

const CreateActivityButton = styled.button<ColorsProps>`
    margin-top: 20px;
    padding: 5px 20px 5px 20px;
    border: none;
    background: ${props => props.primaryColor};
    color: ${props => props.theme.colors.light};
    font-family: ${props => props.theme.fonts.secondary};
    font-size: 20px;
    box-shadow: 0 4px ${props => props.secondaryColor};
    width: 100%;
    height: 40px;

    &:active{
        box-shadow: 0 2px ${props => props.secondaryColor};
        transform: translateY(2px);
    }
`

export {
    Container,
    Title,
    ContentHeader,
    DateDiv,
    ContentTitle,
    Grid,
    FakeGridDiv,
    ContentEditor,
    Image,
    Dropzone,
    FilesList,
    CreateActivityButton,
    Info
};