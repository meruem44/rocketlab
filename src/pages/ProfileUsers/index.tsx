import React, { useCallback, useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components";

import { UserInfo } from "./components/UserInfo";
import { UserContact } from "./components/UserContact";

import { Container } from "./styles";
import { Loading } from "@components/Loading";
import { api } from "@services/api";
import { User } from "@dtos/User";

interface ProfileUsersParams {
  userId: string;
}

const ProfileUsers: React.FC = () => {
  const { params } = useRoute();
  const { userId } = params as ProfileUsersParams;

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    loadUserInfo();
  }, []);

  const loadUserInfo = useCallback(async () => {
    try {
      const response = await api.get(`/devs/${userId}`);

      setUser(response.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, [userId]);

  return (
    <Container>
      {!loading && (
        <>
          <UserInfo name={user?.name} avatar={user?.avatar} />
          <UserContact user={user} />
        </>
      )}

      {loading && <Loading isLoad={loading} />}
    </Container>
  );
};

export { ProfileUsers };
