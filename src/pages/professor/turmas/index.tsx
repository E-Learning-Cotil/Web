import Header from "../../../components/Header"
import withAuthSSG from "../../../hoc/withAuthSSG";
import ClassSkeleton from "../../../components/ClassSkeleton";
import ActivitySkeleton from "../../../components/ActivitySkeleton";
import { Container, Title, Group } from "./styles";
import Class from "../../../components/Class";
import Activity from "../../../components/Activity";
import { useFetch } from "../../../hooks/useFetch";
import Head from "next/head";

function Turmas(){
    const { data } = useFetch('/turmas/list-by-role');
    console.log(data);

    return(
        <div>
            <Head>
                <title>Turmas | E-Learning</title>
            </Head>
            
            <Header
                 primaryColor="#9F18DF"
                 secondaryColor="#6C1795"
            />
            <Container>
                <Title>
                    <h2>Turmas</h2>
                </Title>

                <Group>
                    {!data ? (
                        <>
                            <ClassSkeleton />
                            <ClassSkeleton />
                            <ClassSkeleton />
                            <ClassSkeleton />
                            <ClassSkeleton />
                            <ClassSkeleton />
                        </>
                    ) : (
                        data.map((turma, index) =>{
                            console.log(turma);
                            return ( 
                                <Class
                                    key={index}
                                    id={turma.id}
                                    name={turma.nome}
                                    color={turma.cores.corPrim}
                                    photo={turma.icone.altLink}
                                    subtitle={turma.serie.ano + " " + turma.serie.sigla}
                                />
                            )
                        })
                    ) }
                </Group>
            </Container>
        </div>
    );
}
export default withAuthSSG(Turmas);