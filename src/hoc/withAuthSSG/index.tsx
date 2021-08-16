import Router from 'next/router';
import { parseCookies } from 'nookies';
import React from 'react';
import { api } from '../../services/api';


function withAuthSSG(WrappedComponent) {
    return class extends React.Component {
        componentDidMount(){
            const { 'elearning.token': token } = parseCookies();

            if(!token){
                Router.push('/');
            }else{
                (async () => {
                    const { data } = await api.get('/pagina-inicial');
                    console.log(data);
                })()
            }
        }

        render() {
           return <WrappedComponent {...this.props}/>
        }
    }
}

export default withAuthSSG;