import Head from "next/head";
import { useRouter } from 'next/router'
import { useEffect } from "react";
import Header from "../../../../components/Header";
import Icon from "../../../../components/Icon";
import Topic from "../../../../components/Topic";
import { useFetch } from "../../../../hooks/useFetch";
import withAuthSSG from "../../../../hoc/withAuthSSG";
import TopicSkeleton from "../../../../components/TopicSkeleton";

import { Title, Container,ClassName } from "./styles";
import ShimmerEffect from "../../../../components/ShimmerEffect";

function TurmaEspecifica(){
    const {query: { id }} = useRouter();

    const { data } = useFetch(`/turmas/${id}`);

    useEffect(() => {
        console.log(data);
    }, [data])

    return(
        <div>
            <Head>
                <title>{data?.nome} | E-Learning</title>
            </Head>
            <Header/>
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