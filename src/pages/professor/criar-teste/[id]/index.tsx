import React, { useEffect, useState, useRef } from "react"
import Head from "next/head";
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { useDropzone } from 'react-dropzone';
import { ToastContainer, toast } from 'react-toastify';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCamera } from '@fortawesome/free-solid-svg-icons';

import withAuthSSG from "../../../../hoc/withAuthSSG";
import Header from "../../../../components/Header";
import { useFetch } from "../../../../hooks/useFetch";
import { api } from "../../../../services/api";

import 'react-toastify/dist/ReactToastify.css';

import { 
    Container, 
    Title, 
    ContentHeader,
    Dates,
    DateDiv,
    ContentTitle,
    Grid,
    FakeGridDiv,
    CreateQuestion,
    QuestionTitle,
    QuestionTextarea,
    Answers,
    Answer,
    NewAnswer,
    Image,
    Dropzone,
    CreateButton,
    QuestionsList,
    Question,
    QuestionAnswer,
    DeleteQuestion } from './styles';

export function CriarTeste(props) {
    const { query: { id } } = useRouter();

    const { data } = useFetch(`/topicos/${id}`);

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

    const [currentImage, setCurrentImage] = useState(null);
    const [currentRightAnswer, setCurrentRightAnswer] = useState(null);
    const [currentAnswer, setCurrentAnswer] = useState("");
    const [currentAnswers, setCurrentAnswers] = useState([]);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [testName, setTestName] = useState("");
    const [questions, setQuestions] = useState([]);

    const currentQuestionRef = useRef(null);

    function addAnswer(){
        if(currentAnswer === "") return;
        
        setCurrentAnswers([...currentAnswers, {texto: currentAnswer}]);
        setCurrentAnswer("");
    }

    function removeAnswer(index){
        setCurrentAnswers(prevAnswers => {
            const updatedAnswers = prevAnswers.filter((answer, filterIndex) => {
                if((index === filterIndex) && index === currentRightAnswer) setCurrentRightAnswer(null);
                if(index !== filterIndex) return answer;
            })

            return updatedAnswers;
        })
    }

    useEffect(() => {
        (async () => {
            if(acceptedFiles[0]){
                const formData = new FormData();
        
                formData.append('file', acceptedFiles[0]);
        
                const { data } = await api.post('/arquivos', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'basic_token': process.env.NEXT_PUBLIC_BASIC_TOKEN
                    }
                })

                setCurrentImage(data.link);
            }
        })()
    }, [acceptedFiles])

    function addQuestion(){
        if(currentQuestionRef.current.innerText === ""){
            toast.warning("A pergunta não pode ser vazia!", {
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

        if(currentAnswers.length < 2){
            toast.warning("A questão deve ter no mínimo 2 alternativas!", {
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

        if(currentRightAnswer === null){
            toast.warning("Selecione uma resposta para a questão!", {
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


        const newQuestion = {
            pergunta: currentQuestionRef.current.innerText,
            alternativas: currentAnswers,
            certo: currentRightAnswer,
            imagem: currentImage
        };

        setQuestions([...questions, newQuestion]);

        setCurrentImage(null);
        setCurrentRightAnswer(null);
        setCurrentAnswer("");
        setCurrentAnswers([]);
        currentQuestionRef.current.innerText = "";
    }

    function removeQuestion(index){
        setQuestions(prevQuestions => {
            const updatedQuestions = prevQuestions.filter((question, filterIndex) => {
                if(index !== filterIndex) return question;
            })

            return updatedQuestions;
        })
    }

    async function createTest(){
        if(startTime === null){
            toast.warning("Selecione uma data de postagem da atividade!", {
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

        if(endTime === null){
            toast.warning("Selecione uma data de entrega da atividade!", {
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

        if(questions.length <= 0){
            toast.warning("Um teste deve ter no mínimo uma pergunta!", {
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

        if(testName === ""){
            toast.warning("Um teste deve ter nome!", {
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

        const newTest = {
            idTopico: id,
            dataInicio: startTime,
            dataFim: endTime,
            conteudo: JSON.stringify(questions),
            nome: testName
        }

        const response = await api.post('/testes', newTest);

        toast.success(response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        setTimeout(() => {
            Router.push(`/professor/topicos/${id}`);
        }, 1000)
    }

    return (
        <div>
            <Head>
                <title>Criar Teste | E-Learning</title>
            </Head>

            <Header 
                primaryColor={data?.turma.cores.corPrim || "#6D6D6D"}
                secondaryColor={data?.turma.cores.corSec || "#454545"}
            />
            
            <Container>
                <ContentHeader>
                    <Title>
                        <h2>Criar teste</h2>
                    </Title>
                    <Dates>
                        <DateDiv>
                            <label htmlFor="start-date">Início:</label>
                            <input 
                                type="datetime-local" 
                                id="start-date"
                                onChange={e => setStartTime(new Date(e.target.value).toISOString())}   
                            />
                        </DateDiv>
                        <DateDiv>
                            <label htmlFor="end-date">Fim:</label>
                            <input 
                                type="datetime-local" 
                                id="end-date"
                                onChange={e => setEndTime(new Date(e.target.value).toISOString())}   
                            />
                        </DateDiv>
                    </Dates>
                </ContentHeader>
                <ContentTitle
                    primaryColor={data?.turma.cores.corPrim || "#6D6D6D"}
                    secondaryColor={data?.turma.cores.corSec || "#454545"}
                >
                    <label htmlFor="test-name">Nome do teste:</label>
                    <input 
                        type="text" 
                        id="test-name" 
                        onChange={e => setTestName(e.target.value)}
                    />
                    <button
                        onClick={createTest}
                    >
                        Criar teste
                    </button>
                </ContentTitle>
                <Grid>
                    <FakeGridDiv>

                        <CreateQuestion>
                            <QuestionTitle>
                                <h3>Pergunta:</h3>
                                <QuestionTextarea contentEditable ref={currentQuestionRef}></QuestionTextarea>
                            </QuestionTitle>
                            <Answers>
                                <h3>Alternativas:</h3>
                                {
                                    currentAnswers.map((answer, index) => (
                                        <Answer 
                                            key={index}
                                            onClick={() => setCurrentRightAnswer(index)}
                                            selected={currentRightAnswer === index}
                                        >
                                            <p>{answer.texto}</p>
                                            <FontAwesomeIcon 
                                                icon={faTimes}
                                                color={'#fff'}
                                                size="1x"
                                                onClick={() => removeAnswer(index)}
                                            />
                                        </Answer>
                                    ))
                                }
                                {
                                    currentAnswers.length < 5 && (
                                        <NewAnswer
                                            primaryColor={data?.turma.cores.corPrim || "#6D6D6D"}
                                            secondaryColor={data?.turma.cores.corSec || "#454545"}
                                        >
                                            <input 
                                                type="text" 
                                                value={currentAnswer}
                                                onChange={(e) => setCurrentAnswer(e.target.value)}
                                                onKeyPress={e => e.key === "Enter" && addAnswer()}
                                            />
                                            <button
                                                onClick={addAnswer}
                                            >
                                                Adicionar
                                            </button>
                                        </NewAnswer>
                                    )
                                }
                                
                            </Answers>
                            <Image>
                                <h3>Imagem(opcional):</h3>
                                {
                                    currentImage === null ? (
                                        <Dropzone {...getRootProps({className: "dropzone"})}>
                                            <input {...getInputProps()} />
                                            <FontAwesomeIcon 
                                                icon={faCamera}
                                                color={'#fff'}
                                                size="2x"
                                            />
                                            <p>Solte uma imagem aqui, ou clique <b>aqui</b> para selecionar</p>
                                        </Dropzone>
                                    ) : (
                                        <img src={currentImage} alt="Imagem da questão" />
                                    )
                                }
                                
                            </Image>
                            <CreateButton 
                                onClick={addQuestion}
                                primaryColor={data?.turma.cores.corPrim || "#6D6D6D"}
                                secondaryColor={data?.turma.cores.corSec || "#454545"}
                            >
                                Criar pergunta
                            </CreateButton>
                        </CreateQuestion>
                    </FakeGridDiv>

                    <QuestionsList>
                        {
                            questions.map((question, questionIndex) => (
                                <Question key={questionIndex}>
                                    <h4>{questionIndex+1} - {question.pergunta}</h4>
                                    {
                                        question.imagem && (
                                            <img src={question.imagem} alt={question.pergunta} />
                                        )
                                    }
                                    {
                                        question.alternativas.map((alternativa, alternativaIndex) => (
                                            <QuestionAnswer>
                                                <input 
                                                    type="radio" 
                                                    name={`${questionIndex}`} 
                                                    readOnly
                                                    checked={alternativaIndex === question.certo}
                                                />
                                                <span>{alternativa.texto}</span>
                                            </QuestionAnswer>
                                        ))
                                    }
                                    <DeleteQuestion
                                        onClick={() => removeQuestion(questionIndex)}
                                        primaryColor={data?.turma.cores.corPrim || "#6D6D6D"}
                                        secondaryColor={data?.turma.cores.corSec || "#454545"}
                                    >
                                        <FontAwesomeIcon 
                                            icon={faTimes}
                                            color={'#fff'}
                                            size="1x"
                                        />
                                    </DeleteQuestion>
                                </Question>
                            ))
                        }
                    </QuestionsList>
                </Grid>
            </Container> 
            
            <ToastContainer />
        </div>
    )
}

export default withAuthSSG(CriarTeste);

/*

{
    "pergunta":"O que é que é, cai em pé e corre deitado?",
    "imagem":"https://www.geniol.com.br/media/charadas/charadas/auto/138-o-que-cai-em-pe-e-corre-deitado-square.png",
    "certo": 1, 
    "alternativas": [
        {"texto":"Avião"},
        {"texto":"Avião"},
        {"texto":"Avião"},
        {"texto":"Avião"},
        {"texto":"Avião"}
    ]
}

[{"pergunta":"O que é que é, cai em pé e corre deitado?","imagem":"https://www.geniol.com.br/media/charadas/charadas/auto/138-o-que-cai-em-pe-e-corre-deitado-square.png","certo": 1, "alternativas":[{"texto":"Avião"},{"texto":"Avião"},{"texto":"Avião"},{"texto":"Avião"},{"texto":"Avião"}]},
{"pergunta":"Pergunta número 2","imagem": null, "certo": 4, "alternativas":[{"texto":"Alternativa 1"},{"texto":"Alternativa 2"},{"texto":"Alternativa 3"},{"texto":"Alternativa 4"},{"texto":"Alternativa 5"}]}]
*/