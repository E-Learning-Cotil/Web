import styled from 'styled-components';

const Container = styled.div`
    width: 80%;
    margin: 30px 10% 30px 10%;

    span{
        display: block;
        margin-top: 20px;
    }
    
    h3 {
        margin-top: 20px;
        font-family: ${props => props.theme.fonts.secondary};
        font-weight: 400;
    }
`;

interface TimeColorProps{
    timeColor: string;
}

const Title = styled.div<TimeColorProps>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2, h4 {
        font-family: ${props => props.theme.fonts.secondary};
        font-weight: 400;

        b{
            font-weight: 400;
            color: ${props => props.timeColor};
        }
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }

    nav{
        display: flex;
    }
`;

const FileBox = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    section {
        h3{
            height: 40px;
        }
    }
`;

const SpaceTop = styled.div`
    margin-top: 10px;
`;

interface InputColorProps{
    background: string;
}

const Inbox = styled.section<InputColorProps>`
    background: ${props => props.background};
    padding: 5px 10px 5px 10px;
    border-radius: 2px;
    margin-left: 10px;

    h6{
        font-family: ${props => props.theme.fonts.primary};
        font-weight: normal;
        font-size: 16px;
        margin-right: 5px;
        display: inline;
    }
`;

export {
    Container,
    Title,
    FileBox,
    SpaceTop,
    Inbox
};