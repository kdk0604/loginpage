import "./loginPage.css";

import React, { useState } from "react";

// import { showPassword } from "./functions/apis";

// import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import SocialLogin from "./social_login";
import RegisteAndFindAcc from "./RegisterAndFindAccount";

import userList from "../account/accountList";
// import { opine } from "https://deno.land/x/opine@1.4.0/mod.ts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

function Login() {
  function showPassword() {
    console.log("showPw : ", showPw);
    setShowPw(showPw ? false : true);
  }

  // true 면 비밀번호 표시
  const [showPw, setShowPw] = useState(false);
  // 비밀번호 숨기기 or 표시하기
  const showTF = !showPw ? "password" : "text";
  // 비밀번호 숨기기 or 표시하기 아이콘
  const pwIcon = showTF === "password" ? faEye : faEyeSlash;

  // 아이디 입력칸에 값이 없으면 true, 있으면 false
  const [InputIDisNull, setInputIDisNull] = useState(false);

  // 비밀번호 입력칸에 값이 없으면 true, 있으면 false
  const [InputPWisNull, setInputPWisNull] = useState(false);

  // 입력한 정보와 계정의 정보가 같으면 true, 다르면 false
  const [loginSuccess, setLoginSuccess] = useState(false);

  // 입력한 정보와 계정의 정보가 다르면 true, 같으면 false
  const [LoginError, setLoginError] = useState(false);

  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");

  function loginCheck() {
    !userId ? setInputIDisNull(true) : setInputIDisNull(false);
    !userPassword && userId ? setInputPWisNull(true) : setInputPWisNull(false);

    userId === userList.id &&
    userPassword === userList.pw &&
    userId &&
    userPassword
      ? setLoginSuccess(true)
      : setLoginSuccess(false);

    (userId !== userList.id || userPassword !== userList.pw) &&
    userId &&
    userPassword
      ? setLoginError(true)
      : setLoginError(false);

    console.log("아이디" + userId);
    console.log("비번" + userPassword);
  }

  return (
    <div id="page">
      <form id="box">
        <div id="login-box">
          {/* 로고 */}
          <img id="login-img" src="/logo/logo.jpg" alt="메인 로고" />

          {/* 아이디 또는 비밀번호가 틀렸거나, 가입되지 않은 아이디로 로그인을 시도하는 경우 */}
          {LoginError && (
            <div id="check-acc">
              아이디 또는 비밀번호가 틀렸거나, 가입되지 않은 계정입니다
            </div>
          )}

          {/* 아이디 입력창 박스 */}
          <div id="id-box">
            {/* 아이디 아이콘 */}
            <FontAwesomeIcon className="login-icon" icon={faUser} />
            <div className="icon-input-line" />
            <InputGroup className="mb-3 input-account">
              {/* 아이디 입력창 */}
              <input
                id="input-id"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                name="id"
                className="input-account"
                placeholder="아이디를 입력하세요"
                onChange={(e) => {
                  setUserId(e.target.value);
                  console.log(userId);
                }}
              />
            </InputGroup>
          </div>

          {/* 아이디를 입력하지 않았을 때 나타나는 경고문 */}
          {InputIDisNull && <div id="inputId-null">아이디를 입력해주세요</div>}

          {/* 비밀번호 입력창 박스 */}
          <div id="pw-box">
            {/* 비밀번호 아이콘 */}
            <FontAwesomeIcon className="login-icon" icon={faLock} />
            <div className="icon-input-line" />
            <InputGroup className="mb-3 input-account">
              {/* 비밀번호 입력창 */}
              <input
                type={showTF}
                id="input-pw"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                name="password"
                className="input-account"
                placeholder="비밀번호를 입력하세요"
                onChange={(e) => {
                  // console.log(e.target.value);
                  setUserPassword(e.target.value);
                  console.log(userPassword);
                }}
              />
              <FontAwesomeIcon
                id="show-pw"
                className="login-icon"
                icon={pwIcon}
                onClick={() => {
                  showPassword();
                }}
              />
            </InputGroup>
          </div>

          {/* 비밀번호를 입력하지 않았을 때 나타나는 경고문 */}
          {InputPWisNull && (
            <div id="inputPw-null">비밀번호를 입력해주세요</div>
          )}

          {/* 로그인 완료 메시지 */}
          {loginSuccess && (
            <div id="login_success">로그인이 완료 되었습니다</div>
          )}

          {/* 로그인 유지 체크박스 */}
          <div id="keep-login">
            <input id="keep-check" type="checkbox" />
            <div id="keep-text">로그인 상태 유지</div>
          </div>

          {/* 로그인 버튼 */}
          <Button
            onClick={(event) => {
              event.preventDefault();
              loginCheck();
            }}
            type="button"
            className="outMouse"
            id="btn-login"
            variant="success"
          >
            로그인
          </Button>

          <SocialLogin />
        </div>
      </form>
      <RegisteAndFindAcc />
    </div>
  );
}

export default Login;
