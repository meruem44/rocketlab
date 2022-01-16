import React, { useCallback, memo } from "react";
import { Linking } from "react-native";
import { Article } from "src/dtos/Article";

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

interface CardArticleComponentProps {
  data: Article;
}

const CardArticleComponent: React.FC<CardArticleComponentProps> = ({
  data,
}) => {
  const handleOpenLink = useCallback(async () => {
    await Linking.openURL(data?.url);
  }, [data]);

  return (
    <Container onPress={handleOpenLink}>
      <ContainerBanner>
        <Banner
          source={{
            uri: data?.thumbnail,
          }}
        />
      </ContainerBanner>

      <Content>
        <GroupInfo>
          {/* <ContainerTags>
            <Tag>javascript</Tag>
            <Tag>javascript</Tag>
            <Tag>javascript</Tag>
            <Tag>javascript</Tag>
            <Tag>javascript</Tag>
            <Tag>javascript</Tag>
          </ContainerTags> */}

          <Title>{data?.title}</Title>
        </GroupInfo>

        <Footer>
          <PostDate>há 1 ano</PostDate>

          <TimeRead>{`${data?.time_ready} min de leitura`}</TimeRead>
        </Footer>
      </Content>
    </Container>
  );
};

export const CardArticle = memo(CardArticleComponent);
