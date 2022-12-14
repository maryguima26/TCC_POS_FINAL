import { UserContext } from "./UserContext";
import { useEffect, useState } from "react";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   if (!user && token) {
  //     //await  getUserByToken
  //     // setUser(user)
  //   }
  // }, []);

  // qnd vc logar, salva o token no storage, nõ precisa nem chamar esse setUser, o useEffect vai fazer o trabalho, isso vai te ajudar qnd vc fizer F5

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
