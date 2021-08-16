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