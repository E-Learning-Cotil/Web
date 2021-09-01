import styled from 'styled-components';

const Navigation = styled.div`
    width: 80%;
    height: 100px;
    margin: 30px 10% 0 10%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
`;

const NavLink = styled.a`
    background: ${props => props.theme.colors.mediumDark};
    width: 100%;
    height: 100%;
    border-radius: 8px;
    cursor: pointer;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p{
        font-family: ${props => props.theme.fonts.secondary};
        font-size: 20px;
    }
`;

const Container = styled.div`
    width: 80%;
    margin: 30px 10% 0 10%;
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

const ActivitiesGroup = styled.div`
    width: 100%;
    height: 100px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 20px;
`;

export {
    Navigation,
    NavLink,
    Container,
    Title,
    ActivitiesGroup
};