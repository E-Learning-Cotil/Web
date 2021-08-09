import Head from 'next/head'

import { Header, TitleSticker, Main, Info, ImageWrapper } from './styles'

export default function Home() {
  return (
    <div>
      <Head>
        <title>E-Learning</title>
      </Head>

      <Header>
        <a href="/login">Login</a>
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