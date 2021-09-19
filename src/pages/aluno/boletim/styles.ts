import styled from 'styled-components';

const Container = styled.div`
    width: 80%;
    margin: 30px 10% 30px 10%;
`;

const TitleHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        font-family: ${props => props.theme.fonts.secondary};
        font-weight: 400;
    }

    button, a {
        width: 130px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        background: ${props => props.theme.colors.secondaryMedium};
        box-shadow: 0 4px ${props => props.theme.colors.secondaryDark};
        border-radius: 4px;
        color: ${props => props.theme.colors.light};
        font-family: ${props => props.theme.fonts.primary};
        text-decoration: none;
        border: none;
        cursor: pointer;

        &:active{
            box-shadow: 0 2px ${props => props.theme.colors.secondaryDark};
            transform: translateY(2px);
        }
    }
`;


const Table = styled.table`
    margin-top: 30px;
    border-collapse: collapse;
    width: 100%;
    border-radius: 8px;

    td, th{
        border: 1px solid ${props => props.theme.colors.light};
        text-align: left;
        padding: 8px;
        background: #303030;
    }

    th{
        background: #151515;
    }
`;

const CaptionGroup = styled.div`
    margin-top: 20px;

    div {
        display: flex;
        align-items: center;
    }
`;

interface CaptionColorProps {
    color: string;
}

const CaptionColor = styled('div')<CaptionColorProps>`
    width: 16px;
    height: 16px;
    border-radius: 2px;
    background: ${props => props.color};
    margin-right: 10px;
`;

export {
    Container,
    TitleHeader,
    Table,
    CaptionGroup,
    CaptionColor
};