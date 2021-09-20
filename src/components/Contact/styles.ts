import styled, {css} from 'styled-components';

interface ContainerProps{
    isSelected: boolean;
}

const Container = styled("div")<ContainerProps>`
    width: 100%;
    height: 50px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    border-bottom: 1px solid ${props => props.theme.colors.mediumDark};
    cursor: pointer;

    ${props => props.isSelected ? css`
        background: ${props => props.theme.colors.primaryDark};
    ` : css`
        background: #161616;
    `}

    &:last-child{
        border-bottom: none;
    }

    &:hover{
        background: ${props => props.theme.colors.primaryMedium};
    }

    img{
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 50%;
    }

    div{
        margin-left: 10px;
        width: calc(100% - 50px);

        h3{
            font-family: ${props => props.theme.fonts.secondary};
            font-weight: normal;
        }

        p{
            font-family: ${props => props.theme.fonts.primary};

            i{
                font-size: 14px;
                color: ${props => props.theme.colors.light};
                opacity: 0.7;
            }
        }
    }

    span{
        position: absolute;
        top: 5px;
        right: 5px;
        padding: 5px;
        background: ${props => props.theme.colors.secondaryMedium};
        font-size: 12px;
        display: flex;
        align-items: center;
        border-radius: 2px;

        p{
            margin-left: 5px;
        }
    }
`;

export {
    Container
}