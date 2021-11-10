import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons';

import withAuthSSG from "../../../../hoc/withAuthSSG";
import { useFetch } from "../../../../hooks/useFetch";

import Header from "../../../../components/Header";
import File from "../../../../components/File";
import ShimmerEffect from "../../../../components/ShimmerEffect";

import { Container, Title, FileBox, SpaceTop, Inbox } from "./styles";
import 'react-toastify/dist/ReactToastify.css';
import { showDateAndTime } from "../../../../utils/moment";

function AtividadeEspecifica(){
    const {query: { id }} = useRouter();

    const { data } = useFetch(`/atividades/${id}`);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return(
        <div>
            <Head>
                <title>{data?.nome} | E-Learning</title>
            </Head>

            <Header
                primaryColor={data?.topico.turma.cores.corPrim || "#6D6D6D"}
                secondaryColor={data?.topico.turma.cores.corSec || "#454545"}
            />
            
            <Container>
                <Title
                    timeColor="#fff"
                >
                    <div>
                        {!data ? (
                            <>
                                <ShimmerEffect
                                    width="200px"
                                    height="30px"
                                />
                                <SpaceTop />
                                <ShimmerEffect
                                    width="120px"
                                    height="20px"
                                />
                            </>
                        ) : (
                            <>
                                <nav>
                                    <h2>{data?.nome}</h2>
                                    <Link 
                                        href={`entregues/${id}`}
                                    >
                                        <Inbox
                                            background={data?.topico.turma.cores.corSec}
                                        >
                                            <h6>{data?._count.atividadesAlunos}</h6>
                                            <FontAwesomeIcon 
                                                icon={faInbox}
                                                color={'#fff'}
                                                size="1x"
                                            />
                                        </Inbox>
                                    </Link>
                                </nav>
                                <h4>{data?.topico.nome}</h4>
                            </>
                        )}
                    </div>
                    <div>
                        {!data ? (
                            <ShimmerEffect
                                width="120px"
                                height="20px"
                            />
                        ) : (
                            <h4>Data de entrega: <b>{showDateAndTime(data?.dataFim, "DD/MM")}</b></h4>    
                        )}
                    </div>
                </Title>

                {!data ? (
                    <span>
                        <ShimmerEffect 
                            width="100%"
                            height="20px"
                        />
                        <ShimmerEffect 
                            width="100%"
                            height="20px"
                        />
                        <ShimmerEffect 
                            width="100%"
                            height="20px"
                        />
                        <ShimmerEffect 
                            width="60%"
                            height="20px"
                        />
                    </span>
                ) : (
                    <span>
                        {data?.conteudo}
                    </span>
                )}

                <FileBox>
                    {
                        data?.arquivosAtividades.length > 0 ? (
                                <section>
                                    <h3>Anexos</h3>
                                    {data?.arquivosAtividades.map(file => (
                                        <File 
                                            key={file.id}
                                            color={data?.topico.turma.cores.corPrim}
                                            name={file.arquivoProfessor.nome}
                                            route={file.arquivoProfessor.link}
                                        />
                                    ))}
                                </section>
                            ) : data?.arquivosAtividades === undefined ? (
                                <section>  
                                    <h3>Anexos</h3>
                                    <ShimmerEffect 
                                        width="100%"
                                        height="40px"
                                    />
                                    <SpaceTop />
                                    <ShimmerEffect 
                                        width="100%"
                                        height="40px"
                                    />
                                    <SpaceTop />
                                    <ShimmerEffect 
                                        width="100%"
                                        height="40px"
                                    />
                                </section>
                            ) : (
                                <section></section>
                            )
                    }
                </FileBox>
                
            </Container>
        </div>
    );
}

export default withAuthSSG(AtividadeEspecifica);