import {
  BtnBox,
  AddList,
  AddBtn,
  VerticalBar,
} from "../styled/LoginMenu_styled";

function LoginMenuBox() {
  return (
    <>
      {/* 회원가입, 아이디 찾기, 비밀번호 찾기 버튼 */}
      {/* <div id="btns-box"> */}
      <BtnBox>
        <AddList>
          <AddBtn onClick={() => {}}>회원가입</AddBtn>

          {/* 구분 줄 */}
          <VerticalBar />

          <AddBtn>아이디 찾기</AddBtn>

          {/* 구분 줄 */}
          <VerticalBar />

          <AddBtn>비밀번호 찾기</AddBtn>
        </AddList>
      </BtnBox>
    </>
  );
}

export default LoginMenuBox;
