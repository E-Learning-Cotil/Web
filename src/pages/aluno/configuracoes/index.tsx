import Header from "../../../components/Header"
import withAuthSSG from "../../../hoc/withAuthSSG";
import ClassSkeleton from "../../../components/ClassSkeleton";
import ActivitySkeleton from "../../../components/ActivitySkeleton";
import Class from "../../../components/Class";
import Activity from "../../../components/Activity";
import { useFetch } from "../../../hooks/useFetch";
import Head from "next/head";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { api } from "../../../services/api";
import { useDropzone } from 'react-dropzone';

import { Container, Title, ConfigDiv, ImageDiv, PropertyTitle, PropertyData, DataFields, EditButton } from "./styles";

function Configuracoes() {
    const { user } = useContext(AuthContext)
    //console.log(user);
    const [isModifiable, setIsModifiable] = useState(true);
    const [userData, setUserData] = useState({
        email: "",
        photo: "",
        name: "",
        role: "",
        telephone: "",
        password: "",
        idSerie: 0
    });
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

    useEffect(() => {
        user && setUserData({
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
            if (acceptedFiles[0]) {
                const formData = new FormData();

                formData.append('file', acceptedFiles[0]);

                const { data: uploadedFile } = await api.post('/arquivos', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'basic_token': '7631c0f15fc888a088c5f0c28047aaef'
                    }
                })

                user && setUserData({
                    ...userData,
                    photo: uploadedFile.link
                });
            }
        })()
    }, [acceptedFiles])

    async function updateStudentData() {
        setIsModifiable(!isModifiable);
        if(!isModifiable){
            
        }
        else{
            /*try{
                const { data : responseMessage} = await api.put('/alunos', {
                    nome: userData.name,
                    telefone: userData.telephone,
                    email: userData.email,
                    foto: userData.photo,
                    senha: userData.password,
                    idSerie: userData.idSerie
                })
            }
            catch(error){
                console.log(error.response);
            }*/
            console.log(userData);
            //mandar para o banco
        }

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
                    {!isModifiable ? (
                        <ImageDiv {...getRootProps({ className: 'dropzone' })}>
                            <input {...getInputProps()} />
                            <img src={`${userData?.photo}`} alt="perfil" />
                            <button
                                type="button"
                            >
                                <FontAwesomeIcon
                                    icon={faCamera}
                                    color="#fff"
                                    size="2x"
                                />
                            </button>
                        </ImageDiv>
                    ) : (
                        <ImageDiv>
                            <img src={`${userData?.photo}`} alt="perfil" />
                        </ImageDiv>
                    )

                    }

                    <DataFields>
                        <div>
                            <PropertyTitle>Nome:</PropertyTitle>
                            <PropertyData type="text" value={`${userData?.name}`} readOnly={isModifiable} onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
                        </div>

                        <div>
                            <PropertyTitle>Telefone:</PropertyTitle>
                            <PropertyData type="tel" value={`${userData?.telephone}`} readOnly={isModifiable} onChange={(e) => setUserData({ ...userData, telephone: e.target.value })} />
                        </div>

                        <div>
                            <PropertyTitle>Senha:</PropertyTitle>
                            <PropertyData type="password" value={`${userData?.password}`} readOnly={isModifiable} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                        </div>

                        <div>
                            <PropertyTitle>Email:</PropertyTitle>
                            <PropertyData type="email" value={`${userData?.email}`} readOnly={isModifiable} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                        </div>
                        <EditButton type="button" onClick={updateStudentData}>
                            <FontAwesomeIcon
                                icon={faPencilAlt}
                                color="#fff"
                                size="2x"
                            />
                            <p>Editar</p>
                        </EditButton>
                    </DataFields>
                </ConfigDiv>
            </Container>
        </div>
    );
}
export default withAuthSSG(Configuracoes);