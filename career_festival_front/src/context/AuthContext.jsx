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

const login = (userData) => {
  console.log("로그인 데이터:", userData); // userData를 로그에 출력
  // 로그인 시 로컬 스토리지에 로그인 정보 저장
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("user", JSON.stringify(userData));
  setIsLoggedIn(true);
  setUser(userData);
  console.log("로그인 정보가 로컬 스토리지에 저장되었습니다.");
};

  const logout = () => {
    // 로그아웃 시 로컬 스토리지에서 로그인 정보 삭제
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    console.log("로그인 정보가 로컬 스토리지에서 삭제되었습니다.");
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
