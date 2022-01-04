import React, { useCallback, memo } from "react";
import { Linking } from "react-native";

import {
  Container,
  ContainerBanner,
  Banner,
  Content,
  GroupInfo,
  ContainerTags,
  Tag,
  Title,
  Footer,
  PostDate,
  TimeRead,
} from "./styles";

const CardArticle: React.FC = () => {
  const handleOpenLink = useCallback(async () => {
    await Linking.openURL(
      "https://blog.rocketseat.com.br/axios-um-cliente-http-full-stack/"
    );
  }, []);

  return (
    <Container onPress={handleOpenLink}>
      <ContainerBanner>
        <Banner
          source={{
            uri: "https://blog.rocketseat.com.br/content/images/size/w600/2020/10/dark-mode-com-css-mudando-a-aparencia-do-blog-de-maneira-simples-e-rapida.jpg",
          }}
        />
      </ContainerBanner>

      <Content>
        <GroupInfo>
          <ContainerTags>
            <Tag>javascript</Tag>
            <Tag>javascript</Tag>
            <Tag>javascript</Tag>
            <Tag>javascript</Tag>
            <Tag>javascript</Tag>
            <Tag>javascript</Tag>
          </ContainerTags>

          <Title>Axios - um cliente HTTP Full stack</Title>
        </GroupInfo>

        <Footer>
          <PostDate>há 1 ano</PostDate>

          <TimeRead>3 min de leitura</TimeRead>
        </Footer>
      </Content>
    </Container>
  );
};

export { CardArticle };
