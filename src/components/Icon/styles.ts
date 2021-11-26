import styled from 'styled-components';

interface IconContainerProps {
    background: string;
}

const IconContainer = styled("div")<IconContainerProps>`
    width: 60px;
    height: 60px;
    border-radius: 4px;
    background: ${props => props.background};
    display: grid;
    place-items: center;
    margin-right: 10px;

    img{
        width: 40px;
        height: 40px;
        object-fit: contain;
    }
`;

export {
    IconContainer
};