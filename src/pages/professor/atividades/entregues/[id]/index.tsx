import React, { useEffect, useState } from "react"
import Head from "next/head";
import Link from 'next/link';
import { useRouter } from "next/router";

import withAuthSSG from "../../../../../hoc/withAuthSSG";
import Header from "../../../../../components/Header";

import { useFetch } from "../../../../../hooks/useFetch";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

import { Container, Title, Grid, Content, ContentHeader, ContentFooter, Grade, SaveButton, Students, StudentData, Iframe } from './styles';

export function Entregues(props) {
    const { query: {id} } = useRouter();
    const {data} = useFetch(`/atividades-aluno?idAtividade=${id}`);

    const [selected, setSelected] = useState(null);

    useEffect(() => {console.log(data)}, [data])

    return (
        <div>
            <Head>
                <title>Atividades entregues | E-Learning</title>
            </Head>

            <Header 
                primaryColor="#9F18DF"
                secondaryColor="#6C1795"
            />

            <Container>
                <Title>
                    <h2>Nome da atividade</h2>
                    <h4>Nome do tópico</h4>
                </Title>

                <Grid>
                    <Content>
                        <ContentHeader>
                            <section>
                                <img src="https://i.imgur.com/bHx9lr1.jpg" alt="João Cléber" />
                                <h2>João Cléber</h2>
                            </section>
                            <Link href="/professor/conversas?idAluno=1">
                                <a>
                                    <FontAwesomeIcon 
                                        icon={faComment}
                                        color={'#fff'}
                                        size="1x"
                                    />
                                </a>
                            </Link>
                        </ContentHeader>
                        <Iframe src="https://www.comvest.unicamp.br/wp-content/uploads/2021/07/Edital_VU_2022.pdf" width="100px"></Iframe>
                        <ContentFooter>
                            <Grade>
                                <label htmlFor="">Nota: </label>
                                <div>
                                    <input type="text" />
                                    <span>/10</span>
                                </div>
                            </Grade>
                            <SaveButton>
                                Salvar
                            </SaveButton>
                        </ContentFooter>
                    </Content>
                    <Students>
                        <StudentData>
                            <img src="https://i.imgur.com/bHx9lr1.jpg" alt="João Cléber" />
                            <p>João Cléber</p>
                        </StudentData>
                    </Students>
                </Grid>
                
            </Container> 
        </div>
    )
}

export default withAuthSSG(Entregues);