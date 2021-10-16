import Header from "../../../components/Header";
import withAuthSSG from "../../../hoc/withAuthSSG";
import ClassSkeleton from "../../../components/ClassSkeleton";
import ActivitySkeleton from "../../../components/ActivitySkeleton";
import Class from "../../../components/Class";
import Activity from "../../../components/Activity";
import { useFetch } from "../../../hooks/useFetch";
import Head from "next/head";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faPencilAlt,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { api } from "../../../services/api";
import { useDropzone } from "react-dropzone";

import {
  Container,
  Title,
  ConfigDiv,
  ImageDiv,
  PropertyTitle,
  PropertyData,
  DataFields,
  EditButton,
  PasswordButton,
} from "./styles";

function Configuracoes() {
  const { user } = useContext(AuthContext);
  //console.log(user);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [inputType, setInputType] = useState("password");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    photo: "",
    name: "",
    role: "",
    telephone: "",
    password: "",
    idSerie: 1,
  });
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  useEffect(() => {
    user &&
      setUserData({
        email: user?.email,
        photo: user?.foto,
        name: user?.nome,
        role: user?.role,
        telephone: user?.telefone,
        //password: "********",
        password: "123456",
        //idSerie: user?.idSerie
        idSerie: 1,
      });
  }, [user]);

  useEffect(() => {
    (async () => {
      if (acceptedFiles[0]) {
        const formData = new FormData();

        formData.append("file", acceptedFiles[0]);

        const { data: uploadedFile } = await api.post("/arquivos", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            basic_token: "7631c0f15fc888a088c5f0c28047aaef",
          },
        });

        user &&
          setUserData({
            ...userData,
            photo: uploadedFile.link,
          });
      }
    })();
  }, [acceptedFiles]);

  async function updateStudentData() {
    setIsReadOnly(!isReadOnly);
    if (isReadOnly) {
        
    } else {
      try {
        const { data: responseMessage } = await api.put("/alunos", {
          nome: userData.name,
          telefone: userData.telephone,
          email: userData.email,
          foto: userData.photo,
          senha: userData.password,
          idSerie: userData.idSerie,
        });
      } catch (error) {
        console.log(error.response);
      }
      console.log(userData);
      //mandar para o banco
    }
  }

  function changePasswordState() {
    setIsPasswordVisible(!isPasswordVisible);
    if (inputType === "password") setInputType("text");
    else setInputType("password");
  }

  return (
    <div>
      <Head>
        <title>Configurações | E-Learning</title>
      </Head>

      <Header />
      <Container>
        <Title>
          <h2>Configurações</h2>
        </Title>

        <ConfigDiv>
          {!isReadOnly ? (
            <ImageDiv {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <img src={`${userData?.photo}`} alt="perfil" />
              <button type="button">
                <FontAwesomeIcon icon={faCamera} color="#fff" size="2x" />
              </button>
            </ImageDiv>
          ) : (
            <ImageDiv>
              <img src={`${userData?.photo}`} alt="perfil" />
            </ImageDiv>
          )}

          <DataFields>
            <div>
              <PropertyTitle>Nome:</PropertyTitle>
              <PropertyData
                type="text"
                value={`${userData?.name}`}
                readOnly={isReadOnly}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
              />
            </div>

            <div>
              <PropertyTitle>Telefone:</PropertyTitle>
              <PropertyData
                type="tel"
                value={`${userData?.telephone}`}
                readOnly={isReadOnly}
                onChange={(e) =>
                  setUserData({ ...userData, telephone: e.target.value })
                }
              />
            </div>

            <div>
              <PropertyTitle>Senha:</PropertyTitle>
              <div>
                <PropertyData
                  type={inputType}
                  value={`${userData?.password}`}
                  readOnly={isReadOnly}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                />
                <PasswordButton type="button" onClick={changePasswordState}>
                  <FontAwesomeIcon
                    icon={isPasswordVisible ? faEye : faEyeSlash}
                    color="#fff"
                    size="1x"
                  />
                </PasswordButton>
              </div>
            </div>

            <div>
              <PropertyTitle>Email:</PropertyTitle>
              <PropertyData
                type="email"
                value={`${userData?.email}`}
                readOnly={isReadOnly}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </div>
            <EditButton type="button" onClick={updateStudentData}>
              <FontAwesomeIcon icon={faPencilAlt} color="#fff" size="2x" />
              <p>Editar</p>
            </EditButton>
          </DataFields>
        </ConfigDiv>
      </Container>
    </div>
  );
}
export default withAuthSSG(Configuracoes);
