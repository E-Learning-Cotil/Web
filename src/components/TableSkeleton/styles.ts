import styled from 'styled-components';

const Skeleton = styled.table`
    margin-top: 30px;
    border-collapse: collapse;
    width: 100%;
    border-radius: 8px;

    td, th{
        border: 1px solid ${props => props.theme.colors.light};
        text-align: left;
        padding: 8px;
        background: #303030;
    }

    th{
        background: #151515;
    }
`;


export {
    Skeleton
};