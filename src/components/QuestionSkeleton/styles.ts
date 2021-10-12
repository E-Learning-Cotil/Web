import styled from "styled-components";

const Skeleton = styled.div`
    width: 100%;
    height: max-content;
    background: ${props => props.theme.colors.mediumDark};
    border-radius: 4px;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
`;

const MarginTenPx = styled.div`
    width: 100%;
    height: 10px;
`;

export {
    Skeleton,
    MarginTenPx
}