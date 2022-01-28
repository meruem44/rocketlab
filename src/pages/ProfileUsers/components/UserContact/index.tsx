import React, { useCallback } from "react";
import { Linking } from "react-native";

import { User } from "@dtos/User";

import { CardEdit } from "@components/Cards/CardEdit";
import { ButtonContact } from "@components/Buttons/ButtonContact";

import { Container, UserBio, Content, Footer } from "./styles";

interface UserContactProps {
  user: User;
}

const UserContact: React.FC<UserContactProps> = ({ user }) => {
  const handleSendMessageWhats = useCallback(() => {
    const message = `Olá, eu sou o ${user?.name}, gostaria de ser seu amigo :)`;
    const number = `+55${user?.whatsapp}`;

    Linking.openURL(
      `https://api.whatsapp.com/send?phone=${number}&text=${message}`
    );
  }, [user]);

  const handleOpenLinkedin = useCallback(() => {
    Linking.openURL(user?.linkedin);
  }, [user]);

  const handleOpenGithub = useCallback(() => {
    Linking.openURL(`https://github.com/${user?.github}`);
  }, [user]);

  return (
    <Container>
      <CardEdit title="Sobre mim">
        <Content>
          <UserBio>{user?.bio || "-"}</UserBio>

          <Footer>
            {user?.github && (
              <ButtonContact
                onPress={handleOpenGithub}
                icon="github"
                textButton="GitHub"
              />
            )}

            {user?.linkedin && (
              <ButtonContact
                onPress={handleOpenLinkedin}
                icon="linkedin-square"
                textButton="Linkedin"
              />
            )}

            {user?.whatsapp && (
              <ButtonContact
                onPress={handleSendMessageWhats}
                icon="phone"
                textButton="Whatssap"
              />
            )}
          </Footer>
        </Content>
      </CardEdit>
    </Container>
  );
};

export { UserContact };
