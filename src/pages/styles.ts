import styled from 'styled-components';

const Header = styled.div`
  width: 100%;
  height: 80px;
  background: ${props => props.theme.colors.primaryDark};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10%;

  button{
    width: 90px;
    height: 40px;
    display: grid;
    place-items: center;
    background: ${props => props.theme.colors.secondaryMedium};
    box-shadow: 0 4px ${props => props.theme.colors.secondaryDark};
    border-radius: 4px;
    color: ${props => props.theme.colors.light};
    font-family: ${props => props.theme.fonts.secondary};
    text-decoration: none;
    border: none;
    cursor: pointer;

    &:active{
      box-shadow: 0 2px ${props => props.theme.colors.secondaryDark};
      transform: translateY(2px);
    }
  }
`;

const TitleSticker = styled.div`
    div {
        width: 200px;
        height: 400px;
        position: absolute;
        top: 0;
        left: 0;
        transform: skew(-45deg);
        background: ${props => props.theme.colors.primaryMedium};
    }

    img {
        transform: rotate(-45deg);
        position: absolute;
        top: 120px;
        left: 30px;
        width: 250px;
    }
`;

const Main = styled.div`
    width: 80%;
    height: calc(100vh - 90px);
    margin: 0 10% 0 10%;

    display: grid;
    grid-template-columns: 59% 39%;
    gap: 2%;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    p{
        max-width: 70%;
        margin-top: 10px;
        text-align: right;
        font-size: 1.2em;
    }

    a{
        width: 120px;
        height: 40px;
        display: grid;
        place-items: center;
        border: 1.5px solid ${props => props.theme.colors.light};
        border-radius: 40px;
        color: ${props => props.theme.colors.light};
        font-family: ${props => props.theme.fonts.primary};
        font-weight: bold;
        font-size: 16px;
        text-decoration: none;
        margin: 20px 0px 20px 20px;
    }
`;

const ImageWrapper = styled.div`
    display: flex;
    place-items: center;
    
    img{
        width: 100%;
    }
`;

export {
    Header,
    TitleSticker,
    Main,
    Info,
    ImageWrapper
};