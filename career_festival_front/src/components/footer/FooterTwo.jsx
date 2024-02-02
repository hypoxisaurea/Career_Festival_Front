import React from "react";
import styled from "styled-components";
import IDcard from "../../assets/images/IDcard.png";

const Main = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eae8e8;
  width: 100%;
  height: 7vh; /* 높이 조절, 필요에 따라 변경하세요 */
  padding: 2vw;
  font-size: 3rem;
  font-weight: 800;
  color: #582fff;
  border: 1px solid none;
  font-family: "Arial", sans-serif;//폰트 적용 안됨 어케함
`;

const LogoImage = styled.img`
  display: flex;
  cursor: pointer;
  width: 2vw;
  height: 3.5vw;
  margin-right: 1vw;
`;

const FooterTwo = () => {
  return (
    <div>
      <Main>
        <LogoImage src={IDcard} alt="logo" />
        Career Festival
      </Main>
    </div>
  );
};

export default FooterTwo;
