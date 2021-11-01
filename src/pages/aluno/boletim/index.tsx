import { useEffect, useState } from "react";
import { useFetch } from "../../../hooks/useFetch";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "react-loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-solid-svg-icons'

import withAuthSSG from "../../../hoc/withAuthSSG";
import Header from "../../../components/Header"
import TableSkeleton from "../../../components/TableSkeleton";
import { api } from "../../../services/api";
import Head from "next/head";

import { Container, TitleHeader, Table, CaptionGroup, CaptionColor } from './styles';

function Boletim(){
    const [pdf, setPdf] = useState<string | null>(null);
    const [isGenerating, setIsGenerating] = useState<Boolean>(false);

    const {data: boletim, error} = useFetch("/boletim");

    useEffect(() => {
        if(error?.response?.data?.error){
            toast.error(error.response.data.error, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }, [error]);

    async function generateBoletim(){
        setIsGenerating(true);

        const { data } = await api.get('/boletim/create-pdf');
        setPdf(data);

        setIsGenerating(false);
    }

    return (
        <div>
            <Head>
                <title>Boletim | E-Learning</title>
            </Head>

            <Header 
                primaryColor="#4AED64"
                secondaryColor="#009418"
            />

            <Container>
                <TitleHeader>
                    <h1>Boletim</h1>
                    {pdf ? (
                        <a href={pdf} target="_blank">
                            <FontAwesomeIcon
                                icon={faEye}
                                color="#fff"
                                size="1x"
                            />
                            <p>Ver boletim</p>
                        </a>
                    ) : isGenerating ? (
                        <button><Loading type={'spinningBubbles'} color={'#fff'}  height={'20px'} width={'20px'} /></button>
                    ) : (
                        <button onClick={generateBoletim}>Gerar boletim</button>
                    )}
                </TitleHeader>

                {!boletim ? (
                    <TableSkeleton />
                ) : (
                    <Table>
                        <thead>
                            <tr>
                                <th>Nome da matéria</th>
                                <th>Média dos testes</th>
                                <th>Média das atividades</th>
                                <th>Média final</th>
                            </tr>
                        </thead>
                        <tbody>
                            {boletim.map(({nome, mediaAtividades, mediaTestes, mediaTurma}, index) => (
                                <tr key={index}>
                                    <td>{nome}</td>
                                    <td>{mediaAtividades}</td>
                                    <td>{mediaTestes}</td>
                                    <td>{mediaTurma}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )}


                <CaptionGroup>
                    <div>
                        <CaptionColor 
                            color="red"
                        />
                        <p>Aprovado</p>
                    </div>

                    <div>
                        <CaptionColor 
                            color="yellow"
                        />
                        <p>Recuperação</p>
                    </div>

                    <div>
                        <CaptionColor 
                            color="green"
                        />
                        <p>Reprovado</p>
                    </div>
                </CaptionGroup>
            </Container>

            <ToastContainer />
        </div>
    )
}

export default withAuthSSG(Boletim);