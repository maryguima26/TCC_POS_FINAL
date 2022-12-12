import "./App.css";
import Icone from "./new_components/Icone";
import Navegacao from "./new_components/Navegacao";
import Corpo from "./new_components/Corpo";
import Botao from "./new_components/Botao";
import Rodape from "./new_components/Rodape";

import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

function App() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="App">
      <Icone />
      <Navegacao />
      <Corpo />
      <br />
      <br />
      <Botao />
      <Rodape />
    </div>
  );
}

export default App;
