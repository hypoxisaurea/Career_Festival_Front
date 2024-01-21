import React, { useState, useEffect } from "react";
import styled from "styled-components";
import InterestArea from "./InterestArea";

const Organizer = () => {
  // 모달 창의 열림 여부와 선택된 지역 정보 및 추가 정보를 상태로 관리합니다.
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState("seoul");
  const [selectedCity, setSelectedCity] = useState("");
  const [email, setEmail] = useState(""); // 추가: 이메일 상태
  const [phoneNumber, setPhoneNumber] = useState(""); // 추가: 전화번호 상태
  const [affiliation, setAffiliation] = useState(""); // 추가: 소속 상태
  const [selectedKeywords, setSelectedKeywords] = useState([]); // 추가: 선택된 키워드 상태
  // useEffect를 사용하여 컴포넌트가 처음 마운트될 때 실행될 로직 추가
  useEffect(() => {
    // 초기값으로 서울을 선택하도록 설정
    handleAreaSelect("seoul");
  }, []);
  // 모달 창을 열거나 닫는 함수를 정의합니다.
  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  // 모달 닫기 함수를 정의합니다.
  const closeModal = () => {
    setModalOpen(false);
  };

  // 시/도를 선택할 때 호출되는 함수입니다.
  const handleAreaSelect = (area) => {
    setSelectedArea(area);
    setSelectedCity("");
  };

  // 시/군/구를 선택할 때 호출되는 함수입니다.
  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setModalOpen(false);
  };

  // 지역 정보를 객체로 정의합니다.
  const areaOptions = {
    seoul: ["강남구", "종로구"],
    busan: ["서면역", "해운대"]
    // 다른 지역 정보 추가 가능
  };

  // 커리어 키워드 선택 시 호출되는 함수입니다.
  const handleKeywordSelect = (keyword) => {
    // 이미 선택된 키워드인지 확인 후 토글
    if (selectedKeywords.includes(keyword)) {
      setSelectedKeywords((prevKeywords) =>
        prevKeywords.filter((kw) => kw !== keyword)
      );
    } else {
      setSelectedKeywords((prevKeywords) => [...prevKeywords, keyword]);
    }
  };

  // 부가정보를 저장하는 함수입니다.
  const saveAdditionalInfo = () => {
    // 모든 항목이 입력되었는지 확인
    if (selectedArea && selectedCity && email && phoneNumber && affiliation && selectedKeywords.length > 0) {
      // 데이터를 백엔드로 전달하는 로직 추가
      console.log("부가정보 저장:", {
        selectedArea,
        selectedCity,
        email,
        phoneNumber,
        affiliation,
        selectedKeywords
      });
      // 추가로 필요한 로직 수행
    } else {
      // 모든 항목이 완료되지 않았을 때 처리
      console.error("모든 항목을 완료해야 합니다.");
    }
  };

  return (
    <Container>
      <Title>주최자 페이지</Title>
      <Subtitle>당신은 행사를 주최하고 운영할 권한을 가지고 있습니다.</Subtitle>
      {/* 기타 주최자 페이지에 필요한 내용을 추가하세요. */}
      {/* 관심지역 입력 부분입니다. */}
      <p>관심지역</p>

      <InterestArea
        selectedArea={selectedArea}
        handleAreaSelect={handleAreaSelect}
        selectedCity={selectedCity}
        handleCitySelect={handleCitySelect}
        areaOptions={areaOptions}
        isModalOpen={isModalOpen}
        handleModalToggle={handleModalToggle}
        closeModal={closeModal}
      />
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
