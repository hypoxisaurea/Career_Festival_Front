import React from "react";
import styled from "styled-components";
import Subtract from "../assets/images/Subtract-right.png";
import Subtract2 from "../assets/images/Subtract-left.png";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 0 30vw 0;
  @media screen and (max-width: 600px) {
    font-size: 1.5vw;
  }
`;


const Rectangle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //margin-top: -0.5vw;
  width: 100%;
  height: 8vw;
  color: white;
  background: linear-gradient(to right, #582fff, #7bccf9);
  margin-bottom: 3vw;
  position: relative; /* 자식 요소 위치 설정을 위해 부모 요소에 상대 위치 설정 */
`;

//오른쪽
const SubtractImage = styled.img`
  position: absolute;
  width: 15%;
  top: 80%;
  right: 5%;
  transform: translate(
    -50%,
    -50%
  ); /* 이미지의 중앙을 부모 요소의 중앙에 위치시키기 */
`;
//왼쪽
const SubtractImage2 = styled.img`
  position: absolute;
  top: 58%;
  left: 25%;
  width: 22%;
  transform: translate(
    -50%,
    -50%
  ); /* 이미지의 중앙을 부모 요소의 중앙에 위치시키기 */
`;

const Line = styled.div`
  width: 80%;
  height: 1px;
  background-color: #d9d9d9;
  margin-top: 2vw;
`;

const Main = styled.div`
  font-size: 2.5vw;
  font-weight: bold;
  @media screen and (max-width: 600px) {
    font-size: 2vw;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin-top: 2vw;
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: 600px) {
    font-size: 1.5vw;
  }
`;

const GrayContent = styled(Content)`
  color: #838383;
  justify-content: flex-start;
`;

const Button = styled.button`
  border: none;
  background: none;
  font-size: 1vw;
  color: #838383;
`;

const RightArrow = styled.span`
  margin-left: 5px;
`;



const SettingPage = () => {
  return (
    <Wrapper>
      <Rectangle>
        <SubtractImage2 src={Subtract2} alt="Subtract-left" />
        <Main>설정</Main>
        <SubtractImage src={Subtract} alt="Subtract-right" />
      </Rectangle>
      <Line />
      <ContentWrapper>
        <Content>서비스 이용약관</Content>
        <Button>▽</Button>
      </ContentWrapper>
      <Line />
      <ContentWrapper>
        <Content>서비스 이용 가이드</Content>
        <Button>▽</Button>
      </ContentWrapper>
      <Line />
      <ContentWrapper>
        <GrayContent>
          회원탈퇴 <RightArrow>➜</RightArrow>
        </GrayContent>
      </ContentWrapper>
    </Wrapper>
  );
};

export default SettingPage;
