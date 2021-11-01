import Head from "next/head";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import Header from "../../../../components/Header";
import Icon from "../../../../components/Icon";
import Topic from "../../../../components/Topic";
import { useFetch } from "../../../../hooks/useFetch";
import withAuthSSG from "../../../../hoc/withAuthSSG";
import TopicSkeleton from "../../../../components/TopicSkeleton";

import { Title, Container,ClassName, CreateTopic, CreateTopicButton } from "./styles";
import ShimmerEffect from "../../../../components/ShimmerEffect";
import { api } from "../../../../services/api";

function TurmaEspecifica(){
    const {query: { id }} = useRouter();
    const [topicTitle, setTopicTitle] = useState(null);
    const [topicDescription, setTopicDescription] = useState(null);

    const { data } = useFetch(`/turmas/${id}`);

    useEffect(() => {
        console.log(data);
    }, [data])

    async function createNewTopic(){
        const newTopic = {
            nome : topicTitle,
            descricao: topicDescription,
            idTurma: data.id
        }

        if((topicDescription === null) || (topicTitle === null)) return;
        
        try{
            const { data: responseMessage} = await api.post("/topicos", newTopic);
            console.log(responseMessage);
        }
        catch (error){
            console.log(error);
        }
    }

    return(
        <div>
            <Head>
                <title>{data?.nome} | E-Learning</title>
            </Head>

            <Header
                primaryColor={data?.cores.corPrim || "#6D6D6D"}
                secondaryColor={data?.cores.corSec|| "#454545"}
            />

            <Container>
                <Title>
                    <Icon
                        color={data?.cores.corPrim}
                        icon={data?.icone.altLink}
                    />
                    { !data ? (
                        <ShimmerEffect
                        width= "200px"
                        height= "40px"
                        />
                    ) : (
                        <ClassName>{data?.nome}</ClassName>
                    )
                    }
                </Title>

                <CreateTopic>
                    <div>
                        <p>Título: </p> 
                        <input type="text" onChange={(e) => setTopicTitle(e.target.value)}/>
                    </div>

                    <div>
                        <p>Descrição: </p> 
                        <div contentEditable >

                        </div>
                    </div>
                    <div>
                        <CreateTopicButton 
                            background={data?.cores.corPrim || "#6D6D6D"}
                            onClick={createNewTopic}
                        >
                            Criar
                        </CreateTopicButton>
                    </div>
                </CreateTopic>

                { !data ? (
                    <>
                        <TopicSkeleton/>
                        <TopicSkeleton/>
                        <TopicSkeleton/>
                        <TopicSkeleton/>
                        <TopicSkeleton/>
                        <TopicSkeleton/>
                        <TopicSkeleton/>
                    </>
                ) : (
                    data?.topicos.map((topico)=>{
                        return (
                            <Topic
                                key={topico.id}
                                name= {topico.nome}
                                id= {topico.id}
                                subtitle={topico.descricao}
                            />
                        )
                    })
                )
                }
            </Container>
        </div>
    );
}

export default withAuthSSG(TurmaEspecifica);