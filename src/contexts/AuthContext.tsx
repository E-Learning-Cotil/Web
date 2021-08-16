import { createContext, useEffect, useState } from "react";
import Router from 'next/router';
import { setCookie, parseCookies } from "nookies";

import {api} from "../services/api";

interface AuthData{
    email: string;
    password: string;
    role: string;
}

interface UserProps{
    id: number | string;
    nome: string;
    foto: string;
    telefone: string;
    email: string;
    role: string;
}

interface AuthResponse{
    status: number;
    message: string;
}

interface AuthContextProps {
    isAuthenticated: boolean;
    user: UserProps;
    signIn: (data: AuthData) => Promise<AuthResponse>;
}

const AuthContext = createContext({} as AuthContextProps);

function AuthProvider({children}){
    const [user, setUser] = useState<UserProps | null>(null);

    const isAuthenticated = !!user;

    useEffect(() => {
        const { 'elearning.token': token } = parseCookies();

        if(token){
            //Renova os dados do usuário
            // api.get(/@me);
            // setUser(response);
        }
    }, [])

    async function signIn({email, password, role}: AuthData){
        try {
            const { data: { token, user }, status } = await api.post('/authenticate', {
                email,
                password,
                role
            });

            setCookie(undefined, 'elearning.token', token, {
                maxAge: 60 * 60 * 1 // 1 hour
            });
    
            api.defaults.headers['Authorization'] = `Bearer ${token}`
            
            setUser(user);

            Router.push(`/${user.role.toLowerCase()}/dashboard`);

            return {
                status,
                message: "Sucesso ao fazer login!"
            }
        } catch (error) {
            return {
                status: error.response?.status,
                message: error.response?.data.error
            };
        }
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthContext,
    AuthProvider
};