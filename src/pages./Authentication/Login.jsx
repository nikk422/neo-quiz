import "./login.css";
import { useAuth } from "../../context/AuthContext";
import { useLocation, useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { setLogin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const loginHandler = () => {
    setLogin((login) => !login);
    navigate(location.state.from.pathname);
  };
  return (
    <div className="login-container">
      <div className="login">
        <h1>
          <strong> Login </strong>
        </h1>
        <label  htmlFor="email">
          Email address
          <input
            type="text"
            placeholder="abcd@gmail.com"
            className="email authLable"
          ></input>
        </label>
        <label textSide htmlFor="password">
          Password
          <input
            type="password"
            placeholder="*********"
            className="password authLable"
          ></input>
        </label>
        <a className="forget-link" href="/">
          Forgot your password?
        </a>
        <button className=" logBlue">Login</button>
        <button className="LoginBtn-contain GuestBtn" onClick={loginHandler}>Login as a Guest</button>
        <Link to="/signup">
          <button className="CreateBtn">Create New Acount </button>
        </Link>
      </div>
    </div>
  );
};
export default Login;
