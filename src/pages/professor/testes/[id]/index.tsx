import Head from "next/head";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import withAuthSSG from "../../../../hoc/withAuthSSG";
import ShimmerEffect from "../../../../components/ShimmerEffect";
import { useFetch } from "../../../../hooks/useFetch";
import { api } from "../../../../services/api";

import Header from "../../../../components/Header";
import QuestionSkeleton from '../../../../components/QuestionSkeleton'

import { Container, Title, Question, SendButton, WarningBox, MarginTenPx, Label } from './styles';

import 'react-toastify/dist/ReactToastify.css';
import { showDateAndTime, getColorOfDate, showTimePassed } from "../../../../utils/moment";

function AtividadeEspecifica(){
    const {query: { id }} = useRouter();

    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [isAnswered, setIsAnswered] = useState(null);

    const { data } = useFetch(`/testes/${id}`);

    useEffect(() => {
        console.log(data);
        if(data){
            const questionsJSON = JSON.parse(data?.conteudo);
            setQuestions(questionsJSON);
            console.log(questionsJSON);
        }
    }, [data])

    return(
        <div>
            <Head>
                <title>{data?.nome} | E-Learning</title>
            </Head>

            <Header
                primaryColor={data?.topicos.turma.cores.corPrim || "#6D6D6D"}
                secondaryColor={data?.topicos.turma.cores.corSec || "#454545"}
            />
            
            {
                !data ? (
                    <Title>
                        <ShimmerEffect
                            width="35vh"
                            height="32px"
                        />
                        <MarginTenPx />
                        <ShimmerEffect
                            width="45vh"
                            height="24px"
                        />
                        <MarginTenPx />
                        <ShimmerEffect
                            width="55vh"
                            height="24px"
                        />
                    </Title>
                ) : (
                    <Title
                        timeColor={"#fff"}
                    >
                        <h2>{data?.nome}</h2>
                        <h3>{data?.topicos.nome}</h3>
                        <h4>
                            Data de entrega:  
                            <b> {showDateAndTime(data?.dataFim, 'LLL')}</b>
                        </h4>
                    </Title>
                )
            }

            <Container>
                {
                    !data ? (
                        <>
                            <QuestionSkeleton />
                            <QuestionSkeleton />
                            <QuestionSkeleton />
                            <QuestionSkeleton />
                            <QuestionSkeleton />
                        </>
                    ) : (
                        <>
                            {
                                questions.map((question, indexQuestao) => (
                                    <Question>
                                        <h3>{indexQuestao+1}{")"}  {question.pergunta}</h3>
                                        
                                        {
                                            question.imagem && (
                                                <img src={question.imagem} alt={question.pergunta} />
                                            )
                                        }
            
                                        {
                                            question.alternativas.map((alternativa, indexAlternativa) => (
                                                <div>
                                                    <Label
                                                        isSelected={!!(indexAlternativa === question.certo)}
                                                        htmlFor={`questao-${indexQuestao}:alternativa-${indexAlternativa}`}>{alternativa.texto}</Label>
                                                </div>
                                            ))
                                        }
                                    </Question>
                                ))
                            }
                        </>
                    )
                }
            </Container>

            <ToastContainer />
        </div>
    );
}

export default withAuthSSG(AtividadeEspecifica);