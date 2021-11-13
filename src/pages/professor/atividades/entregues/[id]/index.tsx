import React, { useEffect, useState } from "react"
import Head from "next/head";
import Link from 'next/link';
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';

import withAuthSSG from "../../../../../hoc/withAuthSSG";
import Header from "../../../../../components/Header";

import { useFetch } from "../../../../../hooks/useFetch";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faEye, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import 'react-toastify/dist/ReactToastify.css';
import { Container, Title, Grid, Content, ContentHeader, ContentFooter, Grade, SaveButton, Students, StudentData, Iframe, SelectionDiv } from './styles';
import { api } from "../../../../../services/api";
import ShimmerEffect from "../../../../../components/ShimmerEffect";

export function Entregues(props) {
    const { query: {id} } = useRouter();

    const {data} = useFetch(`/atividades-aluno?idAtividade=${id}`);

    const [selected, setSelected] = useState(null);
    const [grade, setGrade] = useState(0);
    
    async function sendGrade(){
        if(grade < 0 || grade > 10 || grade === null){
            toast.warning("Nota não pode ser maior que 10 ou menor que 0!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        try {
            const response = await api.put(`/atividades-aluno/${data?.atividades[selected].id}`, {
                nota: grade
            });
    
            toast.success("Nota atualizada com sucesso!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch (error) {
            console.log(error.response.data);
        }
    }

    return (
        <div>
            <Head>
                <title>Atividades entregues | E-Learning</title>
            </Head>

            <Header 
                primaryColor={data?.details.topico.turma.cores.corPrim || "#6D6D6D"
                }
                secondaryColor={data?.details.topico.turma.cores.corSec || "#454545"}
            />

            <Container>
                <Title>
                    <h2>{data?.details.nome}</h2>
                    <h4>{data?.details.topico.nome}</h4>
                </Title>

                <Grid>
                    <Content>
                        {
                            selected === null ? (
                                <SelectionDiv>
                                    <img src="/selection.svg" alt="Selecione um aluno" />
                                    <nav>
                                        <h3>Selecione um aluno</h3>
                                        <FontAwesomeIcon 
                                            icon={faArrowRight}
                                            color={'#fff'}
                                            size="1x"
                                        />
                                    </nav>
                                </SelectionDiv>
                            ) : (
                                <>
                                    <ContentHeader primaryColor={data?.details.topico.turma.cores.corPrim || "#6D6D6D"}>
                                        <section>
                                            <img src={data?.atividades[selected].aluno.foto} alt={data?.atividades[selected].aluno.nome} />
                                            <h2>{data?.atividades[selected].aluno.nome}</h2>
                                        </section>
                                        <nav>
                                            <Link href={`/professor/conversas?idAluno=${data?.atividades[selected].aluno.ra}`}>
                                                <a>
                                                    <FontAwesomeIcon 
                                                        icon={faComment}
                                                        color={'#fff'}
                                                        size="1x"
                                                    />
                                                </a>
                                            </Link>
                                            <Link href={data?.atividades[selected].link}>
                                                <a target="_blank">
                                                    <FontAwesomeIcon 
                                                        icon={faEye}
                                                        color={'#fff'}
                                                        size="1x"
                                                    />
                                                </a>
                                            </Link>
                                        </nav>
                                    </ContentHeader>
                                    <Iframe src={data?.atividades[selected].link}></Iframe>
                                    <ContentFooter>
                                        <Grade>
                                            <label htmlFor="grade">Nota: </label>
                                            <div>
                                                <input 
                                                    type="number" 
                                                    max="10" 
                                                    min="0" 
                                                    id="grade" 
                                                    defaultValue={data?.atividades[selected].nota || ""}
                                                    onChange={e => setGrade(Number(e.target.value))}
                                                />
                                                <span>/10</span>
                                            </div>
                                        </Grade>
                                        <SaveButton 
                                            onClick={sendGrade}
                                            primaryColor={data?.details.topico.turma.cores.corPrim || "#6D6D6D"}
                                            secondaryColor={data?.details.topico.turma.cores.corSec || "#454545"}
                                        >
                                            Salvar
                                        </SaveButton>
                                    </ContentFooter>
                                </>
                            )
                        }
                    </Content>
                    
                    <Students>
                    {
                        !data ? (
                            <>
                                <ShimmerEffect 
                                    width="100%"
                                    height="40px"
                                />
                                <ShimmerEffect 
                                    width="100%"
                                    height="40px"
                                />
                                <ShimmerEffect 
                                    width="100%"
                                    height="40px"
                                />
                                <ShimmerEffect 
                                    width="100%"
                                    height="40px"
                                />
                                <ShimmerEffect 
                                    width="100%"
                                    height="40px"
                                    />
                                <ShimmerEffect 
                                    width="100%"
                                    height="40px"
                                />
                            </>
                        ) : 
                            data?.atividades.map((ativ, index) => (
                                <StudentData
                                    key={ativ.id}
                                    onClick={() => setSelected(index)}
                                >
                                    <img src={ativ.aluno.foto} alt={ativ.aluno.nome} />
                                    <p>{ativ.aluno.nome}</p>
                                </StudentData>
                            )
                        )
                    }
                    </Students>
                </Grid>
                
            </Container> 

            <ToastContainer />
        </div>
    )
}

export default withAuthSSG(Entregues);