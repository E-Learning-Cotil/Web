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
        margin-left: 10px;

        h2{
            font-family: ${props => props.theme.fonts.secondary};
            font-weight: normal;
        }
    }
`;

const ItemsBox = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        h3{
            font-family: ${props => props.theme.fonts.secondary};
            font-weight: normal;
        }
    }
`;

export {
    Container,
    Title,
    ItemsBox
};