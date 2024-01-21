import React, { useState } from "react";
import styled from "styled-components";

const QnAContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 124px 0 0 0;
  display: block;
`;

const AskContainer = styled.div`
  width: 1224px;
  height: 100%;
  border-radius: 10px;
  border: 1px #838383 solid;
  margin: 24px 0 42px 0;
`;

const UserContainer = styled.div`
  width: 100%;
  height: 23px;
  margin: 29px 0 0 25px;
`;

const AskContentContainer = styled.textarea`
  width: 1180px;
  min-height: 79px;
  border-radius: 10px;
  border: 3px #582fff solid;
  margin: 9px 19px 0 24px;
`;

const CountContainer = styled.div`
  width: 72px;
  height: 100%;
  display: flex;
`;

const ReplyContainer = styled.div`
  width: 203px;
  height: 49px;
  background: #020d6a;
  border-bottom-right-radius: 10px;
  margin-left: 1021px;

  color: white;
  font-size: 16px;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const HorizontalDivider = styled.div`
  width: 100%;
  height: 1px;
  background: black;
  margin: 23px 0 0 0;
`;

const Subtitle = styled.div`
  color: black;
  font-size: 20px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;
`;

const UserName = styled.span`
  color: black;
  font-size: 16px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;
  text-decoration: underline;
`;

const QnAText = styled.span`
  color: black;
  font-size: 16px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;
  margin-left: 3px;
`;

const CountText = styled.span`
  color: black;
  font-size: 14px;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;
`;

const CountColorText = styled.span`
  color: #582fff;
  font-size: 14px;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;
`;

const QnA = () => {
  return (
    <QnAContainer>
      <Subtitle>문의하기</Subtitle>
      <AskContainer>
        <UserContainer>
          <UserName>김커리</UserName>
          <QnAText>님</QnAText>
        </UserContainer>
        <AskContentContainer></AskContentContainer>

        <HorizontalDivider />

        <CountContainer>
          <CountColorText>0</CountColorText>
          <CountText>/5000자</CountText>
        </CountContainer>
        <ReplyContainer>댓글 등록</ReplyContainer>
      </AskContainer>
    </QnAContainer>
  );
};

export default QnA;
