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

interface RoleButtonProps{
    isSelected: boolean;
}

const RoleButton = styled("button")<RoleButtonProps>`
    width: 100%;
    height: 10vh;
    min-height: 120px;
    background: transparent;
    border-radius: 6px;
    border: 1px solid #000;
    font-family: ${props => props.theme.fonts.primary};
    
    ${props => props.isSelected ? css`
        background-image: linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.9));
        color: #fff;
        cursor: default;
    ` : css`
        background-image: linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0));
        color: #666;
        cursor: pointer;
    `}

    p{
        margin-top: 5px;
    }
`;

const FormWrapper = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    display: grid;
    place-items: center;
`;

const Form = styled.form`
    width: 20vw;
    height: 65vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    border-radius: 8px;
    padding: 20px;

    background-color: ${props => props.theme.colors.mediumDark};
`;

const LoginTitle = styled.p`
    font-size: 24px;
    font-family: ${props => props.theme.fonts.secondary};
`;

const LoginButton = styled.button`
    display: grid;
    place-items: center;
    border: none;
    border-radius: 4px;

    width: 100%;
    height: 35px;
    
    background: ${props => props.theme.colors.secondaryMedium};
    color: ${props => props.theme.colors.light};
    
    font-size: 16px;
    font-family: ${props => props.theme.fonts.secondary};
    text-decoration: none;
    cursor: pointer;
    box-shadow: 0 4px ${props => props.theme.colors.secondaryDark};

    &:active{
      box-shadow: 0 2px ${props => props.theme.colors.secondaryDark};
      transform: translateY(2px);
    }
`;

const RoleSelector = styled.div`
    width: 100%;
    height: max-content;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    `;

const InputGroup = styled.div`
    width: 100%;
`;

const InputBox = styled.div`
    width: 100%;

    p{
        margin-top: 10px;
        margin-bottom: 5px;
        
        span{
            margin-left: 5px;
        }
    }

    input{
        width: 100%;
        height: 35px;

        background-color: ${props => props.theme.colors.dark};

        outline: none;
        border: 0;
        border-radius: 6px;

        font-family: ${props => props.theme.fonts.primary};
        color: ${props => props.theme.colors.light};
        padding-left: 5px;
    }
`;

export {
    Header,
    TitleSticker,
    Form,
    RoleButton,
    InputBox,
    LoginTitle,
    LoginButton,
    RoleSelector,
    FormWrapper,
    InputGroup
};