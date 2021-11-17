import Header from "../../../components/Header"
import withAuthSSG from "../../../hoc/withAuthSSG";

import ActivitySkeleton from "../../../components/ActivitySkeleton";
import { Container, Title, Group } from "./styles";
import Activity from "../../../components/Activity";
import { useFetch } from "../../../hooks/useFetch";
import Head from "next/head";

function Atividades(){
    const { data } = useFetch('/atividades/list-by-role');
    return(
        <div>
            <Head>
                <title>Atividades | E-Learning</title>
            </Head>
            <Header
                 primaryColor="#9F18DF"
                 secondaryColor="#6C1795"
            />
            <Container>
                <Title>
                    <h2>Atividades</h2>
                </Title>

                <Group>
                    {!data ? (
                        <>
                            <ActivitySkeleton />
                            <ActivitySkeleton />
                            <ActivitySkeleton />
                            <ActivitySkeleton />
                            <ActivitySkeleton />
                            <ActivitySkeleton />
                            <ActivitySkeleton />
                            <ActivitySkeleton />
                            <ActivitySkeleton />
                            <ActivitySkeleton />
                            <ActivitySkeleton />
                            <ActivitySkeleton />
                        </>
                    ) : (
                        data.map((ativ, index) => ( 
                            <Activity 
                                key={index}
                                id={ativ.id}
                                photo={ativ.tipo === "ATIVIDADE" ? ativ.topico.turma.icone.altLink : ativ.topicos.turma.icone.altLink}
                                name={ativ.nome}
                                date={ativ.dataFim}
                                color={ativ.tipo === "ATIVIDADE" ? ativ.topico.turma.cores.corPrim :ativ.topicos.turma.cores.corPrim}
                            />
                        ))
                    ) }
                </Group>
            </Container>
        </div>
    );
}

export default withAuthSSG(Atividades);