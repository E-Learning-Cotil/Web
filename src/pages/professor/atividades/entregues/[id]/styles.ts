import styled from 'styled-components';

const Container = styled.div`
    width: 80%;
    margin: 30px 10% 30px 10%;
`;

const Title = styled.div`
    h2{
        font-family: ${props => props.theme.fonts.secondary};
        font-weight: 400;
    }

    h4{
        font-family: ${props => props.theme.fonts.primary};
        font-weight: 400;
    }
`;

const Grid = styled.div`
    margin-top: 20px;
    width: 100%;
    height: 60vh;
    display: grid;
    grid-template-columns: 4fr 1fr;
    gap: 20px;
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.mediumDark};
    border-radius: 4px;
    padding: 20px;
`;

const ContentHeader = styled.div<ColorsProps>`
    width: 100%;
    height: 32px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    section {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        img{
            width: 32px;
            height: 32px;
            object-fit: cover;
            border-radius: 4px;
            margin-right: 10px;
        }

        h2{
            font-family: ${props => props.theme.fonts.secondary};
            font-weight: 400;
        }

    }

    nav{
        display: flex;
        align-items: center;
        justify-content: flex-end;

        a{
            margin-left: 10px;
            display: block;
            width: 32px;
            height: 32px;
            border-radius: 4px;
            background: ${props => props.primaryColor};
            display: grid;
            place-items: center;
        }
    }
`;

const Iframe = styled.iframe`
    margin-top: 20px;
    width: 100%;
    height: calc(60vh - 40px - 32px - 20px - 20px - 40px);
    border: none;
    border-radius: 8px;
`;

const ContentFooter = styled.div`
    margin-top: 20px;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Grade = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    label{
        margin-right: 10px;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: flex-start;

        input{
            width: 90px;
            height: 24px;
            border: none;
            margin-right: 5px;
        }
    }
`;

interface ColorsProps{
    primaryColor: string;
    secondaryColor?: string;
}

const SaveButton = styled.a<ColorsProps>`
    display: grid;
    height: 40px;
    padding: 0 15px 0 15px;
    background: ${props => props.primaryColor};
    place-items: center;
    border-radius: 2px;
    cursor: pointer;
    box-shadow: 0 4px ${props => props.secondaryColor};

    &:active{
        box-shadow: 0 2px ${props => props.secondaryColor};
        transform: translateY(2px);
    }
`;

const Students = styled.div`
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.mediumDark};
    border-radius: 4px;
    padding: 10px;
`;

const StudentData = styled.div`
    width: 100%;
    height: 40px;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 4px;
    margin-bottom: 5px;
    background: ${props => props.theme.colors.dark};
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }

    img{
        border-radius: 50%;
        width: 28px;
        height: 28px;
        object-fit: cover;
        margin-right: 5px;
    }
`;

const SelectionDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;

    img{
        width: 250px;
    }

    nav{
        display: flex;
        align-items: center;
        justify-content: center;

        h3{
            margin-right: 20px;
            font-weight: 400;
            font-family: ${props => props.theme.fonts.secondary};
            color: ${props => props.theme.colors.light};
        }
    }
`;

export {
    Container,
    Title,
    Grid,
    Content,
    ContentHeader,
    Iframe,
    ContentFooter,
    Grade,
    SaveButton,
    Students,
    StudentData,
    SelectionDiv
};