import { useState, useContext } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ToastContainer, toast } from 'react-toastify';

import { faArrowLeft, faUserGraduate, faChalkboardTeacher, faUser, faLock } from '@fortawesome/free-solid-svg-icons'

import { AuthContext } from '../../contexts/AuthContext';

import { Header, TitleSticker, Form, RoleButton, InputBox, LoginTitle, LoginButton, RoleSelector, FormWrapper, InputGroup } from './styles';

import 'react-toastify/dist/ReactToastify.css';

enum ToastTypes{
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning" 
}
interface NotifyProps{
  type: ToastTypes;
  message: string;
}

export default function Login() {
  const { signIn } = useContext(AuthContext);
  
  const { register, handleSubmit } = useForm();

  const [isRoleEqualsProfessor, setIsRoleEqualsProfessor] = useState(false);

  const router = useRouter();

  async function handleSignIn({email, password}){
    const { status, message } = await signIn({
      email,
      password,
      role: isRoleEqualsProfessor ? 'PROFESSOR' : 'ALUNO'
    });

    let type;
    switch(true){
      case (status < 300 && status >= 200): 
        type = ToastTypes.SUCCESS;
        break;
      case (status < 500 && status >= 400): 
        type = ToastTypes.WARNING;
        break;
      case (status < 600 && status >= 500): 
        type = ToastTypes.ERROR;
        break;
    }

    notify({
      type,
      message
    });
  }

  function notify({type, message}: NotifyProps){
    console.log(type);
    toast[type](message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <div>
      <Head>
        <title>Login | E-Learning</title>
      </Head>
      
      <Header>
        <button onClick={() => router.back()}>
          <FontAwesomeIcon 
            icon={faArrowLeft}
            color="#fff"
            size="lg"
          />
          <span>Voltar</span>
        </button>
      </Header>

      <TitleSticker>
        <div></div>
        <img src="/logo_and_name.png" alt="E-Learning" />
      </TitleSticker>
  
    <FormWrapper>
      <Form
        onSubmit={handleSubmit(handleSignIn)}
      >
        <LoginTitle>Login</LoginTitle>
        <RoleSelector>
            <RoleButton 
              isSelected={!isRoleEqualsProfessor}
              onClick={() => setIsRoleEqualsProfessor(false)}
              type="button"
            >
              <FontAwesomeIcon 
                icon={faUserGraduate}
                color={!isRoleEqualsProfessor ? '#fff' : '#666'}
                size="3x"
              />
              <p>Sou aluno</p>
            </RoleButton>

            <RoleButton 
              isSelected={isRoleEqualsProfessor}
              onClick={() => setIsRoleEqualsProfessor(true)}
              type="button"
            >
              <FontAwesomeIcon 
                icon={faChalkboardTeacher}
                color={isRoleEqualsProfessor ? '#fff' : '#666'}
                size="3x"
              />
              <p>Sou Professor</p>
            </RoleButton>
        </RoleSelector>
            
          <InputGroup>
            <InputBox>
              <p>
                <FontAwesomeIcon 
                  icon={faUser}
                  color="#fff"
                  size="1x"
                />
              <span>Usuário</span>
              </p>
              <input 
                {...register('email')}
                type="email"
                name="email"
                placeholder="Digite seu email..."
                autoComplete="email"
                required
              />
            </InputBox>

            <InputBox>
              <p>
                <FontAwesomeIcon 
                  icon={faLock}
                  color="#fff"
                  size="1x"
                />
              <span>Senha</span>
              </p>
              <input 
                {...register('password')}
                type="password"
                name="password"
                placeholder="Digite sua senha..."
                required
              />
            </InputBox>
          </InputGroup>

          <LoginButton
            type="submit"
          >
            Entrar
          </LoginButton>
      </Form>
      </FormWrapper>

      <ToastContainer />
    </div>
    )
  }