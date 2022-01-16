import React from "react";

import { TypeArticle } from "src/dtos/TypeArticle";

import { ButtonFilter } from "../ButtonFilter";

import { Container } from "./styles";

interface FilterArticlesProps {
  currentType: TypeArticle;
  onSelectType(value: TypeArticle): void;
}

const FilterArticles: React.FC<FilterArticlesProps> = ({
  currentType,
  onSelectType,
}) => {
  return (
    <Container>
      <ButtonFilter
        onPress={() => onSelectType("frontend")}
        isActive={currentType === "frontend"}
        textButton="Front-end"
      />
      <ButtonFilter
        onPress={() => onSelectType("backend")}
        isActive={currentType === "backend"}
        textButton="Back-end"
      />
      <ButtonFilter
        onPress={() => onSelectType("mobile")}
        isActive={currentType === "mobile"}
        textButton="Mobile"
      />
    </Container>
  );
};

export { FilterArticles };
