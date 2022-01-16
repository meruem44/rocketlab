import React from "react";

import { CardUser } from "@components/Cards/CardUser";
import { HeaderUsers } from "@components/Headers/HeaderUsers";

import { Container, Content, List, Header } from "./styles";
import { InputDefault } from "@components/Form/InputDefault";

const Users: React.FC = () => {
  return (
    <Container>
      <HeaderUsers />

      <Header>
        <InputDefault
          placeholder="Digite o nome do usuário"
          error=""
          icon="account-search"
        />
      </Header>

      <Content>
        <List
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          keyExtractor={(_, index) => String(index)}
          showsVerticalScrollIndicator={false}
          renderItem={() => <CardUser />}
        />
      </Content>
    </Container>
  );
};

export { Users };
