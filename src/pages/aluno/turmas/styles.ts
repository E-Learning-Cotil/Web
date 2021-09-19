import styled from 'styled-components';

const Container = styled.div`
    width: 80%;
    margin: 30px 10% 30px 10%;
`;

const Title = styled.div`
    h2 {
        font-family: ${props => props.theme.fonts.secondary};
        font-weight: 400;
    }

    div{
        width: 80px;
        height: 6px;
        border-radius: 4px;
        background: ${props => props.theme.colors.primaryMedium};
    }
`;

const Group = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 20px;
`;

export {
    Container,
    Title,
    Group
};