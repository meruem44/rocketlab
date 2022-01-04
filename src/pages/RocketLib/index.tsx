import React from "react";

import { CardArticle } from "@components/Cards/CardArticle";

import { Container, List } from "./styles";

const RocketLib: React.FC = () => {
  return (
    <Container>
      <List>
        <CardArticle />
        <CardArticle />
        <CardArticle />
      </List>
    </Container>
  );
};

export { RocketLib };
