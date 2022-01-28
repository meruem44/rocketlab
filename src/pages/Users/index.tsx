import React, { useCallback, useState, useEffect } from "react";
import { api } from "@services/api";

import { User } from "@dtos/User";

import { CardUser } from "@components/Cards/CardUser";
import { HeaderUsers } from "@components/Headers/HeaderUsers";

import { Loading } from "@components/Loading";

import { Container, Content, List, Header } from "./styles";

const Users: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = useCallback(async () => {
    try {
      const response = await api.get("/devs");

      const { data } = response;

      console.log(response.data);

      setUsers(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <Container>
      <HeaderUsers />

      {!loading && (
        <Content>
          <List
            data={users}
            keyExtractor={(_, index) => String(index)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <CardUser data={item as User} />}
          />
        </Content>
      )}

      {loading && <Loading isLoad={loading} />}
    </Container>
  );
};

export { Users };
