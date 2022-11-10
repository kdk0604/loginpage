import "./LoginPage.css";

// import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

import LoginInput from "./LoginInputBox";
import SocialLogin from "./SocialLogin";
import LoginMenu from "./LoginMenu";

import { DefaultBox, SecondBox, LoginBox } from "../styled/LoginPage_styled";

function Login() {
  return (
    <DefaultBox>
      <SecondBox>
        <LoginBox>
          <LoginInput />
          <SocialLogin />
        </LoginBox>
      </SecondBox>
      <LoginMenu />
    </DefaultBox>
  );
}

export default Login;
