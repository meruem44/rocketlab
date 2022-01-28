import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from "react";
import { api } from "@services/api";

import { ErrorDTO } from "src/dtos/Error";
import { User } from "src/dtos/User";
import { HookStorage } from "@hooks/hookStorage";

interface UpdateUser {
  user: User;
  about?: boolean;
}
interface SignInData {
  email: string;
  password: string;
}

interface AuthContextData {
  handleSignIn(data: SignInData): Promise<string | void>;
  user: User;
  token: string;
  updateUser(data: UpdateUser): Promise<void | string>;
  signOut(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthContextProvider: React.FC = ({ children }) => {
  const { saveStorage, KEY_USER_INFO, KEY_USER_TOKEN, removeItem, getItem } =
    HookStorage();

  const [user, setUser] = useState<User>({} as User);
  const [token, setToken] = useState("");

  useEffect(() => {
    loadInfoStorage();
  }, []);

  const loadInfoStorage = useCallback(async () => {
    const userToken = await getItem(KEY_USER_TOKEN);

    if (userToken) {
      const userData = await getItem(KEY_USER_INFO);

      setToken(userToken);
      setUser(userData);
    }
  }, []);

  const updateUser = useCallback(
    async ({ user, about = false }: UpdateUser) => {
      try {
        const { email, name, bio, job, whatsapp, github, linkedin } = user;

        const body = {
          email,
          name,
          bio,
          job,
          whatsapp,
          github,
          linkedin,
          about,
        };

        const response = await api.put("/profile", body, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response.data);

        await saveStorage({
          key: KEY_USER_INFO,
          data: response.data,
        });

        setUser(response.data);
      } catch (error) {
        console.log(error);
        return "error";
      }
    },
    [token]
  );

  const handleSignIn = useCallback(async ({ email, password }: SignInData) => {
    try {
      const response = await api.post("/sessions", {
        email,
        password,
      });

      const { user, token } = response.data;

      await saveStorage({
        key: KEY_USER_TOKEN,
        data: token,
      });

      await saveStorage({
        key: KEY_USER_INFO,
        data: user,
      });

      api.defaults.headers.common.Authorization = `Bearer ${token}`;

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

  const signOut = useCallback(async () => {
    await removeItem(KEY_USER_TOKEN);
    await removeItem(KEY_USER_INFO);

    setToken("");
    setUser({} as User);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        handleSignIn,
        user,
        token,
        updateUser,
        signOut,
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
