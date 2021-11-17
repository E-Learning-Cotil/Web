import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

import Header from "../../../../components/Header";
import Icon from "../../../../components/Icon";
import ShimmerEffect from "../../../../components/ShimmerEffect";
import TopicItem, { TopicItemTypes } from "../../../../components/TopicItem";
import { useFetch } from "../../../../hooks/useFetch";
import withAuthSSG from "../../../../hoc/withAuthSSG";

import { Container, Title, ItemsBox } from "./styles";

function TopicoEspecifico() {
  const {
    query: { id },
  } = useRouter();

  const { data } = useFetch(`/topicos/${id}`);

  useEffect(() => {
    console.log("Topicos");
    console.log(data);
  }, [data]);

  return (
    <div>
      <Head>
        <title>{data?.nome} | E-Learning</title>
      </Head>

      <Header
        primaryColor={data?.turma.cores.corPrim || "#6D6D6D"}
        secondaryColor={data?.turma.cores.corSec || "#454545"}
      />

      <Container>
        <Title>
          <Icon
            color={data?.turma.cores.corPrim}
            icon={data?.turma.icone.altLink}
          />
          {!data ? (
            <section>
              <ShimmerEffect width="200px" height="30px" />
              <ShimmerEffect width="120px" height="20px" />
            </section>
          ) : (
            <section>
              <h2>{data?.nome}</h2>
              <h4>{data?.turma.nome}</h4>
            </section>
          )}
        </Title>

        {!data ? (
          <span>
            <ShimmerEffect width="100%" height="20px" />
            <ShimmerEffect width="100%" height="20px" />
            <ShimmerEffect width="100%" height="20px" />
            <ShimmerEffect width="60%" height="20px" />
          </span>
        ) : (
          <span>{data?.descricao}</span>
        )}

        <ItemsBox>
          {data?.Materiais.length > 0 && (
            <div>
              <h3>Materiais</h3>
              {!data ? (
                <section>
                  <nav>
                    <ShimmerEffect width="100%" height="40px" />
                  </nav>
                  <nav>
                    <ShimmerEffect width="100%" height="40px" />
                  </nav>
                  <nav>
                    <ShimmerEffect width="100%" height="40px" />
                  </nav>
                  <nav>
                    <ShimmerEffect width="100%" height="40px" />
                  </nav>
                  <nav>
                    <ShimmerEffect width="100%" height="40px" />
                  </nav>
                  <nav>
                    <ShimmerEffect width="100%" height="40px" />
                  </nav>
                </section>
              ) : (
                <section>
                  {data?.Materiais.map(({ id, nome }) => (
                    <TopicItem
                      name={nome}
                      type={TopicItemTypes.MATERIAL}
                      color={data?.turma.cores.corSec}
                      route={`materiais/${id}`}
                    />
                  ))}
                </section>
              )}
            </div>
          )}
          {data?.atividades.length > 0 && (
            <div>
              <h3>Atividades</h3>
              {!data ? (
                <section>
                  <nav>
                    <ShimmerEffect width="100%" height="40px" />
                  </nav>
                  <nav>
                    <ShimmerEffect width="100%" height="40px" />
                  </nav>
                  <nav>
                    <ShimmerEffect width="100%" height="40px" />
                  </nav>
                  <nav>
                    <ShimmerEffect width="100%" height="40px" />
                  </nav>
                  <nav>
                    <ShimmerEffect width="100%" height="40px" />
                  </nav>
                  <nav>
                    <ShimmerEffect width="100%" height="40px" />
                  </nav>
                </section>
              ) : (
                <section>
                  {data?.atividades.map(({ id, nome }) => (
                    <TopicItem
                      name={nome}
                      type={TopicItemTypes.ATIVIDADE}
                      color={data?.turma.cores.corSec}
                      route={`atividades/${id}`}
                    />
                  ))}
                </section>
              )}
            </div>
          )}
          {data?.testes.length > 0 && (
            <div>
              <h3>Testes</h3>
              {!data ? (
                <section>
                  <nav>
                    <ShimmerEffect width="100%" height="40px" />
                  </nav>
                  <nav>
                    <ShimmerEffect width="100%" height="40px" />
                  </nav>
                  <nav>
                    <ShimmerEffect width="100%" height="40px" />
                  </nav>
                  <nav>
                    <ShimmerEffect width="100%" height="40px" />
                  </nav>
                  <nav>
                    <ShimmerEffect width="100%" height="40px" />
                  </nav>
                  <nav>
                    <ShimmerEffect width="100%" height="40px" />
                  </nav>
                </section>
              ) : (
                <section>
                  {data?.testes.map(({ id, nome }) => (
                    <TopicItem
                      name={nome}
                      type={TopicItemTypes.TESTE}
                      color={data?.turma.cores.corSec}
                      route={`testes/${id}`}
                    />
                  ))}
                </section>
              )}
            </div>
          )}
        </ItemsBox>
      </Container>
    </div>
  );
}

export default withAuthSSG(TopicoEspecifico);
