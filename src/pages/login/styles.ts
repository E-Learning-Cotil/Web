import styled, {css} from 'styled-components';

const Header = styled.div`
  width: 100%;
  height: 80px;
  background: ${props => props.theme.colors.primaryDark};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10%;

  button{
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    place-items: center;

    span{
        color: ${props => props.theme.colors.light};
        font-size: 16px;
        margin-left: 10px;
        font-family: ${props => props.theme.fonts.primary};
    }
  }
`;

const TitleSticker = styled.div`
    div {
        width: 200px;
        height: 400px;
        position: absolute;
        top: 0;
        right: 0;
        overflow: hidden;
        transform: skew(45deg);
        background: ${props => props.theme.colors.primaryMedium};
    }

    img {
        transform: rotate(45deg);
        position: absolute;
        top: 120px;
        right: 30px;
        width: 250px;
    }
`;

const Form = styled.div`

`;

interface RoleButtonProps{
    isSelected: boolean;
}

const RoleButton = styled("button")<RoleButtonProps>`
    width: 80px;
    height: 80px;
    background: transparent;
    border-radius: 4px;
    border: 1px solid #000;
    ${props => props.isSelected ? css`
        background-image: linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.9));
        color: #fff;
    ` : css`
        background-image: linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0));
        color: #666;
    `}
`;

const InputBox = styled.div`
    p{
        display: flex;
        flex-direction: row;
    }
`;

export {
    Header,
    TitleSticker,
    Form,
    RoleButton,
    InputBox
};