import Header from "../../../components/Header";
import withAuthSSG from "../../../hoc/withAuthSSG";
import Head from "next/head";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from 'react-toastify';
import {
  faCamera,
  faPencilAlt,
  faEye,
  faEyeSlash,
  faCheck,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { api } from "../../../services/api";

import {
  Container,
  Title,
  ConfigDiv,
  ImageDiv,
  PropertyTitle,
  PropertyData,
  DataFields,
  InputBox,
  EditButton,
  PasswordButton,
  ButtonsBox
} from "./styles";

import 'react-toastify/dist/ReactToastify.css';

function Configuracoes() {
  const { user } = useContext(AuthContext);
  //console.log(user);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [inputType, setInputType] = useState("password");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [newFile, setNewFile] = useState(null);
  const [userData, setUserData] = useState({
    email: "",
    photo: "",
    name: "",
    role: "",
    telephone: "",
    password: "",
    idSerie: null,
  });

  useEffect(() => {
    user &&
      setUserData({
        email: user?.email,
        photo: user?.foto,
        name: user?.nome,
        role: user?.role,
        telephone: user?.telefone,
        password: "********",
        idSerie: user?.idSerie
      });
  }, [user]);

  useEffect(() => {
    (async () => {
      if (newFile) {
        const formData = new FormData();

        formData.append("file", newFile);

        const { data: uploadedFile } = await api.post("/arquivos", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            basic_token: process.env.NEXT_PUBLIC_BASIC_TOKEN,
          },
        });

        console.log(uploadedFile);

        user &&
          setUserData({
            ...userData,
            photo: uploadedFile.link,
          });
      }
    })();
  }, [newFile]);

  async function updateStudentData() {
    setUserData({
      ...userData,
      password: isReadOnly ? "" : "********"
    });

    setIsReadOnly(!isReadOnly);
    if (!isReadOnly){

      try {
        const { data: responseMessage } = await api.put("/alunos", {
          nome: userData.name,
          telefone: userData.telephone,
          email: userData.email,
          foto: userData.photo,
          senha: userData.password,
          idSerie: userData.idSerie
        });

        console.log({
            nome: userData.name,
            telefone: userData.telephone,
            email: userData.email,
            foto: userData.photo,
            senha: userData.password,
            idSerie: userData.idSerie
          })

        toast.success("Aluno alterado com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } catch (error) {
        console.log(error.response);
        toast.error("Ocorreu um erro ao alterar aluno!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  }

  function changePasswordState() {
    setIsPasswordVisible(!isPasswordVisible);
    if(inputType === "password"){
      setInputType("text");
    }else {
      setInputType("password");
    }
  }

  return (
    <div>
      <Head>
        <title>Configurações | E-Learning</title>
      </Head>

      <Header 
        primaryColor="#4AED64"
        secondaryColor="#009418"
      />

      <Container>
        <Title>
          <h2>Configurações</h2>
        </Title>

        <ConfigDiv>
          <ImageDiv>
            <img src={userData?.photo} alt={userData?.name} />
            {!isReadOnly && (
              <>
                <input 
                  type="file"
                  id="change-user-image"
                  onChange={e => setNewFile(e.target.files[0])}
                />
                <label htmlFor="change-user-image">
                  <FontAwesomeIcon icon={faCamera} color="#fff" size="2x" />
                </label>
              </>
            )}
          </ImageDiv>

          <DataFields>
            <InputBox>
              <PropertyTitle>Nome:</PropertyTitle>
              <PropertyData
                type="text"
                value={`${userData?.name}`}
                readOnly={isReadOnly}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
              />
            </InputBox>

            <InputBox>
              <PropertyTitle>Telefone:</PropertyTitle>
              <PropertyData
                type="tel"
                value={`${userData?.telephone}`}
                readOnly={isReadOnly}
                onChange={(e) =>
                  setUserData({ ...userData, telephone: e.target.value })
                }
              />
            </InputBox>

            <InputBox>
              <PropertyTitle>Senha:</PropertyTitle>
              <div>
                <PropertyData
                  type={inputType}
                  value={`${userData?.password}`}
                  readOnly={isReadOnly}
                  placeholder="Deixe vazio para manter a senha atual!"
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                />
                  {!isReadOnly && (
                    <PasswordButton 
                      type="button" 
                      onClick={changePasswordState}>
                        <FontAwesomeIcon
                          icon={isPasswordVisible ? faEye : faEyeSlash}
                          color="#fff"
                          size="1x"
                        />
                    </PasswordButton>
                  )}
              </div>
            </InputBox>

            <InputBox>
              <PropertyTitle>Email:</PropertyTitle>
              <PropertyData
                type="email"
                value={`${userData?.email}`}
                readOnly={isReadOnly}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </InputBox>
            
            {isReadOnly ? (
              <EditButton 
                background="#0CBE29"
                type="button" 
                onClick={updateStudentData}
              >
                <FontAwesomeIcon icon={faPencilAlt} color="#fff" size="2x" />
                <p>Editar</p>
              </EditButton>
            ) : (
                <ButtonsBox>
                <EditButton 
                  background="#be120c"
                  type="button" 
                  onClick={() => {
                    setIsReadOnly(true);
                    setUserData({
                      ...userData,
                      password: "********"
                    });
                  }}
                >
                  <FontAwesomeIcon icon={faTimes} color="#fff" size="2x" />
                  <p>Cancelar</p>
                </EditButton>
                <EditButton 
                  background="#0CBE29"
                  type="button"
                  onClick={updateStudentData}
                >
                  <FontAwesomeIcon icon={faCheck} color="#fff" size="2x" />
                  <p>Salvar</p>
                </EditButton>
              </ButtonsBox>
            )}
          </DataFields>
        </ConfigDiv>
      </Container>

      <ToastContainer />
    </div>
  );
}
export default withAuthSSG(Configuracoes);
