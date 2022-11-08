import "./loginPage.css";

import React, { useState } from "react";

// import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
// import User from "src/account/accountList.tsx";
// import { opine } from "https://deno.land/x/opine@1.4.0/mod.ts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

let userList: { id: string; pw: string } = {
  id: "admin",
  pw: "123",
};

function Login() {
  // let navigate = useNavigate();

  function showPassword() {
    console.log("showPw : ", showPw);
    setShowPw(showPw == true ? false : true);
  }

  let [showPw, setShowPw] = useState(false);

  let showTF = showPw == false ? "password" : "text";

  let pwIcon = showTF == "password" ? faEye : faEyeSlash;

  // 아이디 입력칸에 값이 없으면 true, 있으면 false
  let [plsInputID, setPlsInputID] = useState(false);
  // 비밀번호 입력칸에 값이 없으면 true, 있으면 false
  let [plsInputPW, setPlsInputPW] = useState(false);

  let [test, setTest] = useState({
    display: "block",
  });

  // 아이디 입력 요청 메세지를 띄울지 말지 결정
  let Warning_ID =
    plsInputID == true
      ? {
          display: "block",
        }
      : {
          display: "none",
        };

  // 비밀번호 입력 요청 메세지를 띄울지 말지 결정
  let Warning_PW =
    plsInputPW == true && plsInputID == false
      ? {
          display: "block",
        }
      : {
          display: "none",
        };

  // 입력한 정보와 계정의 정보가 다르면 true, 같으면 false
  let [logSuc, setLogSuc] = useState(false);
  let [diffAcc, setDiffAcc] = useState(false);

  //  로그인이 성공했다는 메세지 출력
  let Login_Success =
    logSuc == true
      ? {
          display: "block",
        }
      : {
          display: "none",
        };

  // 해당 정보의 계정이 없다는 메세지
  let Diff_Acc =
    diffAcc == true
      ? {
          display: "block",
        }
      : {
          display: "none",
        };

  let userId: string;
  let userPassword: string;

  function loginCheck() {
    userId == null ? setPlsInputID(true) : setPlsInputID(false);
    userPassword == null ? setPlsInputPW(true) : setPlsInputPW(false);

    userId == userList.id &&
    userPassword == userList.pw &&
    userId != null &&
    userPassword != null
      ? setLogSuc(true)
      : setLogSuc(false);

    (userId != userList.id || userPassword != userList.pw) &&
    userId != null &&
    userPassword != null
      ? setDiffAcc(true)
      : setDiffAcc(false);

    console.log("아이디" + userId);
    console.log("비번" + userPassword);
  }

  return (
    <div id="page">
      <form id="box">
        <div id="login-box">
          {/* 로고 */}
          <img
            id="login-img"
            src="/logo/logo.jpg"
            onClick={() => {
              console.log(test);
            }}
          ></img>

          {/* 아이디 또는 비밀번호가 틀렸거나, 가입되지 않은 아이디로 로그인을 시도하는 경우 */}
          {/* 기본적으로 display: none 상태 */}
          <div id="check-acc" style={Diff_Acc}>
            입력하신 정보의 계정을 찾지 못 했습니다
          </div>

          {/* 아이디 입력창 박스 */}
          <div id="id-box">
            {/* 아이디 아이콘 */}
            <FontAwesomeIcon className="login-icon" icon={faUser} />
            <div className="input-air"></div>
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
                  userId = e.target.value;
                  console.log(userId);
                }}
              />
            </InputGroup>
          </div>

          {/* 아이디를 입력하지 않았을 때 나타나는 경고문 */}
          {/* 기본적으로 display: none 상태 */}
          <div id="pls-id" style={Warning_ID}>
            아이디를 입력해주세요
          </div>

          {/* 비밀번호 입력창 박스 */}
          <div id="pw-box">
            {/* 비밀번호 아이콘 */}
            <FontAwesomeIcon className="login-icon" icon={faLock} />
            <div className="input-air"></div>
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
                  userPassword = e.target.value;
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
          {/* 기본적으로 display: none 상태 */}
          <div id="pls-pw" style={Warning_PW}>
            비밀번호를 입력해주세요
          </div>

          {/* 로그인 완료 메시지 문자열 */}
          {/* 기본적으로 display: none 상태 */}
          <div id="login_success" style={Login_Success}>
            로그인이 완료 되었습니다
          </div>

          {/* 로그인 유지 체크박스 */}
          <div id="keep-login">
            <input id="keep-check" type="checkbox" />
            <div id="keep-text">로그인 상태 유지</div>
          </div>

          {/* 로그인 버튼 */}
          <Button
            onClick={() => {
              loginCheck();
            }}
            type="button"
            className="outMouse"
            id="btn-login"
            variant="success"
          >
            로그인
          </Button>

          {/* 소셜 로그인 범위 */}
          <div id="social">
            {/* 소셜 로그인 타이틀 */}
            <div id="social-title">
              <div className="row-bar" />
              <div>소셜 로그인</div>
              <div className="row-bar" />
            </div>

            {/* 소셜 로그인 아이콘 */}
            <div id="social-list">
              <img className="social-btn" src="/logo/social/kakao.png" />

              <img className="social-btn" src="/logo/social/google.png" />

              <img className="social-btn" src="/logo/social/naver.png" />

              <img className="social-btn" src="/logo/social/facebook.png" />
            </div>
          </div>
        </div>
      </form>

      {/* 회원가입, 아이디 찾기, 비밀번호 찾기 버튼 */}
      <div id="btns-box">
        <div id="add-list">
          <div id="register" className="add-btn" onClick={() => {}}>
            회원가입
          </div>

          {/* 구분 줄 */}
          <div className="ver-bar" />

          <div id="find-id" className="add-btn">
            아이디 찾기
          </div>

          {/* 구분 줄 */}
          <div className="ver-bar" />

          <div id="find-pw" className="add-btn">
            비밀번호 찾기
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
