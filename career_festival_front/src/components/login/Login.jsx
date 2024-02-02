// src/components/login/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate(); // useNavigate 훅 사용

  // 로그인 버튼 클릭 시 호출되는 함수
  const handleLogin = async () => {
    try {
      console.log("1. 로그인 요청 전");
  
      const response = await fetch("http://localhost:9000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
  
      console.log("2. 로그인 요청 후");
  
      if (response.ok) {
        console.log("3. 서버 응답 OK");
  
        // 서버에서 JSON 형식으로 응답하는지 확인
        const contentType = response.headers.get("content-type");
        console.log("4. 서버 응답이 JSON 형식_1");
        if (contentType && contentType.includes("application/json")) {
          console.log("4. 서버 응답이 JSON 형식_2");
  
          // JSON 형식인 경우에만 처리
          const data = await response.json();
          const { token } = data;
  
          console.log("5. 토큰 받아옴:", token);
  
          // 토큰을 로컬 스토리지에 저장
          localStorage.setItem("token", `Bearer ${token}`);
  
          console.log("6. 로컬 스토리지에 토큰 저장");
  
          // 로그인 후 리다이렉트
          navigate("/");
  
          console.log("7. 리다이렉트 완료");
  
          // 로그인 성공 시 토큰을 alert로 보여줌
          alert(`로그인 성공! 토큰: ${token}`);
        } else {
          // JSON 형식이 아닌 경우 처리
          console.error("서버 응답이 JSON 형식이 아닙니다.");
        }
      } else {
        console.error("로그인 실패:", response.statusText);
      }
    } catch (error) {
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
