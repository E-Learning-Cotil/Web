import styled from "styled-components";

const ActivityWrapper = styled.a`
    width: 100%;
    height: 80px;
    background: ${props => props.theme.colors.mediumDark};
    border-radius: 4px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`;

interface ActivityNameProps{
    backgroundColor: string;
}

const ActivityName = styled("div")<ActivityNameProps>`
    display: flex;
    align-items: center;

    div{
        width: 60px;
        height: 60px;
        border-radius: 4px;
        background: ${props => props.backgroundColor};
        display: grid;
        place-items: center;

        img{
            width: 40px;
            height: 40px;
            object-fit: contain;
        }
    }

    p{
        margin-left: 10px;
        font-size: 20px;
        font-family: ${props => props.theme.fonts.secondary};
    }
`;

const ActivityDate = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
`;

export {
    ActivityWrapper,
    ActivityName,
    ActivityDate
}