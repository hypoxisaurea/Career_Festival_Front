import React, { useState } from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  width: 65vw;
  height: 100%;
  background: rgba(88.35, 46.69, 255, 0.04);
  box-shadow: 0vw 0.7vw 0.7vw rgba(0, 0, 0, 0.25);

  margin: 3vw 0 7vw 0;
  padding: 1.5vw 0 1.5vw 0;

  display: block;
`;

const EmailContainer = styled.div`
  margin: 0.8vw 0 0 0;
`;

const ContactTitle = styled.div`
  color: #838383;
  font-size: 0.9rem;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;
  margin: 0 1.7vw 0 2vw;
  display: inline-block;
`;

const ContactContent = styled.div`
  color: black;
  font-size: 0.9rem;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;
  display: inline-block;
`;

const Contact = ({ managerName, managerEmail }) => {
  return (
    <ContactContainer>
      <ContactTitle>담당자</ContactTitle>
      <ContactContent>{managerName}</ContactContent>
      <EmailContainer>
        <ContactTitle>이메일</ContactTitle>
        <ContactContent>{managerEmail}</ContactContent>
      </EmailContainer>
    </ContactContainer>
  );
};

export default Contact;
