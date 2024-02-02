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
      
      // 서버에서 받은 헤더의 모든 내용을 콘솔에 출력
    response.headers.forEach((value, name) => {
      console.log(`${name}: ${value}`);
      if (name.toLowerCase() === 'authorization') {
        // authorization 헤더의 값을 localStorage에 저장
        localStorage.setItem("Authorization", value);
      }
    });

      console.log("2. 로그인 요청 후");
  
      if (response.ok) {
        console.log("3. 서버 응답 OK");
  
        // 백엔드에서 넘어온 Authorization 헤더에서 토큰을 추출
        const jwtToken = response.headers.get("Authorization");
  
        // 토큰을 로컬 스토리지에 저장
        localStorage.setItem("Authorization", jwtToken);
  
        console.log("4. 로컬 스토리지에 토큰 저장");
  
        // 로그인 후 리다이렉트
        navigate("/");
  
        console.log("5. 리다이렉트 완료");
  
        // 로그인 성공 시 토큰을 alert로 보여줌
        alert(`로그인 성공! \n현재 사용자의 토큰: ${jwtToken}`);
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
