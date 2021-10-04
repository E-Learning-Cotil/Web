import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import withAuthSSG from "../../../../hoc/withAuthSSG";
import { useFetch } from "../../../../hooks/useFetch";
import { api } from "../../../../services/api";

import Header from "../../../../components/Header";
import ShimmerEffect from "../../../../components/ShimmerEffect";

import { Container, Title } from './styles';

function AtividadeEspecifica(){
    const {query: { id }} = useRouter();

    const { data } = useFetch(`/testes/${id}`);

    useEffect(() => {
        console.log(data);
    }, [data])

    return(
        <div>
            <Head>
                <title>{data?.nome} | E-Learning</title>
            </Head>

            {/* <Header
                primaryColor={data?.topico.turma.cores.corPrim || "#6D6D6D"}
                secondaryColor={data?.topico.turma.cores.corSec || "#454545"}
            /> */}
            
            <Container>
                <Title>
                    <h2>Teste da Fuvest</h2>
                    <h4>Trigonometria - Data de entrega: {data?.dataFim}</h4>
                </Title>
            </Container>
        </div>
    );
}

export default withAuthSSG(AtividadeEspecifica);