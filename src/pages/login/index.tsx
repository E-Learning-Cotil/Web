import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faUserGraduate, faChalkboardTeacher, faUser, faLock } from '@fortawesome/free-solid-svg-icons'

import { Header, TitleSticker, Form, RoleButton, InputBox, LoginTitle, LoginButton, RoleSelector, FormWrapper, InputGroup } from './styles';

export default function Login() {
  const [isRoleEqualsProfessor, setIsRoleEqualsProfessor] = useState(true);

  const router = useRouter();

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
      <Form>
        <LoginTitle>Login</LoginTitle>
        <RoleSelector>
            <RoleButton 
            isSelected={!isRoleEqualsProfessor}
            onClick={() => setIsRoleEqualsProfessor(false)}
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
                  size="lg"
                />
              <span>Usuário</span>
              </p>
              <input type="text"/>
            </InputBox>

            <InputBox>
              <p>
                <FontAwesomeIcon 
                  icon={faLock}
                  color="#fff"
                  size="lg"
                />
              <span>Senha</span>
              </p>
              <input type="password"/>
            </InputBox>
          </InputGroup>

          <LoginButton>Entrar</LoginButton>
      </Form>
      </FormWrapper>
    </div>
    )
  }