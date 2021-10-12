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

import { Container, Title, Question, SendButton, WarningBox, MarginTenPx } from './styles';

import 'react-toastify/dist/ReactToastify.css';
import { showDateAndTime, getColorOfDate, showTimePassed } from "../../../../utils/moment";

function AtividadeEspecifica(){
    const {query: { id }} = useRouter();

    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [isAnswered, setIsAnswered] = useState(null);

    const { data } = useFetch(`/testes/${id}`);

    useEffect(() => {
        if(data){
            const questionsJSON = JSON.parse(data?.conteudo);
            setQuestions(questionsJSON);

            const defaultAnswers = questionsJSON.map(question => {
                return {
                    marked: null   
                }
            });
            setAnswers(defaultAnswers);

            setIsAnswered(!!data?.testesAlunos[0])
        }
    }, [data])

    async function sendTest(){
        let score = 0;
        let areAllAnswered = true;

        questions.forEach((question, index) => {
            const selected = answers[index].marked;

            if(selected === null) {
                alert(`Questão ${index+1} em branco`);
                areAllAnswered = false;                
                return;
            }

            if(selected === question.certo) score++;
        });

        if(areAllAnswered){
            const postData = {
                nota: (score / questions.length) * 10,
                idTeste: id,
                idTurma: data?.topicos.turma.id
            }

            try {
                const { data: result } = await api.post('/testes-aluno', postData);
                
                toast.success(result.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                setTimeout(() => {
                    Router.push(`/aluno/topicos/${data?.topicos.id}`);
                }, 1000)
            } catch (error) {
                toast.error(error.response.data.message, {
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

    async function changeAnswer(question, marked){
        setAnswers(prev => {
            const newAnswers = prev.map((prevAnswer, index) => {
                let newAnswer = prevAnswer;
                
                if(index === question){
                    newAnswer = { marked };
                }

                return newAnswer;
            });

            return newAnswers;
        })
    }

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
                        timeColor={getColorOfDate(data?.dataFim)}
                    >
                        <h2>{data?.nome}</h2>
                        <h3>{data?.topicos.nome}</h3>
                        {
                            isAnswered ? (
                                    <h4>Entregue {showTimePassed(data?.testesAlunos[0]?.dataEnvio)}</h4>
                                ) : (
                                    <h4>
                                        Data de entrega:  
                                        <b> {showDateAndTime(data?.dataFim, 'LLL')}</b>
                                    </h4>
                            )
                        }
                    </Title>
                )
            }

            <Container>
                {
                    isAnswered === null ? (
                        <>
                            <QuestionSkeleton />
                            <QuestionSkeleton />
                            <QuestionSkeleton />
                            <QuestionSkeleton />
                            <QuestionSkeleton />
                        </>
                    ) : isAnswered ? (
                        <WarningBox
                            primary={data?.topicos.turma.cores.corPrim}
                            secondary={data?.topicos.turma.cores.corSec}
                        >
                            <nav>
                                <FontAwesomeIcon 
                                    icon={faCheck}
                                    color="#fff"
                                    size="2x"
                                />
                                <h1>Teste já respondido!</h1>
                            </nav>
                            <p>Nota: {data?.testesAlunos[0]?.nota}</p>
                            <Link href={`/aluno/topicos/${data?.topicos.id}`}>
                                <a>
                                    Voltar ao tópico
                                </a>
                            </Link>
                        </WarningBox>
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
                                                    <input 
                                                        type="radio" 
                                                        name={`questao-${indexQuestao}`} 
                                                        id={`questao-${indexQuestao}:alternativa-${indexAlternativa}`} 
                                                        onChange={() => changeAnswer(indexQuestao, indexAlternativa)}
                                                    />
                                                    <label htmlFor={`questao-${indexQuestao}:alternativa-${indexAlternativa}`}>{alternativa.texto}</label>
                                                </div>
                                            ))
                                        }
                                    </Question>
                                ))
                            }

                            <SendButton 
                                primary={data?.topicos.turma.cores.corPrim || "#6D6D6D"}
                                secondary={data?.topicos.turma.cores.corSec || "#454545"}
                                onClick={sendTest}
                            >
                                Enviar teste
                            </SendButton>
                        </>
                    )
                }
            </Container>

            <ToastContainer />
        </div>
    );
}

export default withAuthSSG(AtividadeEspecifica);