import { Container, Header, ImageWrapper, Main, Info, DownloadButton } from './styles';
import File from "../File";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Head from "next/head";

export default function MobileVersion() {
    return (
        <div>
            <Head>
                <title>Mobile | E-Learning</title>
            </Head>
            <Container>
                <Header>
                        <div>
                            <img src="/logo_and_name.png" alt="" />
                        </div>
                </Header>

                <Main>
                    <ImageWrapper>
                        <img src="/landing_page_img.png" alt="" />
                    </ImageWrapper>

                    <Info>
                        <h1>O E-Learning junta tudo!</h1>

                        <p>O mais novo  Ambiente de Ensino à Distância do Brasil, criado por alunos pensando nos alunos. Focado em reduzir os impactos da pandemia na educação, o E-learning proporciona um ambiente de estudo completo, compacto e integrado, permitindo uma adaptação mais rápida ao EAD.</p>

                    </Info>

                    <DownloadButton href="/logo_and_name.png" download="elearning-apk">
                            <section>
                                <FontAwesomeIcon
                                    icon={faDownload}
                                    color={'#fff'}
                                    size="1x"
                                />
                            </section>
                            <p>Fazer Download</p>
                    </DownloadButton>
                </Main>
            </Container>
        </div>
    )
}