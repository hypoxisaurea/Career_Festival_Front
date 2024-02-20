import React, { useState } from "react";
import styled from "styled-components";

const JoinContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 5vw 0 0 0;
  display: block;
`;

const AskContainer = styled.div`
  width: 65vw;
  height: 100%;
  border-radius: 1vw;
  border: 0.1vw #838383 solid;
  margin: 2.5vw 0 3vw 0;
`;

const UserContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 1.8vw 0 0 1.5vw;
  display: flex;
`;

const AskContentContainer = styled.textarea`
  width: 61.5vw;
  min-height: 7vw;
  border-radius: 1vw;
  border: 0.15vw #838383 solid;
  margin: 0.8vw 0 0 1.5vw;

  &::placeholder {
    color: #838383;
    font-size: 0.9rem;
    font-family: "Noto Sans KR";
    font-weight: 400;
    padding: 1vw 0 0 1vw;
  }
`;

const BottomContainer = styled.div`
  display: flex;
`;

const CountContainer = styled.div`
  width: 5vw;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 1.5vw 0.7vw 0.5vw 50vw;
`;

const ReplyContainer = styled.div`
  width: 10vw;
  background: #020d6a;
  border-bottom-right-radius: 1vw;
  margin-left: 1vw;

  color: white;
  font-size: 1rem;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const HorizontalDivider = styled.div`
  width: 100%;
  height: 0.01vw;
  background: black;
  margin: 1vw 0 0 0;
`;

const Subtitle = styled.div`
  color: black;
  font-size: 1.25rem;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;
`;

const ContentText = styled.div`
  color: black;
  font-size: 1rem;
  font-family: "Noto Sans KR";
  font-weight: 400;
  word-wrap: break-word;
  margin: 0.6vw 0 0 0;
`;

const UserName = styled.span`
  color: black;
  font-size: 1rem;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;
  text-decoration: underline;
`;

const UserRole = styled.div`
  border-radius: 0.5vw;
  border: 0.1vw #582fff solid;

  color: #582fff;
  font-size: 0.9rem;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;

  display: inline-block;
  padding: 0 0.5vw 0 0.5vw;
  margin-left: 0.5vw;
`;

const QnAText = styled.span`
  color: black;
  font-size: 1rem;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;
  margin-left: 0.4vw;
`;

const CountText = styled.span`
  color: black;
  font-size: 0.9rem;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;
`;

const CountColorText = styled.span`
  color: #582fff;
  font-size: 0.9rem;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;
`;

const Join = () => {
  let [inputCount, setInputCount] = useState(0);

  const onInputHandler = (e) => {
    setInputCount(
      e.target.value.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, "$&$1$2").length
    );
  };

  return (
    <JoinContainer>
      <Subtitle>같이 가요!</Subtitle>
      <ContentText>
        같이 갈 팀원을 모집하고 싶다면 팀장이 되어 일정을 잡아보세요!
        <br />
        팀원들은 팀장의 글에 답글을 남겨 참여할 수 있습니다.
      </ContentText>
      <AskContainer>
        <UserContainer>
          <UserName>김커리</UserName>
          <QnAText>님</QnAText>
          <UserRole>팀장</UserRole>
        </UserContainer>

        <AskContentContainer
          placeholder="팀원들과 같이 갈 날짜와 시간, 장소와 인원수를 명시해주세요!  팀원들이 모일 수단을 첨부하시면 도움이 됩니다.
          예시) 1월 14일 14시, 삼각지역 9번 출구 앞, 3명, https://open.kakao.com/o/uIPzxlZf"
          onChange={onInputHandler}
          maxLength="500"
        />
        <HorizontalDivider />
        <BottomContainer>
          <CountContainer>
            <CountColorText>{inputCount}</CountColorText>
            <CountText>/500자</CountText>
          </CountContainer>
          <ReplyContainer>댓글 등록</ReplyContainer>
        </BottomContainer>
      </AskContainer>
    </JoinContainer>
  );
};

export default Join;
