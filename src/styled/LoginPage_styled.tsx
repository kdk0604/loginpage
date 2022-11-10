import styled from "styled-components";

export const DefaultBox = styled.div`
  height: 50%;
  width: 100%;
  margin-top: 100px;
`;

export const SecondBox = styled.form`
  width: 500px;
  margin: auto;
  border-radius: 7px;
  padding: 10px;
  box-shadow: 2px 2px 2px 2px rgb(128, 128, 128, 0.5);
  overflow: hidden;
`;

export const LoginBox = styled.div`
  padding: 1%;
  display: block;
  width: 500px;
  margin: 0 auto;
`;

export const MainLogo = styled.img`
  height: 200px;
  width: 200px;
`;

export const InputBox = styled.div`
  display: flex;
  height: 50px;
  width: 90%;
  border: 2px solid rgb(137, 228, 127) !important;
  border-radius: 30px;
  overflow: hidden;
  margin: auto;
  margin-left: 12px;
  margin-bottom: 15px;
`;

export const IDInput = styled.input`
  border: 0;
  outline: none !important;
  width: 100%;
  margin-bottom: -15px;
`;

export const IconLine = styled.div`
  width: 3px;
  height: 400px;
  background-color: rgb(137, 228, 127);
  margin: auto;
  margin-left: 10px;
  margin-right: 10px;
`;

export const KeepLogin = styled.div`
  margin-top: 15px;
  margin-bottom: 20px;
  margin-left: 10px;
  display: flex;
`;

export const KeepLoginCheck = styled.input`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 10px;
  display: flex;
`;

export const KeepLoginText = styled.div`
  margin-top: 15px;
  margin-left: 10px;
`;

export const LoginBtn = styled.button`
  height: 40px;
  width: 60%;
  background-color: rgb(255, 255, 255, 0);
  border: 1px solid rgb(137, 228, 127) !important;
  border-radius: 5px;
  z-index: 10;
  font-weight: bolder;
  font-size: 20px;
  color: rgb(137, 228, 127);
  margin-bottom: 20px;
`;
