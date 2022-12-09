import {
  useNavigate,
  useLocation,
  Link,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

function SPAPlano() {
  const location = useLocation();
  const name = location.state; //
  return <div>SPAPlano</div>;
}
export default SPAPlano;
