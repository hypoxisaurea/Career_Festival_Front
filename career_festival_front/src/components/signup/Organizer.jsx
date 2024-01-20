import React from "react";
import styled from "styled-components";

const Organizer = () => {
  return (
    <Container>
      <Title>주최자 페이지</Title>
      <Subtitle>당신은 행사를 주최하고 운영할 권한을 가지고 있습니다.</Subtitle>
      {/* 기타 주최자 페이지에 필요한 내용을 추가하세요. */}
    </Container>
  );
};

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  margin-bottom: 40px;
`;

export default Organizer;