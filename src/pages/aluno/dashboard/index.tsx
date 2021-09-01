import React, { useEffect, useState } from "react"
import Head from "next/head";
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faBook, faCommentAlt, faScroll } from '@fortawesome/free-solid-svg-icons';

import withAuthSSG from "../../../hoc/withAuthSSG";
import Header from "../../../components/Header";
import ShimmerEffect from "../../../components/ShimmerEffect";
import { useFetch } from "../../../hooks/useFetch";
import Activity from "../../../components/Activity";
import { Navigation, NavLink, Container, Title, ActivitiesGroup } from "./styles";
import ActivitySkeleton from "../../../components/ActivitySkeleton";

export function Dashboard(props) {
    const { data } = useFetch('/pagina-inicial');

    return (
        <div>
            <Head>
                <title>Dashboard | E-Learning</title>
            </Head>

            <Header />

            <Navigation>
                <Link href="/">
                    <NavLink>
                        <FontAwesomeIcon 
                            icon={faList}
                            color={'#fff'}
                            size="2x"
                        />
                        <p>Atividades</p>
                    </NavLink>
                </Link>

                <Link href="/">
                    <NavLink>
                        <FontAwesomeIcon 
                            icon={faBook}
                            color={'#fff'}
                            size="2x"
                        />
                        <p>Turmas</p>
                    </NavLink>
                </Link>

                <Link href="/">
                    <NavLink>
                        <FontAwesomeIcon 
                            icon={faScroll}
                            color={'#fff'}
                            size="2x"
                        />
                        <p>Boletim</p>
                    </NavLink>
                </Link>

                <Link href="/">
                    <NavLink>
                        <FontAwesomeIcon 
                            icon={faCommentAlt}
                            color={'#fff'}
                            size="2x"
                        />
                        <p>Conversas</p>
                    </NavLink>
                </Link>
            </Navigation>

            <Container>
                <Title>
                    <h2>Atividades</h2>
                    <div></div> {/* Title tip */}
                </Title>

                <ActivitiesGroup>
                    {!data ? (
                        <>
                            <ActivitySkeleton />
                            <ActivitySkeleton />
                            <ActivitySkeleton />
                            <ActivitySkeleton />
                            <ActivitySkeleton />
                            <ActivitySkeleton />
                        </>
                    ) : (
                        data.atividades.map((ativ, index) => ( 
                                <Activity 
                                    key={index}
                                    id={ativ.id}
                                    photo={ativ.tipo === "ATIVIDADE" ? ativ.topico.turma.icone.link : ativ.topicos.turma.icone.link}
                                    name={ativ.nome}
                                    date={ativ.dataFim}
                                    color={ativ.tipo === "ATIVIDADE" ? ativ.topico.turma.cores.corPrim : ativ.topicos.turma.cores.corPrim}
                                />
                            )
                        )
                    ) }
                </ActivitiesGroup>
            </Container>

            {data?.turmas.map((turma, index) => ( <p key={index}>{turma.nome}</p> ))}
        </div>
    )
}

export default withAuthSSG(Dashboard);