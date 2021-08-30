import React, { useEffect, useState } from "react"
import Link from 'next/link';

import withAuthSSG from "../../../hoc/withAuthSSG";

import Header from "../../../components/Header";
import ShimmerEffect from "../../../components/ShimmerEffect";
import { useFetch } from "../../../hooks/useFetch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faBook, faCommentAlt, faScroll } from '@fortawesome/free-solid-svg-icons'

import { Navigation, NavLink, Activities, ActivitiesTitle, ActivitiesGroup } from "./styles";

export function Dashboard(props) {
    const { data } = useFetch('/pagina-inicial');

    return (
        <div>
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

            <Activities>
                <ActivitiesTitle>
                    <h2>Atividades</h2>
                    <div></div> {/* Title tip */}
                </ActivitiesTitle>

                <ActivitiesGroup>
                    
                </ActivitiesGroup>
            </Activities>

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

        </div>
    )
}

export default withAuthSSG(Dashboard);