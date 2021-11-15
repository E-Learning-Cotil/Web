import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useDropzone } from "react-dropzone";
import { ToastContainer, toast } from "react-toastify";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCamera } from "@fortawesome/free-solid-svg-icons";

import withAuthSSG from "../../../../hoc/withAuthSSG";
import Header from "../../../../components/Header";
import { useFetch } from "../../../../hooks/useFetch";
import { api } from "../../../../services/api";

import "react-toastify/dist/ReactToastify.css";

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
  DeleteQuestion,
  CreateMaterialButton,
} from "./styles";

export function CriarMaterial(props) {
  const {
    query: { id },
  } = useRouter();

  const { data } = useFetch(`/topicos/${id}`);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const [currentImage, setCurrentImage] = useState(null);
  const [currentRightAnswer, setCurrentRightAnswer] = useState(null);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [currentAnswers, setCurrentAnswers] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [materialName, setMaterialName] = useState("");
  const [content, setContent] = useState("");
  const [materialFiles, setMaterialFiles] = useState([]);

  const currentQuestionRef = useRef(null);

  useEffect(() => {
    (async () => {
      if (acceptedFiles[0]) {
        const formData = new FormData();

        formData.append("file", acceptedFiles[0]);

        const { data } = await api.post("/arquivos", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            basic_token: process.env.NEXT_PUBLIC_BASIC_TOKEN,
          },
        });

        setCurrentImage(data.link);
      }
    })();
  }, [acceptedFiles]);

  function uploadFile() {
    const newMaterialFile = {
        
    }

    setMaterialFiles([...materialFiles, newMaterialFile]);
    setContent(currentQuestionRef.current.innerText);
  }

  async function createTest() {
    // if (endTime === null) {
    //   toast.warning("Selecione uma data de entrega da atividade!", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   });

    //   return;
    // }
    setContent(currentQuestionRef.current.innerText);

    if (materialName === "") {
      toast.warning("Um material deve ter nome!", {
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

    const newMaterial = {
      idTopico: id,
      data: startTime,
      conteudo: JSON.stringify(content),
      nome: materialName,
    };

    const response = await api.post("/materiais", newMaterial);

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
    }, 1000);
  }

  return (
    <div>
      <Head>
        <title>Criar Material | E-Learning</title>
      </Head>

      <Header
        primaryColor={data?.turma.cores.corPrim || "#6D6D6D"}
        secondaryColor={data?.turma.cores.corSec || "#454545"}
      />

      <Container>
        <ContentHeader>
          <Title>
            <h2>Criar Material</h2>
          </Title>
        </ContentHeader>
        <ContentTitle
          primaryColor={data?.turma.cores.corPrim || "#6D6D6D"}
          secondaryColor={data?.turma.cores.corSec || "#454545"}
        >
          <label htmlFor="test-name">Nome do material:</label>
          <input
            type="text"
            id="test-name"
            onChange={(e) => setMaterialName(e.target.value)}
          />
        </ContentTitle>
        <Grid>
          <FakeGridDiv>
            <CreateQuestion>
              <QuestionTitle>
                <h3>Descrição:</h3>
                <QuestionTextarea
                  contentEditable
                  ref={currentQuestionRef}
                ></QuestionTextarea>
              </QuestionTitle>
            </CreateQuestion>
          </FakeGridDiv>

          <QuestionsList>
            <FakeGridDiv>
              <CreateQuestion>
                <Image>
                  <h3>Anexos</h3>
                </Image>

                <Dropzone {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} />
                  <CreateButton
                    onClick={uploadFile}
                    primaryColor={data?.turma.cores.corPrim || "#6D6D6D"}
                    secondaryColor={data?.turma.cores.corSec || "#454545"}
                  >
                    <FontAwesomeIcon icon={faPlus} color="#fff" size="1x" />
                    Postagem
                  </CreateButton>
                </Dropzone>
              </CreateQuestion>
            </FakeGridDiv>
            <CreateMaterialButton
              primaryColor={data?.turma.cores.corPrim || "#6D6D6D"}
              secondaryColor={data?.turma.cores.corSec || "#454545"}
              onClick={createTest}
            >
              Criar
            </CreateMaterialButton>
          </QuestionsList>
        </Grid>
      </Container>

      <ToastContainer />
    </div>
  );
}

export default withAuthSSG(CriarMaterial);
