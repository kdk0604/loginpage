function registerAndFindAcc() {
  return (
    <>
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
    </>
  );
}

export default registerAndFindAcc;
