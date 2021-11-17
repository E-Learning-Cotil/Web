import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import { useDropzone } from "react-dropzone";
import { ToastContainer, toast } from "react-toastify";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

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
  DateDiv,
  ContentTitle,
  Grid,
  FakeGridDiv,
  ContentEditor,
  Image,
  Dropzone,
  FilesList,
  CreateActivityButton,
  Info,
} from "./styles";

import Editor from "../../../../components/Editor";

export function CriarAtividade(props) {
  const {
    query: { id },
  } = useRouter();

  const { data } = useFetch(`/topicos/${id}`);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [activityName, setActivityName] = useState("");
  const [content, setContent] = useState("");
  const [activityFiles, setActivityFiles] = useState([]);
  const [editorLoaded, setEditorLoaded] = useState(false);

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
            "Content-Type": "multipart/form-data",
          },
        });

        console.log(data);

        setActivityFiles([...activityFiles, data]);
      }
    })();
  }, [acceptedFiles]);

  async function createActivity() {
    if (activityName === "") {
      toast.warning("Uma atividade deve ter nome!", {
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

    if (startTime === null) {
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

    if (endTime === null) {
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

    if (JSON.stringify(content) === "") {
      toast.warning("Uma atividade deve ter conteúdo!", {
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

    const filteredFiles = activityFiles.map((material) => material.idArquivo);

    const newActivity = {
      idTopico: id,
      conteudo: JSON.stringify(content),
      nome: activityName,
      arquivos: filteredFiles,
      dataInicio: startTime,
      dataFim: endTime,
    };

    const response = await api.post("/atividades", newActivity);

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
        <title>Criar Atividade | E-Learning</title>
      </Head>

      <Header
        primaryColor={data?.turma.cores.corPrim || "#6D6D6D"}
        secondaryColor={data?.turma.cores.corSec || "#454545"}
      />

      <Container>
        <ContentHeader>
          <Title>
            <h2>Criar Atividade</h2>
          </Title>
        </ContentHeader>

        <Info>
          <ContentTitle
            primaryColor={data?.turma.cores.corPrim || "#6D6D6D"}
            secondaryColor={data?.turma.cores.corSec || "#454545"}
          >
            <label htmlFor="test-name">Nome da atividade:</label>
            <input
              type="text"
              id="test-name"
              onChange={(e) => setActivityName(e.target.value)}
            />
          </ContentTitle>

          <DateDiv>
            <label htmlFor="start-date">Início:</label>
            <input
              type="datetime-local"
              id="start-date"
              onChange={(e) =>
                setStartTime(new Date(e.target.value).toISOString())
              }
            />
          </DateDiv>
          <DateDiv>
            <label htmlFor="end-date">Fim:</label>
            <input
              type="datetime-local"
              id="end-date"
              onChange={(e) =>
                setEndTime(new Date(e.target.value).toISOString())
              }
            />
          </DateDiv>
        </Info>
        <Grid>
          <FakeGridDiv>
            <ContentEditor>
              <Editor
                name="description"
                onChange={(data) => {
                  setContent(data);
                }}
                editorLoaded={editorLoaded}
                value={content}
              />
            </ContentEditor>
          </FakeGridDiv>

          <FilesList>
            <FakeGridDiv>
              <ContentEditor>
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
              </ContentEditor>
              {activityFiles.map((material) => (
                <File
                  key={material.link}
                  name={material.name}
                  color={data?.turma.cores.corSec}
                  route={material.link}
                />
              ))}
            </FakeGridDiv>
            <CreateActivityButton
              primaryColor={data?.turma.cores.corPrim || "#6D6D6D"}
              secondaryColor={data?.turma.cores.corSec || "#454545"}
              onClick={createActivity}
            >
              Criar
            </CreateActivityButton>
          </FilesList>
        </Grid>
      </Container>

      <ToastContainer />
    </div>
  );
}

export default withAuthSSG(CriarAtividade);
