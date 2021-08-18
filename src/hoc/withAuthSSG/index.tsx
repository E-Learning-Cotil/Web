import Router from 'next/router';
import { parseCookies } from 'nookies';
import React from 'react';


function withAuthSSG(WrappedComponent) {
    return class extends React.Component {
        componentDidMount(){
            const { 'elearning.token': token } = parseCookies();

            if(!token){
                Router.push('/');
            }
        }

        render() {
            return <WrappedComponent {...this.props}/>
        }
    }
}

export default withAuthSSG;