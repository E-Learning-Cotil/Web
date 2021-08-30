import styled from 'styled-components';


const Wrapper = styled.div`
    background: ${props => props.theme.colors.primaryDark};
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Trapezoid = styled.div`
    position: relative;
    margin-left: calc(10% + 25px);
    width: 200px;
    height: 80px;

    div {
        width: 400px;
        height: 80px;
        position: absolute;
        top: 0;
        left: 0;
        transform: skew(-30deg);
        background: ${props => props.theme.colors.primaryMedium};
    }

    img {
        position: absolute;
        top: 15px;
        left: 75px;
        width: 250px;
    }
`;

const ProfilePic = styled.img`
    margin-right: 10%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid ${props => props.theme.colors.light};
    object-fit: cover;
`;

export {
    Wrapper,
    ProfilePic,
    Trapezoid
};