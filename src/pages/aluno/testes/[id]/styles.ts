import styled from 'styled-components';

const Container = styled.div`
    width: 35%;
    margin: 30px 32.5% 30px 32.5%;
`;

interface TimeColorProps{
    timeColor?: string;
}

const Title = styled.div<TimeColorProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 20px 0 20px 0;

    h2, h3, h4{
        font-family: ${props => props.theme.fonts.secondary};
        font-weight: normal;
    }

    h4{
        b{
            font-weight: normal;
            color: ${props => props.timeColor || props.theme.colors.light};
        }
    }
`;

const Question = styled.div`
    width: 100%;
    height: max-content;
    background: ${props => props.theme.colors.mediumDark};
    border-radius: 4px;
    padding: 20px;
    margin-bottom: 20px;

    img{
        width: 100%;
        margin-top: 10px;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-top: 10px;

        label {
            margin-left: 10px;
        }
    }
`;

interface ColorsProps {
    primary: string;
    secondary: string;
}

const SendButton = styled.button<ColorsProps>`
    margin-top: 10px;
    width: 100%;
    height: 40px;
    background: ${props => props.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.light};
    font-family: ${props => props.theme.fonts.secondary};
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    box-shadow: 0 4px ${props => props.secondary};

    &:active{
    box-shadow: 0 2px ${props => props.secondary};
    transform: translateY(2px);
    }

    p{
        margin-right: 20px;
    }
`;

const WarningBox = styled.div<ColorsProps>`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: ${props => props.theme.colors.mediumDark};
    border-radius: 4px;

    nav{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 20px;

        h1{
            margin-left: 10px;
        }
    }

    p{
        margin-bottom: 20px;
    }

    a{
        padding: 10px;
        background: ${props => props.primary};
        border-radius: 2px;
        text-decoration: none;
        color: ${props => props.theme.colors.light};

        box-shadow: 0 4px ${props => props.secondary};

        &:active{
            box-shadow: 0 2px ${props => props.secondary};
            transform: translateY(2px);
        }
    }
`;

const MarginTenPx = styled.div`
    width: 100%;
    height: 10px;
`;

export {
    Container,
    Title,
    Question, 
    SendButton,
    WarningBox,
    MarginTenPx
};