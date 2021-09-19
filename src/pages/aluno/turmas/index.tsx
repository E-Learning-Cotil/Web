import Header from "../../../components/Header"
import withAuthSSG from "../../../hoc/withAuthSSG";
import ClassSkeleton from "../../../components/ClassSkeleton";
import ActivitySkeleton from "../../../components/ActivitySkeleton";
import { Container, Title, Group } from "./styles";
import Class from "../../../components/Class";
import Activity from "../../../components/Activity";
import { useFetch } from "../../../hooks/useFetch";

function Turmas(){
    const { data } = useFetch('/turmas');
    console.log(data);
    return(
        <div>
            <Header/>
            <Container>
                <Title>
                    <h2>Turmas</h2>
                    <div></div> {/* Title tip */}
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
                        data.turmas.map((turma, index) =>{
                            console.log(turma);
                            return ( 
                                <Class
                                    key={index}
                                    id={turma.id}
                                    name={turma.nome}
                                    color={turma.cores.corPrim}
                                    photo={turma.icone.link}
                                    teacher={turma.professor.nome}
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