import React, { createContext, useContext, useCallback, useState } from "react";
import { api } from "@services/api";

import { ErrorDTO } from "src/dtos/Error";
import { User } from "src/dtos/User";

interface SignInData {
  email: string;
  password: string;
}

interface AuthContextData {
  handleSignIn(data: SignInData): Promise<string | void>;
  user: User;
  token: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>({} as User);
  const [token, setToken] = useState("");

  const handleSignIn = useCallback(async ({ email, password }: SignInData) => {
    try {
      const response = await api.post("/sessions", {
        email,
        password,
      });

      const { user, token } = response.data;

      setUser(user);
      setToken(token);

      return;
    } catch (error) {
      const {
        response: { status },
      } = error as ErrorDTO;

      return status === 400
        ? "Credenciais inválidas! Tente novamente"
        : "Ocorreu um erro inesperado. Tente fazer o login novamente";
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        handleSignIn,
        user,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthContextProvider, useAuth };
