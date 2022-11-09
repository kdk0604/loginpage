import {
  SocialLoginBox,
  SocialTitle,
  RowBar,
  SocialList,
  SocialIcon,
} from "../styled/SocialLogin_styled";

function SocialLogin() {
  return (
    <>
      {/* 소셜 로그인 범위 */}
      <SocialLoginBox>
        {/* 소셜 로그인 타이틀 */}
        <SocialTitle>
          <RowBar />
          소셜 로그인
          <RowBar />
        </SocialTitle>

        {/* 소셜 로그인 아이콘 */}
        <SocialList>
          <SocialIcon src="/logo/social/kakao.png" alt="카카오 로그인 아이콘" />

          <SocialIcon src="/logo/social/google.png" alt="구글 로그인 아이콘" />

          <SocialIcon src="/logo/social/naver.png" alt="네이버 로그인 아이콘" />

          <SocialIcon
            src="/logo/social/facebook.png"
            alt="페이스북 로그인 아이콘"
          />
        </SocialList>
      </SocialLoginBox>
    </>
  );
}

export default SocialLogin;
