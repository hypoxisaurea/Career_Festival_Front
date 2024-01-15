import React, { useState } from "react";
import { Link } from "react-router-dom";
<<<<<<< Updated upstream
import HeaderStyle from './HeaderStyle'; // 스타일 파일 불러오기
=======
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import search from "../../assets/images/search.png";
import setting from "../../assets/images/setting.png";

// 헤더 컨테이너 스타일
const HeaderContainer = styled.div`
  color: #582fff;
  display: flex;
  flex-direction: column;
  margin-top: 3vw;
  padding: 10px 15%;
`;

// 로고와 검색을 포함하는 컨테이너 스타일
const LogoSearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

// 로고 이미지 스타일
const LogoImage = styled.img`
  width: 15vw;
  cursor: pointer;
  margin-bottom: 10px;
  padding: 1.5vw;
`;

// 검색 아이콘과 검색 입력창을 포함하는 컨테이너 스타일
const SearchItem = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  color: #582fff;
  position: relative;
`;

// 검색 아이콘 스타일
const SearchImage = styled.img`
  width: 1vw;
  height: 1vw;
  position: absolute;
  margin-left: 1vw;
  z-index: 1;
`;

// 검색 입력창 스타일
const SearchInput = styled.input`
  width: 80%;
  border: 0.15vw solid #582fff;
  border-radius: 0.5vw;
  padding: 0.5vw 1vw 0.5vw 2.5vw;
  font-size: 0.8vw;
`;

// 로그인 버튼 스타일
const LoginButtonStyle = styled.button`
  white-space: nowrap;
  background-color: #ffffff;
  color: #838383;
  font-weight: bold;
  padding: 1vw 2vw 1vw 5vw;
  font-size: 0.8rem;
  border: none;

  &:hover {
    text-decoration: underline;
  }
`;
const WelcomeText = styled.span`
  color: #582fff;
  font-size: 0.8rem;
  margin-left: 1vw;
`;

// 환경 아이콘 스타일
const SettingImage = styled.img`
  width: 1vw;
  height: 1vw;
  margin-left: 1vw;
`;

// 링크 목록을 포함하는 컨테이너 스타일
const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1vw;
  align-items: center;
`;

// 각각의 링크 아이템 스타일
const LinkItem = styled(Link)`
  color: #838383;
  text-decoration: none;
  font-weight: bold;
  margin-left: 5vw;
  font-size: 0.8rem;

  &:hover {
    text-decoration: underline;
  }
`;

// 행사등록하기 링크 스타일
const RegisterItem = styled(Link)`
  color: #582fff;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.8rem;
  margin-left: 20vw;
  margin-right: 1vw;
  border: none;

  &:hover {
    text-decoration: underline;
  }
`;

//라인 1
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
`;

//라인 2
const Line2 = styled.div`
  margin-top: 1vw;
  width: 100%;
  height: 2px;
  background-color: rgba(217, 217, 217, 1);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
`;

//세로선
const HeightLine = styled.div`
  color: #d9d9d9;
`;


>>>>>>> Stashed changes

const Header = () => {
  // 검색어
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

<<<<<<< Updated upstream
      <HeaderStyle.LinkContainer>
        <HeaderStyle.LinkItem to="/">Home</HeaderStyle.LinkItem>
        <HeaderStyle.LinkItem to="/detail">Detail Festival</HeaderStyle.LinkItem>
        <HeaderStyle.LinkItem to="/login">Login</HeaderStyle.LinkItem>
        <HeaderStyle.LinkItem to="/signup">Signup</HeaderStyle.LinkItem>
      </HeaderStyle.LinkContainer>
      
    </HeaderStyle.HeaderContainer>
=======
  //로그인
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleButtonClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <HeaderContainer>
      <LogoSearchContainer>
        <Link to="/">
          <LogoImage src={logo} alt="logo" />
        </Link>
        <SearchItem>
          <SearchImage src={search} alt="search" />
          <SearchInput
            onChange={handleSearchTermChange}
            value={searchTerm}
            placeholder="2024년도 취업 세미나"
          />
        </SearchItem>
        <Link to="/login">
          <LoginButtonStyle onClick={handleButtonClick}>
            {isLoggedIn ? "로그아웃" : "로그인"}
          </LoginButtonStyle>
          <SettingImage src={setting} alt="setting" />
        </Link>
      </LogoSearchContainer>
      <Line />
      <LinkContainer>
        <LinkItem to="/list">행사목록</LinkItem>
        <LinkItem to="/record">기록장</LinkItem>
        <LinkItem to="/community">커뮤니티</LinkItem>
        <LinkItem to="/mypage">마이페이지</LinkItem>
        <RegisterItem to="/register">행사등록하기</RegisterItem>
        <HeightLine>|</HeightLine>
        <WelcomeText>
          {isLoggedIn ? "000님 환영합니다!" : "로그인 해주세요!"}
        </WelcomeText>
      </LinkContainer>

      <Line2 />
    </HeaderContainer>
>>>>>>> Stashed changes
  );
};

export default Header;