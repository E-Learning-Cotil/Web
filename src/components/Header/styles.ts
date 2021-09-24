import styled, { css } from 'styled-components';

interface WrapperProps{
    background: string;
}

const Wrapper = styled("div")<WrapperProps>`
    background: ${props => props.background};
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

interface TrapezoidProps{
    background: string;
}

const Trapezoid = styled.div<TrapezoidProps>`
    position: relative;
    margin-left: calc(10% + 25px);
    width: 200px;
    height: 80px;
    cursor: pointer;

    div {
        width: 400px;
        height: 80px;
        position: absolute;
        top: 0;
        left: 0;
        transform: skew(-30deg);
        background: ${props => props.background};
    }

    img {
        position: absolute;
        top: 15px;
        left: 75px;
        width: 250px;
    }
`;

interface ProfilePicProps{
    hasBorder: boolean;
}

const ProfilePic = styled("img")<ProfilePicProps>`
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
    
    ${props => props.hasBorder ? css`
            width: 50px;
            height: 50px;
            border: 2px solid ${props => props.theme.colors.light};
        ` : css`
            width: 80px;
            height: 80px;
        `
    }
`;

const ProfileButton = styled.button`
    margin-right: 10%;
    background-color: transparent;
    border: none;
    position: relative;
`;

const Triangle = styled.div`
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid ${props => props.theme.colors.mediumDark};

    position: absolute;
    right: 5px;
    top: -15px;
`;

const MiniProfile = styled.div`
    width: 250px;
    height: 280px;
    padding-left: 10px;
    padding-right: 10px;
    
    border-radius: 5px;
    
    background-color: ${props => props.theme.colors.mediumDark};
    box-shadow: -1px 0 1em black;
    
    position: absolute;
    top: 65px;
    right: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

const ControlButton = styled.button`
    background-color: ${props => props.theme.colors.dark};
    color: ${props => props.theme.colors.light};

    font-family: ${props => props.theme.fonts.primary};
    font-weight: 700;
    font-size: 20px;

    border: 0;
    border-radius: 8px;

    width: 80%;
    height: 40px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    cursor: pointer;
`;

const Text = styled.div`
    justify-self: start;
`;

const ProfileName = styled.h2`
    color: ${props => props.theme.colors.light};
    font-family: ${props => props.theme.fonts.primary};
    font-size: 22px;
`;

const ProfileEmail = styled.h4`
    color: ${props => props.theme.colors.light};
    font-family: ${props => props.theme.fonts.primary};
    text-decoration: underline;
    font-weight: 400;
    margin-bottom: 10px;
    margin-top: -10px;
`;


export {
    Wrapper,
    ProfilePic,
    Trapezoid,
    ProfileButton,
    Triangle,
    MiniProfile,
    ControlButton,
    ProfileEmail,
    ProfileName,
    Text
};