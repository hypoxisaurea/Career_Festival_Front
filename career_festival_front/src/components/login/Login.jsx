// src/components/login/Login.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginStyle from "./LoginStyle"; // 스타일 파일 불러오기
import Backicon from "../../assets/images/keyboard-left-arrow-button.png";
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
  BackLink,
} from "./LoginStyle"; // 수정된 부분

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // 로그인 버튼 클릭 시 호출되는 함수
  const handleLogin = async () => {
    try {
      // 로그인 요청을 보내기 전에 로딩 상태를 표시할 수 있음

      // fetch 함수를 사용하여 백엔드로 로그인 요청 보내기
      const response = await fetch("http://localhost:9000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // 사용자가 입력한 아이디와 비밀번호를 JSON 형태로 백엔드에 전송
        body: JSON.stringify({
          username,
          password,
        }),
      });

      // 응답 확인
      if (response.ok) {
        // 로그인 성공
        console.log("로그인 성공");

        // 실제 프로젝트에서는 토큰을 받아온다면 로컬 스토리지 등에 저장해둘 수 있음

        // 로그인 후 홈페이지로 이동하는 등의 작업 수행
        // 예시: window.location.href = "/home";
      } else {
        // 로그인 실패
        console.error("로그인 실패:", response.statusText);
      }
    } catch (error) {
      // 네트워크 오류 등 예외 처리
      console.error("에러 발생:", error);
    }
  };

  return (
    <>
    <br/>
    <BackLink to="/"> {/* 메인 화면으로 이동하는 BackLink 컴포넌트 추가 */}
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
      {/* 로그인 버튼 클릭 시 handleLogin 함수 호출 */}
      <Button onClick={handleLogin}>로그인</Button>
      <HelpText>
        <IDFind as={Link} to="/find-username">아이디 찾기</IDFind> |{"  "}
        <PasswordReset as={Link} to="/password-reset">비밀번호 찾기</PasswordReset> |{"  "}
        <SignupText as={Link} to="/join">회원가입</SignupText>
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
