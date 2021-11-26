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
import File from "../../../../components/File";
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

import Editor from '../../../../components/Editor';

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
  const [editorLoaded, setEditorLoaded] = useState(false);

  const currentQuestionRef = useRef(null);

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  useEffect(() => {
    (async () => {
      if (acceptedFiles[0]) {
        const formData = new FormData();

        formData.append("file", acceptedFiles[0]);

        const { data } = await api.post("/arquivos-professor", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          },
        });

        console.log(data);

        setMaterialFiles([...materialFiles, data]);
      }
    })();
  }, [acceptedFiles]);

  async function createMaterial() {
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

    if (JSON.stringify(content) === "") {
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

    const filteredFiles = materialFiles.map(material => material.idArquivo);

    const newMaterial = {
      idTopico: id,
      conteudo: JSON.stringify(content),
      nome: materialName,
      arquivos: filteredFiles
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
            <Editor
              name="description"
              onChange={(data) => {
                setContent(data);
              }}
              editorLoaded={editorLoaded}
              value={content}
            />
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
                  <FontAwesomeIcon icon={faCamera} color={"#fff"} size="2x" />
                  <p>
                    Solte um arquivo aqui, ou clique <b>aqui</b> para selecionar
                  </p>
                </Dropzone>
              </CreateQuestion>
              {materialFiles.map((material) => (
                <File
                  key={material.link}
                  name={material.name}
                  color={data?.turma.cores.corSec}
                  route={material.link}
                />
              ))}
            </FakeGridDiv>
            <CreateMaterialButton
              primaryColor={data?.turma.cores.corPrim || "#6D6D6D"}
              secondaryColor={data?.turma.cores.corSec || "#454545"}
              onClick={createMaterial}
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
