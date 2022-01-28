import React, { useState } from "react";
import { useAuth } from "@contexts/auth";

import { CardEdit } from "@components/Cards/CardEdit";
import { ButtonContact } from "@components/Buttons/ButtonContact";
import { ModalEditContactUser } from "./components/ModalEditContactUser";

import { Container, UserBio, Content, Footer } from "./styles";

const UserContact: React.FC = () => {
  const { user } = useAuth();
  const [viewModalEdit, setViewModalEdit] = useState(false);

  return (
    <Container>
      <CardEdit onPress={() => setViewModalEdit(true)} title="Sobre mim">
        <Content>
          <UserBio>{user?.bio}</UserBio>

          <Footer>
            {user?.github && (
              <ButtonContact icon="github" textButton="GitHub" />
            )}

            {user?.linkedin && (
              <ButtonContact icon="linkedin-square" textButton="Linkedin" />
            )}

            {user?.whatsapp && (
              <ButtonContact icon="phone" textButton="Whatssap" />
            )}
          </Footer>
        </Content>
      </CardEdit>

      {viewModalEdit && (
        <ModalEditContactUser
          viewModal={viewModalEdit}
          onClose={() => setViewModalEdit(false)}
        />
      )}
    </Container>
  );
};

export { UserContact };
