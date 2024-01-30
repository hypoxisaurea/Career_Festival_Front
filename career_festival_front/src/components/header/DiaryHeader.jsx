import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IDcard from "../../assets/images/IDcard.png";

const LogoImage = styled.img`
  display: flex;
  width: 100%;
  cursor: pointer;
  margin-bottom: 0.5vw;
`;

const WelcomeText = styled.span`
  color: #582fff;
  font-size: 0.8rem;
  margin-left: 1vw;
`;


const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7vw;
  flex-wrap: wrap;
  box-shadow: 0 0.3vw 0.3vw rgba(0, 0, 0, 0.25);

  @media (max-width: 950px) {
    font-size: 0.8vw;
  }

  @media (max-width: 500px) {
    font-size: 0.8vw;
  }
`;

const LinkItem = styled(Link)`
  color: #838383;
  text-decoration: none;
  font-weight: bold;
  margin-left: 4vw;
  font-size: 0.8rem;
  transition: color 0.3s;

  &:hover {
    color: #582fff;
  }
`;

const RegisterItem = styled(Link)`
  color: #582fff;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.8rem;
  margin-left: 23vw;
  margin-right: 1vw;
  border: none;

  &:hover {
    color: #838383;
  }
`;

const VerticalLine = styled.div`
  width: 0.1vw;
  height: 1.5vw;
  background-color: #d9d9d9;
`;

const DiaryHeader = () => {
  const [isLoggedIn] = useState(false);

  return (
      <LinkContainer>
        <Link to="/">
          <LogoImage src={IDcard} alt="logo" />
        </Link>
        <LinkItem to="/festival-list">행사목록</LinkItem>
        <LinkItem to="/diary">기록장</LinkItem>
        <LinkItem to="/community">커뮤니티</LinkItem>
        <LinkItem to="/mypage">마이페이지</LinkItem>
        <RegisterItem to="/register">행사등록하기</RegisterItem>
        <VerticalLine/>
        <WelcomeText>
          {isLoggedIn ? "000님 환영합니다!" : "로그인 해주세요!"}
        </WelcomeText>
      </LinkContainer>
  );
};

export default DiaryHeader;
