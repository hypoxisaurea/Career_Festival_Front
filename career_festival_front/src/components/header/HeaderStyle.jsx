// src/components/header/HeaderStyle.jsx
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  background: #582fff; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15%;
`;

const LinkContainer = styled.div`
  display: flex;
`;

const LinkItem = styled(Link)`
  color: #ffffff; /* 링크 텍스트 색상 */
  text-decoration: none;
  font-weight: bold;
  margin-right: 20px;
  font-size: 1.2rem; /* 링크 텍스트 크기 */
  
  &:hover {
    text-decoration: underline;
  }
`;

const HeaderTitle = styled.h1`
  color: #ffffff; /* 헤더 제목 색상 */
  font-size: 1.5rem; /* 헤더 제목 크기 */
`;

const HeaderStyle = {
  HeaderContainer,
  LinkContainer,
  LinkItem,
  HeaderTitle,
};

export default HeaderStyle;
