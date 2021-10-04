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
import { faCamera, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

import { Container, Title, ConfigDiv, ImageDiv, PropertyTitle, PropertyData, DataFields, EditButton } from "./styles";

function Configuracoes() {
    const { user } = useContext(AuthContext)
    console.log(user);
    const [isModifiable, setIsModifiable] = useState(true);
    const [userData, setUserData] = useState({
        email: "",
        photo: "",
        name: "",
        role: "",
        telephone: "",
        password: ""
    });

    useEffect(() => {
        user && setUserData({
            email: user?.email,
            photo: user?.foto,
            name: user?.nome,
            role: user?.role,
            telephone: user?.telefone,
            password: "********"
        });
    }, [user]);

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
                    <ImageDiv>
                        <img src={`${user?.foto}`} alt="perfil" />
                        <button>
                            <FontAwesomeIcon
                                icon={faCamera}
                                color="#fff"
                                size="2x"
                            />
                        </button>
                    </ImageDiv>

                    <DataFields>
                        <div>
                            <PropertyTitle>Nome:</PropertyTitle>
                            <PropertyData value={`${userData?.name}`} readOnly={isModifiable} onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
                        </div>

                        <div>
                            <PropertyTitle>Telefone:</PropertyTitle>
                            <PropertyData value={`${userData?.telephone}`} readOnly={isModifiable} onChange={(e) => setUserData({ ...userData, telephone: e.target.value })} />
                        </div>

                        <div>
                            <PropertyTitle>Senha:</PropertyTitle>
                            <PropertyData value={`${userData?.password}`} readOnly={isModifiable} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                        </div>

                        <div>
                            <PropertyTitle>Email:</PropertyTitle>
                            <PropertyData value={`${userData?.email}`} readOnly={isModifiable} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                        </div>
                        <EditButton onClick={() => setIsModifiable(!isModifiable)}>
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