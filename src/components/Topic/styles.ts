import styled from 'styled-components';

const Wrapper = styled.a`
    width: 100%;
    min-height: 80px;
    background: ${props => props.theme.colors.mediumDark};
    border-radius: 4px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    margin-top: 20px;

`;
const TopicDetails = styled.div`
    display: flex;
    align-items: center;

    section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        p{
            margin-left: 10px;
            font-size: 20px;
            font-family: ${props => props.theme.fonts.secondary};
        }

        span {
            margin-left: 10px;
            font-size: 16px;
            font-family: ${props => props.theme.fonts.primary};
        }
    }

`;

export{
    Wrapper,
    TopicDetails
}