import { useContext } from "react";
import {
  useNavigate,
  useLocation,
  Link,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { UserContext } from "../../context/UserContext";

function SPAInfo() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      Nome: {user.username}: token:{user.token} email:
    </div>
  );
}
export default SPAInfo;
