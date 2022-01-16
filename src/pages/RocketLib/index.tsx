import React, { useState, useCallback, useEffect } from "react";

import { CardArticle } from "@components/Cards/CardArticle";
import { HeaderLib } from "@components/Headers/HeaderLib";
import { Article } from "src/dtos/Article";
import { Loading } from "@components/Loading";

import { Container, List, Content } from "./styles";
import { api } from "@services/api";
import { FilterArticles } from "./components/FilterArticles";
import { TypeArticle } from "src/dtos/TypeArticle";

const RocketLib: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [typeArticle, setTypeArticle] = useState<TypeArticle>("frontend");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = useCallback(async () => {
    try {
      const response = await api.get("/articles");

      setArticles(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSelected = useCallback((value: TypeArticle) => {
    setTypeArticle(value);
  }, []);

  return (
    <Container>
      <HeaderLib />
      <FilterArticles onSelectType={handleSelected} currentType={typeArticle} />

      {!isLoading && (
        <Content>
          <List
            showsVerticalScrollIndicator={false}
            data={articles}
            keyExtractor={(_, index) => String(index)}
            renderItem={({ item }) => <CardArticle data={item as Article} />}
            keyboardShouldPersistTaps="always"
          />
        </Content>
      )}

      {isLoading && <Loading isLoad={isLoading} />}
    </Container>
  );
};

export { RocketLib };
