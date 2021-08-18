import React, { useEffect, useState } from "react"
import Link from 'next/link';

import withAuthSSG from "../../../hoc/withAuthSSG";

import Header from "../../../components/Header";
import { useFetch } from "../../../hooks/useFetch";

export function Dashboard(props) {
    const { data } = useFetch('/pagina-inicial');
    
    if(!data){
        return <p>Carregando...</p> //Shimmer effect
    }

    return (
        <div>
            {data?.atividades.map((ativ, index) => (
                <div key={index}>{ativ.nome}</div>
            ))}

            <br />

            {data?.turmas.map((turma, index) => (
                <div key={index}>{turma.nome}</div>
            ))}

            <Link href="/">
                <a>VOLTAR</a>
            </Link>

            <Header />
        </div>
    )
}

export default withAuthSSG(Dashboard);