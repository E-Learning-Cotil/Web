import { parseCookies } from "nookies";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

export default function withAuthSSR(gssp: GetServerSideProps) {
    return async function getServerSideProps(context: GetServerSidePropsContext) {
        const { 'elearning.token': token} = parseCookies(context);

        if (!token) {
            return {
                redirect: {
                    destination: '/',
                    permanent: false
                }
            };
        }

        return await gssp(context);
    }
}

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