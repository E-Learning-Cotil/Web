import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from 'next/router'

import Header from "../../../../components/Header";
import Icon from "../../../../components/Icon";
import { useFetch } from "../../../../hooks/useFetch";
import withAuthSSG from "../../../../hoc/withAuthSSG";

import { Container, Title, ItemsBox } from "./styles";

function TopicoEspecifico(){
    const {query: { id }} = useRouter();

    const { data } = useFetch(`/topicos/${id}`);

    useEffect(() => {
        console.log("Topicos");
        console.log(data);
    }, [data])

    return(
        <div>
            <Head>
                <title>{id} | E-Learning</title>
            </Head>
            <Header/>
            <Container>
                <Title>
                    <Icon 
                        color={data?.turma.cores.corPrim}
                        icon={data?.turma.icone.altLink}
                    />
                    <section>
                        <h2>{data?.nome}</h2>
                        <p>{data?.turma.nome}</p>
                    </section>
                </Title>
                <span>
                    {data?.descricao}
                </span>
                <ItemsBox>
                    <div>
                        <h3>Materiais</h3>
                        <section>
                            {data?.Materiais.map(abc => <p>{abc.nome}</p> )}
                        </section>
                    </div>
                    <div>
                        <h3>Atividades</h3>
                        <section>
                            {data?.atividades.map(abc => <p>{abc.nome}</p> )}
                        </section>
                    </div>
                    <div>
                        <h3>Testes</h3>
                        <section>
                            {data?.testes.map(abc => <p>{abc.nome}</p> )}
                        </section>
                    </div>
                </ItemsBox>
            </Container>
        </div>
    );
}

export default withAuthSSG(TopicoEspecifico);