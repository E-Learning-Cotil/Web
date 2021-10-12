import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {useDropzone} from 'react-dropzone'; 
import { ToastContainer, toast } from 'react-toastify';
import Loading from 'react-loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import withAuthSSG from "../../../../hoc/withAuthSSG";
import { useFetch } from "../../../../hooks/useFetch";
import { api } from "../../../../services/api";

import Header from "../../../../components/Header";
import File from "../../../../components/File";
import ShimmerEffect from "../../../../components/ShimmerEffect";

import { Container, Title, FileBox, Dropzone, SpaceTop, SendFilesButton, SendedStatus } from "./styles";
import 'react-toastify/dist/ReactToastify.css';

function AtividadeEspecifica(){
    const {query: { id }} = useRouter();

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

    const [file, setFile] = useState(null);
    const [sended, setSended] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const { data } = useFetch(`/atividades/${id}`);

    useEffect(() => {
        console.log(data);

        if(data?.atividadesAlunos) {
            const { atividadesAlunos: [sendedFile] } = data;


            if(sendedFile) {
                setFile({
                    name: sendedFile.nome,
                    link: sendedFile.link,
                    data: sendedFile.dataEnvio,
                    nota: sendedFile.nota
                })
                setSended(true);
            }
        }
    }, [data])

    useEffect(() => {
        (async () => {
            if(acceptedFiles[0]){
                const formData = new FormData();
        
                formData.append('file', acceptedFiles[0]);
        
                const {data: uploadedFile} = await api.post('/arquivos', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'basic_token': '7631c0f15fc888a088c5f0c28047aaef'
                    }
                })

                setFile({
                    link: uploadedFile.link,
                    name: uploadedFile.name,
                    data: new Date().toISOString(),
                    nota: null
                });
            }
        })()
    }, [acceptedFiles])

    async function sendActivity(){
        setIsSending(true);

        const newActivity = {
            link: file.link,
            nome: file.name,
            idAtividade: Number(id),
            idTurma: data?.topico.turma.id    
        }

        try {
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
        } catch (error) {
            console.log(error.response)
        }
        

        setIsSending(false);
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
                        ) : sended ? (
                            <h4>Entregue em: {file?.data}</h4>
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
                        <SendedStatus>
                            <h3>Envios</h3>
                            {
                                sended && (
                                    <p>Nota: {file?.nota || "Sem nota"}</p>
                                )
                            }
                        </SendedStatus>

                        {   
                            !data ? (
                                <>
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
                                </>
                            ) : file === null ? (
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
                            data && !sended && (
                                <SendFilesButton
                                    onClick={sendActivity}
                                    primary={data?.topico.turma.cores.corPrim || "#6D6D6D"}
                                    secondary={data?.topico.turma.cores.corSec || "#3D3D3D"}
                                >
                                    {
                                        isSending ? (
                                            <Loading type={'spinningBubbles'} color={'#fff'}  height={'20px'} width={'20px'} />
                                        ) : (
                                            <>
                                                <p>Enviar atividade</p>
                                                <FontAwesomeIcon 
                                                    icon={faPaperPlane}
                                                    color="#fff"
                                                    size="1x"
                                                />
                                            </>
                                        )
                                    }
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