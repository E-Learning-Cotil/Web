import React, { useEffect, useState } from "react"
import Link from 'next/link';

import withAuthSSG from "../../../hoc/withAuthSSG";

import Header from "../../../components/Header";
import ShimmerEffect from "../../../components/ShimmerEffect";
import { useFetch } from "../../../hooks/useFetch";

export function Dashboard(props) {
    const { data } = useFetch('/pagina-inicial');

    return (
        <div>
            {!data ? (
                <div>
                    <ShimmerEffect 
                        width="200px"
                        height="20px"
                    /> 
                    <br />
                </div>
            ) : (
                <div>
                    {data.atividades.map((ativ, index) => ( <p key={index}>{ativ.nome}</p> ))}

                    {data.turmas.map((turma, index) => ( <p key={index}>{turma.nome}</p> ))}
                </div>
            )}

            <br />

            <Link href="/">
                <a>VOLTAR</a>
            </Link>

            <Header />
        </div>
    )
}

export default withAuthSSG(Dashboard);