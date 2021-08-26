import Head from 'next/head'
import Link from 'next/link';
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import Loading from 'react-loading';

import { Header, TitleSticker, Main, Info, ImageWrapper } from './styles'

export default function Dashboard() {
  const { isAuthenticated, user, isLoading } = useContext(AuthContext);

  return (
    <div>
      <Head>
        <title>E-Learning</title>
      </Head>

      <Header>
        {isLoading ? (
          <Link href="#">
            <a>
              <Loading type={'spinningBubbles'} color={'#fff'}  height={'20px'} width={'20px'} />
            </a>
          </Link>
        ) : isAuthenticated ? (
          <Link href={`/${user.role.toLowerCase()}/dashboard`}>
            <a>
              <p>{user.nome}</p>
              <img src={user.foto} alt={user.nome} width="20px" height="20px"/>
            </a>
          </Link>
        ) : (
          <Link href="/login">
            <a>
              Login
            </a>
          </Link>
        )
        }
      </Header>

      <TitleSticker>
        <div></div> {/* Green trapezoid */}
        <img src="/logo_and_name.png" alt="" />        
      </TitleSticker>

      <Main>
        <ImageWrapper>
          <img src="/landing_page_img.png" alt="" />
        </ImageWrapper>
        
        <Info>
          <h1>O E-Learning junta tudo!</h1>
          
          <p>O mais novo  Ambiente de Ensino à Distância do Brasil, criado por alunos pensando nos alunos. Focado em reduzir os impactos da pandemia na educação, o E-learning proporciona um ambiente de estudo completo, compacto e integrado, permitindo uma adaptação mais rápida ao EAD.</p>
          
          <a href="#">Saiba mais</a>
        </Info>
      </Main>
    </div>
  )
}