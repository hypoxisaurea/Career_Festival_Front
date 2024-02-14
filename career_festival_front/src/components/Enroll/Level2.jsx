import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import WomanProfile from "../../assets/images/WomanProfile.png";

// 컨테이너 스타일 정의
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.5rem;
  text-align: center;
  padding: 10vw;
`;

// 주요 제목 스타일 정의
const Main = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;

// 본문 스타일 정의
const Body = styled.div`
  font-size: 1.2rem;
  margin-top: 2vw;
`;

// 내용 스타일 정의
const Content = styled.div`
  font-size: 0.8rem;
  margin-top: 1vw;
  white-space: pre-line;
`;

// 이미지 스타일 정의
const Image = styled.img`
  width: 140px;
  //height: 10%;
  margin-top: 1.5vw;
`;

// 텍스트 스타일 정의
const StyledText = styled.span`
  color: #582fff;
  text-decoration: underline;
  cursor: pointer;
`;

// 파일 업로드 또는 드래그 앤 드롭 안내 스타일 정의
const Contents = styled.div`
  font-size: 0.8rem;
  margin-top: 20px;
  white-space: pre-line;
`;

// 버튼 컨테이너 스타일 정의
const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 2vw;
  gap:1vw;
`;

// 다음 버튼 스타일 정의
const NextButton = styled(Link)`
  padding: 1vw 3vw;
  font-size: 1rem;
  background-color: #582fff;
  color: #fff;
  border: none;
  border-radius: 0.5vw;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: #4700a6;
  }
`;

// 이전 단계로 돌아가는 버튼 스타일 정의
const PrevButton = styled(Link)`
  padding: 1vw 3vw;
  font-size: 1rem;
  background-color: #dfdfdf;
  color: #fff;
  border: none;
  border-radius: 0.5vw;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: #838383;
  }
`;

// 건너뛰기 버튼 스타일 정의
const SkipButton = styled(Link)`
  font-size: 1rem;
  margin-top: 2vw;
  margin-left: 20vw;
  color: #838383;
  text-decoration: none;
  @media screen and (max-width: 600px) {
    font-size: 3vw;
    margin-left: 50vw;
  }
`;

// 파일 업로드 버튼 스타일 정의
const FileInput = styled.input`
  display: none;
`;

// 주최자 프로필 개설 페이지 컴포넌트
const Level2 = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  // 파일 선택 시 상태 업데이트
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  // 파일 업로드 버튼 클릭 시 파일 선택 창 열기
  const handleFileUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <Container>
        <Main>주최자 프로필 개설</Main>
        <Body>이미지를 첨부해주세요.</Body>
        <Content>프로필이 직접 등록한 이미지로 채워집니다.</Content>
        <Image
          src={selectedFile ? URL.createObjectURL(selectedFile) : WomanProfile}
          alt="WomanProfile"
        />
        <Contents onClick={handleFileUploadClick}>
          <StyledText>파일업로드</StyledText> 또는 드래그 앤 드롭 하세요.
        </Contents>
        <FileInput
          type="file"
          id="fileInput"
          onChange={handleFileChange}
          ref={fileInputRef}
        />
        <ButtonsContainer>
          <PrevButton to="/register/Level1">이전 단계</PrevButton>
          <NextButton to="/register/Level3">프로필 등록단계</NextButton>
        </ButtonsContainer>
        <SkipButton to="/register/Level3">이 단계 건너뛰기</SkipButton>
      </Container>
    </div>
  );
};

export default Level2;
