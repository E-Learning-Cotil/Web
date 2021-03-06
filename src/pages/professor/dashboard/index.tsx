import React, { useEffect, useState } from "react"
import Head from "next/head";
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faBook, faCommentAlt, faScroll } from '@fortawesome/free-solid-svg-icons';

import withAuthSSG from "../../../hoc/withAuthSSG";
import Header from "../../../components/Header";
import { useFetch } from "../../../hooks/useFetch";
import Activity from "../../../components/Activity";
import { Navigation, NavLink, Container, Title, Group } from "./styles";
import ActivitySkeleton from "../../../components/ActivitySkeleton";
import ClassSkeleton from "../../../components/ClassSkeleton";
import Class from "../../../components/Class";

export function Dashboard(props) {
    const { data, error } = useFetch('/turmas/list-by-role');

    useEffect(() => {
        console.log(data)
    }, [data])

    useEffect(() => {
        console.log(error?.response || "sem erro")
    }, [error])

    return (
        <div>
            <Head>
                <title>Dashboard | E-Learning</title>
            </Head>

            <Header 
                primaryColor="#9F18DF"
                secondaryColor="#6C1795"
            />

            <Navigation>
                <Link href="/professor/atividades">
                    <NavLink>
                        <FontAwesomeIcon 
                            icon={faList}
                            color={'#fff'}
                            size="2x"
                        />
                        <p>Atividades</p>
                    </NavLink>
                </Link>

                <Link href="/professor/turmas">
                    <NavLink>
                        <FontAwesomeIcon 
                            icon={faBook}
                            color={'#fff'}
                            size="2x"
                        />
                        <p>Turmas</p>
                    </NavLink>
                </Link>

                <Link href="/professor/conversas">
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
                    <h2>Suas turmas</h2>
                    <div></div>
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
                                    subtitle={`${turma.serie.ano} ${turma.serie.sigla}`}
                                />
                            )
                        })
                    ) }
                </Group>
            </Container> 
        </div>
    )
}

export default withAuthSSG(Dashboard);