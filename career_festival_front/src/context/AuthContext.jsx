// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // 페이지 로드 시 로컬 스토리지에서 로그인 정보 확인
    const loggedIn = localStorage.getItem("isLoggedIn");
    const userInfo = JSON.parse(localStorage.getItem("user"));

    if (loggedIn && userInfo) {
      setIsLoggedIn(true);
      setUser(userInfo);
    }
  }, []);

  const login = async (username, password) => {
    try {
      // 서버에 로그인 정보를 전송하고 응답을 기다림
      const response = await fetch("http://localhost:9000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password
        })
      });
  
      if (response.ok) {
        const userData = await response.json();
        const jwtToken = response.headers.get("Authorization"); // 토큰 헤더에서 추출
  
        // 사용자 정보를 추가로 가져오는 API 호출
        const userInfoResponse = await fetch("http://localhost:9000/", {
          method: "GET",
          headers: {
            Authorization: jwtToken
          }
        });
  
        if (userInfoResponse.ok) {
          const userInfo = await userInfoResponse.json();
  
          // 로컬 스토리지에 사용자 정보 저장
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("user", JSON.stringify(userInfo));
          localStorage.setItem("token", jwtToken); // 토큰 저장
  
          setIsLoggedIn(true);
          setUser(userInfo);
          console.log("로그인 정보 및 토큰이 로컬 스토리지에 저장되었습니다.");
        } else {
          console.error("사용자 정보 가져오기 실패:", userInfoResponse.statusText);
        }
      } else {
        console.error("로그인 실패:", response.statusText);
      }
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };
  

  const logout = () => {
    // 로그아웃 시 로컬 스토리지에서 로그인 정보 및 인증 정보 삭제
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("Authorization");
    setIsLoggedIn(false);
    setUser(null);
    console.log("로그인 정보 및 인증 정보가 로컬 스토리지에서 삭제되었습니다.");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth는 AuthProvider 안에서 사용되어야 합니다.");
  }
  return context;
};
