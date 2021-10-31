import styled from 'styled-components';

const Container = styled.div`
    width: 80%;
    margin: 30px 10% 30px 10%;

    span{
        display: block;
        margin-top: 20px;
    }
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    section{
        height: 100%;
        margin-left: 10px;
        display: flex;
        flex-direction: column;

        div:nth-child(2){
            margin-top: 5px;
        }

        h2, h4{
            font-family: ${props => props.theme.fonts.secondary};
            font-weight: normal;
        }
    }
`;

const ItemsBox = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        h3{
            font-family: ${props => props.theme.fonts.secondary};
            font-weight: normal;
        }

        section{
            width: 100%;

            nav{
                margin-top: 10px;
            }
        }
    }
`;

const TitleBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

interface CreateButtonProps{
    color : string;
}

const CreateButton = styled.div<CreateButtonProps>`
    color: ${props => props.theme.colors.light};
    background: ${props => props.color};
    
    cursor: pointer;

    font-family: ${props => props.theme.fonts.secondary};
    font-size: 18px;
    
    padding: 5px;
    margin-left: 10px;
    border-radius: 6px;

    div
    {
        display: flex;
        align-items: center;

        p{
            margin-left: 10px;
        }
    }
`;


const CreateButtonsBox = styled.div`
    display: flex;
`;

export {
    Container,
    Title,
    ItemsBox,
    TitleBar,
    CreateButton,
    CreateButtonsBox
};