import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const Header = styled.div`
    background-color: ${props => props.theme.colors.primaryMedium};
    width: 100%;

    padding: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 100%;
        height: 7vh;
    }
`;

const Main = styled.div`
    width: 80%;
    height: 100%;
    margin: 0 10% 0 10%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const Info = styled.div`
    margin-top: 30px;

    p{
        margin-top: 10px;
        font-size: 1.2em;
        text-align: justify;
    }
`;

const ImageWrapper = styled.div`
    margin-top: 40px;
    display: flex;
    place-items: center;
    
    img{
        width: 100%;
    }
`;

const DownloadButton = styled.a`
    width: 100%;
    display: grid;
    grid-template-columns: 20% 80%;

    text-decoration: none;

    cursor: pointer;

    border: 0;
    background: ${props => props.theme.colors.dark};
    color: ${props => props.theme.colors.light};
    font-family: ${props => props.theme.fonts.secondary};
    font-size: 20px;

    margin-top: 30px;
    margin-bottom: 30px;

    p{
        color: ${props => props.theme.colors.light};
        background: ${props => props.theme.colors.secondaryLight};
        padding-top: 15px;
        padding-bottom: 15px;
        border-radius: 0 4px 4px 0;

        display: grid;
        place-items: center;
    }

    section{
        border-width:  0 2px 0 0;
        border-style: solid;
        border-color: ${props => props.theme.colors.light};
        border-radius: 4px 0 0 4px;

        background: ${props => props.theme.colors.secondaryMedium};
        padding-top: 15px;
        padding-bottom: 15px;

        display: grid;
        place-items: center;
    }
`;

export {
    Container,
    Header,
    ImageWrapper,
    Main,
    Info,
    DownloadButton
}