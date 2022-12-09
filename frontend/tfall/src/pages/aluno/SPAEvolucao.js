import {
  useNavigate,
  useLocation,
  Link,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

function SPAEvolucao() {
  const location = useLocation();
  const name = location.state; //

  return <div>SPAEvolucao</div>;
}
export default SPAEvolucao;
