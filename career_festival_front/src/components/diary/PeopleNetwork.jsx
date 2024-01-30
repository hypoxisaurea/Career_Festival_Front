import React, { useState } from "react";
import styled from "styled-components";

const PeopleNetworkAll = styled.div`
  display: flex;
  border: 1px solid;
  border-radius: 5px;
  background-color: #ffffff;
  justify-content: space-between;
  // position: relative; /* 부모 기준으로 자식의 위치 설정 */
`;

const VerticalLine = styled.div`
  // position: absolute;
  top: 0;
  bottom: 0;
  left: 50%; /* 가운데 정렬을 위해 50% 위치 설정 */
  width: 2px; /* 세로선의 너비 */
  background-color: #181818; /* 세로선의 색상 */
  content: ""; /* 가상 요소를 위한 필수 속성 */
`;

const HorizontalLine = styled.div`
  left: 0;
  right: 0;
  top: 50%;
  width: 100%;
  height: 1.5px;
  background-color: #d8d8d8;
  content: "";
`;

const Title = styled.div`
  color: #000000;
  font-size: 1.4vw;
`;

const Head = styled.div`
  display: flex;
  width: 100%;
  height: 10%
  flex: 1;
  border-radius: 5px;
  background-color: #e3dcff;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
`;

const SectionContainer = styled.div`
  border-radius: 5px;
  width: 50%;
  color: #000000;
  font-size: 1.4vw;
  display: flex;
  flex-direction: column;
`;

const InputField = styled.input`
  width: 90%;
  padding: 5px;
  border: none;
  outline: none;
  border-radius: 5px;
`;

const PeopleNetwork = ({ onComplete }) => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [name3, setName3] = useState("");

  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [phone3, setPhone3] = useState("");

  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");
  const [email3, setEmail3] = useState("");

  const handleNameChange = (event, setter) => {
    const value = event.target.value;
    setter(value);
  };

  const handlePhoneChange = (event, setter) => {
    const value = event.target.value;
    setter(value);
  };

  const handleEmailChange = (event, setter) => {
    const value = event.target.value;
    setter(value);
  };

  return (
    <>
      <Title>
        <p>인맥 네트워크</p>
      </Title>
      <PeopleNetworkAll>
        <SectionContainer>
          <Head>이름</Head>
          <HorizontalLine />
          <InputField
            type="text"
            id="name1"
            placeholder="이름 입력"
            value={name1}
            onChange={(e) => handleNameChange(e, setName1)}
          />
          <HorizontalLine />
          <InputField
            type="text"
            id="name2"
            placeholder="이름 입력"
            value={name2}
            onChange={(e) => handleNameChange(e, setName2)}
          />
          <HorizontalLine />
          <InputField
            type="text"
            id="name3"
            placeholder="이름 입력"
            value={name3}
            onChange={(e) => handleNameChange(e, setName3)}
          />
        </SectionContainer>
        <VerticalLine />
        <SectionContainer>
          <Head>전화번호</Head>
          <HorizontalLine />
          <InputField
            type="text"
            id="phone1"
            placeholder="전화번호 입력"
            value={phone1}
            onChange={(e) => handlePhoneChange(e, setPhone1)}
          />
          <HorizontalLine />
          <InputField
            type="text"
            id="phone2"
            placeholder="전화번호 입력"
            value={phone2}
            onChange={(e) => handlePhoneChange(e, setPhone2)}
          />
          <HorizontalLine />
          <InputField
            type="text"
            id="phone3"
            placeholder="전화번호 입력"
            value={phone3}
            onChange={(e) => handlePhoneChange(e, setPhone3)}
          />
        </SectionContainer>
        <VerticalLine />
        <SectionContainer>
          <Head>이메일</Head>
          <HorizontalLine />
          <InputField
            type="text"
            id="email1"
            placeholder="이메일 입력"
            value={email1}
            onChange={(e) => handleEmailChange(e, setEmail1)}
          />
          <HorizontalLine />
          <InputField
            type="text"
            id="email2"
            placeholder="이메일 입력"
            value={email2}
            onChange={(e) => handleEmailChange(e, setEmail2)}
          />
          <HorizontalLine />
          <InputField
            type="text"
            id="email3"
            placeholder="이메일 입력"
            value={email3}
            onChange={(e) => handleEmailChange(e, setEmail3)}
          />
        </SectionContainer>
      </PeopleNetworkAll>
    </>
  );
};

export default PeopleNetwork;
