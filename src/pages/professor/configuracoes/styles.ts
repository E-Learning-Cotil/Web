import styled from 'styled-components';

const Container = styled.div`
    width: 60%;
    height: 60vh;
    margin: 30px 20% 30px 20%;
`;

const Title = styled.div`
    display: grid;
    place-items: center;

    h2 {
        font-family: ${props => props.theme.fonts.secondary};
        font-weight: 400;
    }

    div{
        width: 80px;
        height: 6px;
        border-radius: 4px;
        background: ${props => props.theme.colors.primaryMedium};
    }
`;

const ConfigDiv = styled.div`
    margin-top: 30px;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.mediumDark};

    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 4px;
`;

const ImageDiv = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    place-items: center;
    overflow: hidden;
    padding: 20px;

    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        background: ${props => props.theme.colors.mediumDark};
        border-radius: 4px;
    }

    input{
        display: none;
    }

    label{
        position: absolute;
        background-color: rgba(0,0,0,0.7);
        border-radius: 4px;
        padding: 10px;
        cursor: pointer;
        border: 0;
        bottom: 30px;
        right: 30px;
    }
`;



const PropertyTitle = styled.h4`
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.colors.primaryMedium};
    font-size: 20px;
    `;

const PropertyData = styled.input`
    width: 100%;
    box-sizing: border-box;
    font-family: ${props => props.theme.fonts.primary};
    font-size: 18px;
    color: ${props => props.theme.colors.light};

    border: 0;
    border-radius: 0;

    outline: none;

    background: ${props => props.theme.colors.mediumDark};

    border-bottom: 1px solid ${props => props.theme.colors.light};

    &:read-only{
        border-bottom: 0;
    }
    `;

const DataFields = styled.form`
    height: 100%;
    width: 100%;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    div div{
        display: flex;
        flex-direction: row;
    }
`;

const InputBox = styled.div`
    width: 100%;
`;

const ButtonsBox = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
`;

interface EditButtonProps{
    background: string;
}

const EditButton = styled.button<EditButtonProps>`
    width: 100%;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    background-color: ${props => props.background};

    border: 0;
    border-radius: 4px;

    p {
        font-family: ${props => props.theme.fonts.secondary};
        font-size: 20px;
        color: ${props => props.theme.colors.light};
        margin-left: 10px;
    }

    `;

const PasswordButton = styled.button`
        border: 0;
        background-color: transparent;
        cursor: pointer;
        width: 20px;
        margin-right: 10px;
    `;

export {
    Container,
    Title,
    ConfigDiv,
    ImageDiv,
    PropertyTitle,
    PropertyData,
    DataFields,
    EditButton,
    PasswordButton,
    InputBox,
    ButtonsBox
};