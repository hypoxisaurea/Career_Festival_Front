// src/components/login/Login.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginStyle from "./LoginStyle"; // 스타일 파일 불러오기
import Logo from "../../assets/images/logo.png";
import Kakao from "../../assets/images/login_kakao.png";
import Naver from "../../assets/images/login_naver.png";
import {
  LoginContainer,
  Field,
  InputField,
  Label,
  Button,
  SignupText,
  Welcome,
  HelpText,
  SocialButtonContainer,
  RememberMe,
  IDFind,
  PasswordReset,
} from "./LoginStyle"; // 수정된 부분

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // 로그인 로직 구현
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
    // 실제 로그인 처리를 여기에 추가하세요.
  };

  return (
    <LoginContainer>
      <img src={Logo} alt="Logo" /> {/* 로고 이미지 추가 */}
      <Welcome>커리어 페스티벌에 오신걸 환영합니다!</Welcome>
      <Field>
        <InputField
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Label for="username">이메일(ID)</Label>
      </Field>
      <Field>
        <InputField
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Label for="password">비밀번호</Label>
      </Field>
      <div>
        <RememberMe>
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          
          <label htmlFor="rememberMe">로그인 유지</label>
        </RememberMe>
      </div>
      <Button onClick={handleLogin}>로그인</Button>
      <HelpText>
        <IDFind as={Link} to="/find-username">아이디 찾기</IDFind> |{"  "}
        <PasswordReset as={Link} to="/password-reset">비밀번호 찾기</PasswordReset> |{"  "}
        <SignupText as={Link} to="/signup">회원가입</SignupText>
      </HelpText>

      <SocialButtonContainer>
        <img src={Kakao} alt="Login_Kakao" />
        <img src={Naver} alt="Login_Naver" />
      </SocialButtonContainer>
    </LoginContainer>
  );
};

export default Login;