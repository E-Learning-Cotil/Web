import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 50px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: #161616;
    border-bottom: 1px solid ${props => props.theme.colors.mediumDark};

    section{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 10px;
    }
`;

export {
    Container
}