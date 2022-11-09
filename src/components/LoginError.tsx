import {
  NullText,
  LoginSuccessText,
  NotFoundText,
} from "../styled/LoginError_styled";

export function WarningIDisNull() {
  return <NullText>아이디를 입력해주세요</NullText>;
}

export function WarningPWisNull() {
  return <NullText>비밀번호를 입력해주세요</NullText>;
}

export function AccountNotFound() {
  return (
    <NotFoundText id="check-acc">
      아이디 또는 비밀번호가 틀렸거나, 가입되지 않은 계정입니다
    </NotFoundText>
  );
}

export function LoginSuccess() {
  return (
    <LoginSuccessText id="login_success">
      로그인이 완료 되었습니다
    </LoginSuccessText>
  );
}
