import styled from 'styled-components';

const Container = styled.div`
    width: 80%;
    margin: 30px 10% 30px 10%;
`;

const Title = styled.div`
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
    width: 60%;
    height: 60vh;
    margin-left: 20%;
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
        z-index: 4;
        width: calc(55vh - 90px);
        height: calc(55vh - 90px);
        border-radius: 4px;
        background: ${props => props.theme.colors.mediumDark};
        object-fit: cover;
    }

    button{
        position: absolute;
        z-index: 5;
        top: calc(55vh - 90px);
        right: 30px;
        background-color: rgba(0,0,0,0.7);
        border-radius: 4px;
        padding: 10px;
        cursor: pointer;
        border: 0;
    }
`;

const PropertyTitle = styled.h4`
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.colors.primaryMedium};
    font-size: 20px;
    `;

const PropertyData = styled.input`
    width: calc(30vw - 100px);
    box-sizing: border-box;
    font-family: ${props => props.theme.fonts.secondary};
    font-size: 18px;
    color: ${props => props.theme.colors.light};

    border: 0;
    background-color: transparent;

    outline: none;
    `;

const DataFields = styled.form`
    margin-top: auto;
    margin-bottom: auto;
    height: 80%;
    width: 100%;
    display: flex;
    margin-left: 20px;

    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    div div{
        display: flex;
        flex-direction: row;
    }
    `;

const EditButton = styled.button`
    width: 50%;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    background-color: ${props => props.theme.colors.primaryMedium};

    border: 0;
    border-radius: 4px;

    p {
        font-family: ${props => props.theme.fonts.secondary};
        font-size: 24px;
        color: ${props => props.theme.colors.light};
        margin-left: 10px;
    }

    `;

const PasswordButton = styled.button`
        border: 0;
        background-color: ${props => props.theme.colors.mediumDark};
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
    PasswordButton
};