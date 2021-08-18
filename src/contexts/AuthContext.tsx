import { createContext, useEffect, useState } from "react";
import Router from 'next/router';
import { setCookie, parseCookies, destroyCookie } from "nookies";

import { api } from "../services/api";

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
    signOut: () => void;
}

const AuthContext = createContext({} as AuthContextProps);

function AuthProvider({children}){
    const [user, setUser] = useState<UserProps | null>(null);

    const isAuthenticated = !!user;

    useEffect(() => {
        (async () => {
            const { 'elearning.token': token } = parseCookies();
    
            if(token){
                const { data } = await api.get('/usuario/@me');
    
                setUser(data);
            }
        })()
    }, [])

    async function signIn({email, password, role}: AuthData){
        try {
            const { data: { token, user }, status } = await api.post('/authenticate', {
                email,
                password,
                role
            });

            setCookie(undefined, 'elearning.token', token, {
                maxAge: 60 * 60 * 24 // 24 hour
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

    function signOut(){
        setUser(null);
        destroyCookie(undefined, 'elearning.token');
        api.defaults.headers.Authorization = undefined;
        Router.push('/');
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn, user, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthContext,
    AuthProvider
};