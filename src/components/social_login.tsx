function socialLogin() {
  return (
    <>
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
          <img
            className="social-btn"
            src="/logo/social/kakao.png"
            alt="카카오 로그인 아이콘"
          />

          <img
            className="social-btn"
            src="/logo/social/google.png"
            alt="구글 로그인 아이콘"
          />

          <img
            className="social-btn"
            src="/logo/social/naver.png"
            alt="네이버 로그인 아이콘"
          />

          <img
            className="social-btn"
            src="/logo/social/facebook.png"
            alt="페이스북 로그인 아이콘"
          />
        </div>
      </div>
    </>
  );
}

export default socialLogin;
