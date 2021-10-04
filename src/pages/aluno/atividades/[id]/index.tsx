import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {useDropzone} from 'react-dropzone'; 
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import withAuthSSG from "../../../../hoc/withAuthSSG";
import { useFetch } from "../../../../hooks/useFetch";
import { api } from "../../../../services/api";

import Header from "../../../../components/Header";
import File from "../../../../components/File";
import ShimmerEffect from "../../../../components/ShimmerEffect";

import { Container, Title, FileBox, Dropzone, SpaceTop, SendFilesButton, SuccessText } from "./styles";
import 'react-toastify/dist/ReactToastify.css';

function AtividadeEspecifica(){
    const {query: { id }} = useRouter();

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

    const [file, setFile] = useState(null);
    const [sended, setSended] = useState(false);

    const { data } = useFetch(`/atividades/${id}`);

    useEffect(() => {
        console.log(data);
    }, [data])

    useEffect(() => {
        (async () => {
            if(acceptedFiles[0]){
                const formData = new FormData();
        
                formData.append('file', acceptedFiles[0]);
        
                const {data} = await api.post('/arquivos', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'basic_token': '7631c0f15fc888a088c5f0c28047aaef'
                    }
                })
                setFile(data);
            }
        })()
    }, [acceptedFiles])

    async function sendActivity(){
        const newActivity = {
            link: file.link,
            nome: file.name,
            idAtividade: Number(id),
            idTurma: data?.topico.turma.id    
        }

        console.log(newActivity);
        const {status, data: { message }} = await api.post('/atividades-aluno', newActivity);
        if(status === 201){
            toast.success(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setSended(true);
        }
    }

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
                <Title>
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
                                <h2>{data?.nome}</h2>
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
                            <h4>Data de entrega: {data?.dataFim}</h4>
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
                            ) : data?.arquivosAtividades === undefined && (
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
                            )
                    }
                    <section>
                        <h3>Envios</h3>
                        {
                            file === null ? (
                                <Dropzone {...getRootProps({className: 'dropzone'})}>
                                    <input {...getInputProps()} />
                                    <p>Solte alguns arquivos aqui, ou clique <b>aqui</b> para selecionar</p>
                                </Dropzone>
                                ) : (
                                <File 
                                    key={file?.name}
                                    color={data?.topico.turma.cores.corPrim}
                                    name={file?.name}
                                    route={file?.link}
                                />
                            )
                        }

                        {
                            sended ? (
                                <SuccessText>Lição entregue!</SuccessText>
                            ) : (
                                <SendFilesButton
                                    onClick={sendActivity}
                                    primary={data?.topico.turma.cores.corPrim || "#6D6D6D"}
                                    secondary={data?.topico.turma.cores.corSec || "#3D3D3D"}
                                >
                                    <p>Enviar atividade</p>
                                    <FontAwesomeIcon 
                                        icon={faPaperPlane}
                                        color="#fff"
                                        size="1x"
                                    />
                                </SendFilesButton>
                            )    
                        }
                    </section>
                </FileBox>
                
            </Container>

            <ToastContainer />
        </div>
    );
}

export default withAuthSSG(AtividadeEspecifica);