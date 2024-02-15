import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Backicon from "../../assets/images/keyboard-left-arrow-button.png";
import Logo from "../../assets/images/logo.png";
import Kakao from "../../assets/images/login_kakao.png";
import Naver from "../../assets/images/login_naver.png";
import { useAuth } from "../../context/AuthContext"; // AuthContext import 추가
import {
  LoginContainer,
  Field,
  InputField,
  Label, // Label import 추가
  Button,
  SignupText,
  Welcome,
  HelpText,
  SocialButtonContainer,
  RememberMe,
  IDFind,
  PasswordReset,
  BackLink
} from "./LoginStyle"; // 수정된 부분

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); // useAuth 훅을 사용하여 login 함수 가져옴
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [isFocusedOrFilled, setIsFocusedOrFilled] = useState(false); // 추가

  // 로그인 버튼 클릭 시 호출되는 함수
  const handleLogin = () => {
    login(username, password);
    navigate("/");
  };

  return (
    <>
      <br />
      <BackLink to="/">
        {" "}
        {/* 메인 화면으로 이동하는 BackLink 컴포넌트 추가 */}
        <img src={Backicon} alt="Backicon" />
      </BackLink>
      <LoginContainer>
        <img src={Logo} alt="Logo" /> {/* 로고 이미지 추가 */}
        <Welcome>커리어 페스티벌에 오신걸 환영합니다!</Welcome>
        <Field>
          <InputField
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onFocus={() => setIsFocusedOrFilled(true)} // 추가
            onBlur={() => setIsFocusedOrFilled(!!username)} // 추가
          />
          <Label for="username" isFocusedOrFilled={isFocusedOrFilled}> {/* 수정 */}
            이메일(ID)
          </Label>
        </Field>
        <Field>
          <InputField
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Label for="password" isFocusedOrFilled={isFocusedOrFilled}> {/* 수정 */}
            비밀번호
          </Label>
        </Field>
        {/* 로그인 버튼 클릭 시 handleLogin 함수 호출 */}
        <Button onClick={handleLogin}>로그인</Button>
        <HelpText>
          <IDFind as={Link} to="/find-username">
            아이디 찾기
          </IDFind>{" "}
          |{"  "}
          <PasswordReset as={Link} to="/password-reset">
            비밀번호 찾기
          </PasswordReset>{" "}
          |{"  "}
          <SignupText as={Link} to="/join">
            회원가입
          </SignupText>
        </HelpText>
        <SocialButtonContainer>
          <img src={Kakao} alt="Login_Kakao" />
          <img src={Naver} alt="Login_Naver" />
        </SocialButtonContainer>
      </LoginContainer>
    </>
  );
};

export default Login;
