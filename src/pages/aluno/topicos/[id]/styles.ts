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

export {
    Container,
    Title,
    ItemsBox
};