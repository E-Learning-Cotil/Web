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

export {
    Title,
    Container,
    ClassName
};