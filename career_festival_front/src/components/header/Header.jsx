// src/components/header/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import HeaderStyle from './HeaderStyle'; // 스타일 파일 불러오기

const Header = () => {
  return (
    <HeaderStyle.HeaderContainer>
      <HeaderStyle.HeaderTitle to="/">Career Festival</HeaderStyle.HeaderTitle>

      <HeaderStyle.LinkContainer>
        <HeaderStyle.LinkItem to="/">Home</HeaderStyle.LinkItem>
        <HeaderStyle.LinkItem to="/detail">Detail Festival</HeaderStyle.LinkItem>
        <HeaderStyle.LinkItem to="/login">Login</HeaderStyle.LinkItem>
        <HeaderStyle.LinkItem to="/signup">Signup</HeaderStyle.LinkItem>
      </HeaderStyle.LinkContainer>
      
    </HeaderStyle.HeaderContainer>
  );
};

export default Header;
