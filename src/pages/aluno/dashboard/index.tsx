import { GetServerSideProps } from "next";
import Router from "next/router";
import { parseCookies } from "nookies";
import React, { useContext, useEffect } from "react"
import withAuthSSR from "../../../hoc/withAuthSSR";
import withAuthSSG from "../../../hoc/withAuthSSG";
import { AuthContext } from "../../../contexts/AuthContext"
import {api} from "../../../services/api";

export function Dashboard(props) {
    const {user} = useContext(AuthContext);

    useEffect(() => {
        const { 'elearning.token': token } = parseCookies();

        if(!token){
            Router.push('/');
        }else{
            (async () => {
                const { data } = await api.get('/pagina-inicial');
                console.log(data);
            })()
        }
    }, []);

    return (
        <h1>{user?.nome} - {props.email}</h1>
    )
}

export default withAuthSSG(Dashboard);

//  ---- EXEMPLO HOC SSR ---- 
// export const getServerSideProps: GetServerSideProps = withAuthSSR(
//     async (ctx) => {
//         const email = "edu@gmail.com";

//         //Fetch the data
//         // const apiClient = getAPIClient();

//         return {
//             props: {
//                 email
//             }
//         }
//     }
// );