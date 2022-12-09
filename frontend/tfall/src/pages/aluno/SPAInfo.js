import {
  useNavigate,
  useLocation,
  Link,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

function SPAInfo() {
  const location = useLocation();
  const name = location.state; //
  return <div>SPAInfo</div>;
}
export default SPAInfo;
