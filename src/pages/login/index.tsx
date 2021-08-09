import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faUserGraduate, faChalkboardTeacher, faUser, faLock } from '@fortawesome/free-solid-svg-icons'

import { Header, TitleSticker, Form, RoleButton, InputBox } from './styles';

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
  
      <Form>
        <RoleButton 
          isSelected={!isRoleEqualsProfessor}
          onClick={() => setIsRoleEqualsProfessor(false)}
        >
          <FontAwesomeIcon 
            icon={faUserGraduate}
            color={!isRoleEqualsProfessor ? '#fff' : '#666'}
            size="2x"
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
            size="2x"
          />
          <p>Sou Professor</p>
        </RoleButton>
            
          <InputBox>
            <p>
              <FontAwesomeIcon 
                icon={faUser}
                color="#fff"
                size="lg"
              />
              Usuário:
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
              Senha:
            </p>
            <input type="password"/>
          </InputBox>

          <button>Entrar</button>
      </Form>
    </div>
    )
  }