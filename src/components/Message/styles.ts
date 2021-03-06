import styled, { css } from 'styled-components';

interface MessageProps{
    isMine: boolean;
    color: string;
}

const Container = styled("div")<MessageProps>`
    width: 100%;
    display: flex;
    margin-bottom: 10px;

    ${props => props.isMine ? css`
        justify-content: flex-end;
    ` : css`
        justify-content: flex-start;
    `}
`;

const Text = styled("p")<MessageProps>`
    padding: 10px;
    width: max-content;
    max-width: 70%;
    border-radius: 4px;
    position: relative;

    background: ${props => props.color};

    ${props => props.isMine ? css`
        float: right;
    ` : css`
        background: ${props => props.theme.colors.dark};
    `}

    p{
        width: 100%;
        font-size: 12px;
        color: #ddd;
        display: flex;

        ${props => props.isMine ? css`
            justify-content: flex-end;
        ` : css`
            justify-content: flex-start;
        `}
    }

    span{
        position: absolute;
        top: 0;
        width: 0;
        height: 0;

        border-top: 15px solid ${props => props.color};
        
        ${props => props.isMine ? css`
            right: -10px;
            border-right: 15px solid transparent;
        ` : css`
            border-top: 15px solid ${props => props.theme.colors.dark};
            left: -10px;
            border-left: 15px solid transparent;
        `}
    }
`;

export {
    Text,
    Container
}