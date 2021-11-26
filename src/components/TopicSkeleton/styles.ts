import styled from "styled-components";

const Skeleton = styled.div`
    width: 100%;
    height: 80px;
    background: ${props => props.theme.colors.mediumDark};
    border-radius: 4px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 20px;

    div{
        margin-right: 10px;
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        section{
            width:10px;
            height:10px;
        }
    }
`;

export {
    Skeleton
}