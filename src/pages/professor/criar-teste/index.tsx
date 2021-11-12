import React, { useEffect, useState } from "react"
import Head from "next/head";
import Link from 'next/link';
import { useDropzone } from 'react-dropzone';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCamera } from '@fortawesome/free-solid-svg-icons';

import withAuthSSG from "../../../hoc/withAuthSSG";
import Header from "../../../components/Header";

import { 
    Container, 
    Title, 
    ContentHeader,
    Dates,
    Date,
    ContentTitle,
    Grid,
    FakeGridDiv,
    CreateQuestion,
    QuestionTitle,
    QuestionTextarea,
    Answers,
    Answer,
    NewAnswer,
    Image,
    Dropzone,
    CreateButton,
    QuestionsList,
    Question,
    QuestionAnswer,
    DeleteQuestion } from './styles';

export function CriarTeste(props) {
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();


    return (
        <div>
            <Head>
                <title>Criar Teste | E-Learning</title>
            </Head>

            <Header 
                primaryColor="#9F18DF"
                secondaryColor="#6C1795"
            />
            
            <Container>
                <ContentHeader>
                    <Title>
                        <h2>Trigonometria</h2>
                        <h4>Matemática</h4>
                    </Title>
                    <Dates>
                        <Date>
                            <label htmlFor="">Início:</label>
                            <input type="datetime-local" name="" id="" />
                        </Date>
                        <Date>
                            <label htmlFor="">Fim:</label>
                            <input type="datetime-local" name="" id="" />
                        </Date>
                    </Dates>
                </ContentHeader>
                <ContentTitle>
                    <label htmlFor="test-name">Nome do teste:</label>
                    <input type="text" id="test-name"/>
                    <button>Criar teste</button>
                </ContentTitle>
                <Grid>
                    <FakeGridDiv>

                        <CreateQuestion>
                            <QuestionTitle>
                                <h3>Pergunta:</h3>
                                <QuestionTextarea contentEditable></QuestionTextarea>
                            </QuestionTitle>
                            <Answers>
                                <h3>Alternativas:</h3>
                                <Answer>
                                    <p>chuva</p>
                                    <FontAwesomeIcon 
                                        icon={faTimes}
                                        color={'#fff'}
                                        size="1x"
                                    />
                                </Answer>
                                <Answer>
                                    <p>avião</p>
                                    <FontAwesomeIcon 
                                        icon={faTimes}
                                        color={'#fff'}
                                        size="1x"
                                    />
                                </Answer>
                                <NewAnswer>
                                    <input type="text" />
                                    <button>Adicionar</button>
                                </NewAnswer>
                            </Answers>
                            <Image>
                                <h3>Imagem(opcional):</h3>
                                <Dropzone {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <FontAwesomeIcon 
                                        icon={faCamera}
                                        color={'#fff'}
                                        size="2x"
                                    />
                                    <p>Solte alguns arquivos aqui, ou clique <b>aqui</b> para selecionar</p>
                                </Dropzone>
                            </Image>
                            <CreateButton>Criar pergunta</CreateButton>
                        </CreateQuestion>
                    </FakeGridDiv>

                    <QuestionsList>
                        <Question>
                            <h4>1 - O que corre em pé e corre deitado?</h4>
                            <QuestionAnswer>
                                <input type="radio" name="" id="" />
                                <span>Avião</span>
                            </QuestionAnswer>
                            <QuestionAnswer>
                                <input type="radio" name="" id="" />
                                <span>Avião</span>
                            </QuestionAnswer>
                            <QuestionAnswer>
                                <input type="radio" name="" id="" />
                                <span>Avião</span>
                            </QuestionAnswer>
                            <QuestionAnswer>
                                <input type="radio" name="" id="" />
                                <span>Avião</span>
                            </QuestionAnswer>
                            <QuestionAnswer>
                                <input type="radio" name="" id="" />
                                <span>Avião</span>
                            </QuestionAnswer>
                            <DeleteQuestion>
                                <FontAwesomeIcon 
                                    icon={faTimes}
                                    color={'#fff'}
                                    size="1x"
                                />
                            </DeleteQuestion>
                        </Question>
                        <Question>
                            <h4>1 - O que corre em pé e corre deitado?</h4>
                            <QuestionAnswer>
                                <input type="radio" name="" id="" />
                                <span>Avião</span>
                            </QuestionAnswer>
                            <QuestionAnswer>
                                <input type="radio" name="" id="" />
                                <span>Avião</span>
                            </QuestionAnswer>
                            <QuestionAnswer>
                                <input type="radio" name="" id="" />
                                <span>Avião</span>
                            </QuestionAnswer>
                            <QuestionAnswer>
                                <input type="radio" name="" id="" />
                                <span>Avião</span>
                            </QuestionAnswer>
                            <QuestionAnswer>
                                <input type="radio" name="" id="" />
                                <span>Avião</span>
                            </QuestionAnswer>
                            <DeleteQuestion>
                                <FontAwesomeIcon 
                                    icon={faTimes}
                                    color={'#fff'}
                                    size="1x"
                                />
                            </DeleteQuestion>
                        </Question>
                        <Question>
                            <h4>1 - O que corre em pé e corre deitado?</h4>
                            <QuestionAnswer>
                                <input type="radio" name="" id="" />
                                <span>Avião</span>
                            </QuestionAnswer>
                            <QuestionAnswer>
                                <input type="radio" name="" id="" />
                                <span>Avião</span>
                            </QuestionAnswer>
                            <QuestionAnswer>
                                <input type="radio" name="" id="" />
                                <span>Avião</span>
                            </QuestionAnswer>
                            <QuestionAnswer>
                                <input type="radio" name="" id="" />
                                <span>Avião</span>
                            </QuestionAnswer>
                            <QuestionAnswer>
                                <input type="radio" name="" id="" />
                                <span>Avião</span>
                            </QuestionAnswer>
                            <DeleteQuestion>
                                <FontAwesomeIcon 
                                    icon={faTimes}
                                    color={'#fff'}
                                    size="1x"
                                />
                            </DeleteQuestion>
                        </Question>
                    </QuestionsList>
                </Grid>
            </Container> 
        </div>
    )
}

export default withAuthSSG(CriarTeste);