import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px 16px;
  margin: 4px;
  border-radius: 4px;
  background-color: ${(props) => (props.isSelected ? "#582FFF" : "#838383")};
  color: white;
  font-size: 16px;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

const Dropdown = () => {
  const [selectedMenu, setSelectedMenu] = useState("강연/세미나");
  const navigate = useNavigate(); // React Router의 useNavigate 훅 사용

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);

    // 선택한 메뉴에 따라 경로 이동
    switch (menu) {
      case "강연/세미나":
        navigate("/diary/lectureseminar");
        break;
      case "학술대회":
        navigate("/diary/symposium");
        break;
      case "전시/박람회":
        navigate("/diary/exhibitionfair");
        break;
      case "기타":
        navigate("/diary/other");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <StyledButton
        isSelected={selectedMenu === "강연/세미나"}
        onClick={() => handleMenuClick("강연/세미나")}
      >
        강연/세미나
      </StyledButton>
      <StyledButton
        isSelected={selectedMenu === "학술대회"}
        onClick={() => handleMenuClick("학술대회")}
      >
        학술대회
      </StyledButton>
      <StyledButton
        isSelected={selectedMenu === "전시/박람회"}
        onClick={() => handleMenuClick("전시/박람회")}
      >
        전시/박람회
      </StyledButton>
      <StyledButton
        isSelected={selectedMenu === "기타"}
        onClick={() => handleMenuClick("기타")}
      >
        기타
      </StyledButton>
    </div>
  );
};

export default Dropdown;
