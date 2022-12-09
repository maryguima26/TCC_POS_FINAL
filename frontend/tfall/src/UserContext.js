import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import APIService from "./pages/aluno/APIService";

const AuthContext = createContext();

export const AuthProvider = (children) => {
  const [user, setUser] = useCookies(["mytoken"]);
  const navigate = useNavigate();

  const value = useMemo(
    () => ({
      user,
      login,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
