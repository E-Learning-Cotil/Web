import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from 'next/router'
import HTMLReactParser from "html-react-parser";

import Header from "../../../../components/Header";
import ShimmerEffect from "../../../../components/ShimmerEffect";
import File from "../../../../components/File";
import { useFetch } from "../../../../hooks/useFetch";
import withAuthSSG from "../../../../hoc/withAuthSSG";

import { Container, Title, ItemsBox } from "./styles";

function MaterialEspecifico() {
    const { query: { id } } = useRouter();

    const { data } = useFetch(`/materiais/${id}`);

    useEffect(() => {
        console.log("Materiais");
        console.log(data);
    }, [data])

    return (
        <div>
            <Head>
                <title>{data?.nome} | E-Learning</title>
            </Head>

            <Header
                primaryColor={data?.topico.turma.cores.corPrim || "#6D6D6D"}
                secondaryColor={data?.topico.turma.cores.corSec|| "#454545"}
            />

            <Container>
                <Title>
                    {!data ? (
                        <section>
                            <ShimmerEffect
                                width="200px"
                                height="30px"
                            />
                            <ShimmerEffect
                                width="120px"
                                height="20px"
                            />
                        </section>
                    ) : (
                        <section>
                            <h2>{data?.nome}</h2>
                            <h4>{data?.topico.turma.nome}</h4>
                        </section>
                    )}
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
                        {HTMLReactParser(data?.conteudo.substring(1).slice(0,-1))}
                    </span>
                )}

                <ItemsBox>
                    <div>
                        {!data ? (
                            <section>
                                <nav>
                                    <ShimmerEffect
                                        width="100%"
                                        height="40px"
                                    />
                                </nav>
                                <nav>
                                    <ShimmerEffect
                                        width="100%"
                                        height="40px"
                                    />
                                </nav>
                                <nav>
                                    <ShimmerEffect
                                        width="100%"
                                        height="40px"
                                    />
                                </nav>
                            </section>
                        ) : (
                            data?.arquivosMateriais.length > 0 && (
                                <section>
                                    <h3>Anexos</h3>
                                    {data?.arquivosMateriais.map(material => (
                                        <File
                                            name={material.arquivoProfessor.nome}
                                            color={data?.topico.turma.cores.corSec}
                                            route={material.arquivoProfessor.link}
                                        />
                                    ))}
                                </section>
                            )
                        )}
                    </div>
                </ItemsBox>
            </Container>

        </div>
    );
}

export default withAuthSSG(MaterialEspecifico);