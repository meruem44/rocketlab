import React from "react";

import { AuthContextProvider } from "./auth";

const ContextProvider: React.FC = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

export { ContextProvider };
