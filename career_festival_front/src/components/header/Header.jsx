import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import search from "../../assets/images/search.png";

// 헤더 컨테이너 스타일
const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  margin: 10px 0 5px 0;
  padding: 12px 0 16px 0;

  display: block;
  align-items: center; 
  text-align: center; 
`;
// 로그인과 회원가입을 포함하는 컨테이너 스타일

const AuthButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2vw;
`;


const LogoSearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  width: 15vw;
  cursor: pointer;
  margin-bottom: 10px;
  padding: 1.5vw;
`;


// 검색 아이콘 스타일
const SearchImage = styled.img`
  width: 1vw;
  height: 1vw;
  position: absolute;
  margin-left: 1vw;
  z-index: 1;
`;
// 검색 아이콘과 검색 입력창을 포함하는 컨테이너 스타일
const SearchItem = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  color: #582fff;
`;
//검색 내부
const SearchInput = styled.input`
  width: 60%;
  border: 0.15vw solid #582fff;
  border-radius: 0.5vw;
  padding: 0.7vw 1vw 0.7vw 2.5vw;
  font-size: 0.8vw;
`;
//검색 버튼
const SearchButton = styled.button`
  background-color: #582fff;
  color: #ffffff;
  border: none;
  border-radius: 0.5vw;
  padding: 0.7vw 1vw;
  font-size: 0.8vw;
  cursor: pointer;

  &:hover {
    background-color: #838383;
  }
`;


// 로그인 버튼 스타일
const LoginButtonStyle = styled.button`
  white-space: nowrap;
  background-color: #ffffff;
  color: #838383;
  font-weight: bold;
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

// 회원가입 버튼 스타일
const Join = styled.button`
  background-color: #ffffff;
  color: #838383;
  font-weight: bold;
  padding: 1vw 1vw 1vw 1vw;
  font-size: 0.8rem;
  border: none;

  &:hover {
    text-decoration: underline;
  }
`;


// 링크 목록을 포함하는 컨테이너 스타일
const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1vw;
  margin-left:-10vw;
  align-items: center;
  justify-content: center; /* 가운데 정렬을 위해 추가한 스타일 */
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

//세로선
const HeightLine = styled.div`
  color: #d9d9d9;
`;



const Header = () => {
  // 검색어
  const [searchTerm, setSearchTerm] = useState("");

  // 검색어 변경 핸들러
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // 검색 버튼 클릭 핸들러
  const handleSearchButtonClick = () => {
    // 여기에서 검색 버튼이 클릭되었을 때 수행할 동작을 추가
    // 예를 들면 검색 결과를 가져오거나 페이지를 이동하는 등의 동작
    console.log("검색어:", searchTerm);
  };

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
          <SearchButton onClick={handleSearchButtonClick}>검색</SearchButton>
        </SearchItem>
        <AuthButtonsContainer>
          <Link to="/login">
            <LoginButtonStyle onClick={handleButtonClick}>
              {isLoggedIn ? "로그아웃" : "로그인"}
            </LoginButtonStyle>
          </Link>
          <Join to="/signup">회원가입</Join>
        </AuthButtonsContainer>
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
    </HeaderContainer>
  );
};

export default Header;