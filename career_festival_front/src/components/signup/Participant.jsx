// 필요한 React 및 스타일링 컴포넌트를 불러옵니다.
import React, { useState } from "react";
import {
  Container,
  Title,
  Subtitle,
  Subtitle2,
  Gender,
  Age,
  InterestArea,
  ModalButton,
  Modal,
  ModalContent,
  SelectWrapper,
  OptionList
} from "./ParticipantStyle";

// Participant 컴포넌트를 정의합니다.
const Participant = () => {
  // 모달 창의 열림 여부와 선택된 지역 정보 및 추가 정보를 상태로 관리합니다.
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [email, setEmail] = useState(""); // 추가: 이메일 상태
  const [phoneNumber, setPhoneNumber] = useState(""); // 추가: 전화번호 상태
  const [affiliation, setAffiliation] = useState(""); // 추가: 소속 상태
  const [selectedKeywords, setSelectedKeywords] = useState([]); // 추가: 선택된 키워드 상태

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

  // Participant 컴포넌트의 렌더링 부분입니다.
  return (
    <Container>
      <Title>김커리님, Career Festival에 가입해주셔서 감사합니다.</Title>
      <Subtitle>나에게 맞는 오프라인 커리어 행사를 찾고 싶으신가요?</Subtitle>

      <Subtitle2>
        부가정보를 미리 입력하면 더 빠르게 행사 매칭이 가능합니다.
        <br />
        또, 행사에 함께 갈 팀원 모집 시 서로의 프로필 열람이 가능합니다.
      </Subtitle2>
      <hr />

      {/* 성별과 나이 입력 부분입니다. */}
      <p>성별</p>
      <Gender>
        <input type="radio" id="male" name="gender" value="male" />
        <label htmlFor="male">남성</label>
        <input type="radio" id="female" name="gender" value="female" />
        <label htmlFor="female">여성</label>
      </Gender>

      <Age>
        <label>나이</label>
        <input type="number" placeholder="나이를 입력하세요" />
      </Age>

      {/* 관심지역 입력 부분입니다. */}
      <p>관심지역</p>
      <InterestArea>
        {/* 모달 열기 버튼 */}
        <ModalButton onClick={handleModalToggle}>
          {/* 선택된 지역이 있으면 해당 지역, 없으면 기본 안내 메시지 출력 */}
          {selectedCity
            ? selectedCity
            : selectedArea
            ? "시/군/구 선택"
            : "관심 지역 선택하세요"}
        </ModalButton>

        {/* 모달 창 */}
        <Modal isOpen={isModalOpen}>
          {/* X 버튼 추가 */}
          <button
            onClick={closeModal}
            style={{ float: "right", cursor: "pointer" }}
          >
            X
          </button>
          <ModalContent>
            <SelectWrapper>
              {/* 시/도 선택 부분 */}
              <div>
                <label>시/도</label>
                <OptionList>
                  <button
                    onClick={() => handleAreaSelect("seoul")}
                    selected={selectedArea === "seoul"}
                  >
                    서울
                  </button>
                  <button
                    onClick={() => handleAreaSelect("busan")}
                    selected={selectedArea === "busan"}
                  >
                    부산
                  </button>
                  {/* 원하는 시/도 옵션을 추가하세요 */}
                </OptionList>
              </div>

              {/* 시/군/구 선택 부분 */}
              {selectedArea !== "" && (
                <div>
                  <label>시/군/구</label>
                  <OptionList>
                    {areaOptions[selectedArea].map((city) => (
                      <button
                        key={city}
                        onClick={() => handleCitySelect(city)}
                        selected={selectedCity === city}
                      >
                        {city}
                      </button>
                    ))}
                  </OptionList>
                </div>
              )}
            </SelectWrapper>
          </ModalContent>
        </Modal>
      </InterestArea>
      
      {/* 추가: 이메일 입력 부분입니다. */}
      <p>이메일</p>
      <input
        type="email"
        placeholder="이메일을 입력하세요"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* 추가: 전화번호 입력 부분입니다. */}
      <p>전화번호</p>
      <input
        type="tel"
        placeholder="전화번호를 입력하세요"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      {/* 추가: 소속 입력 부분입니다. */}
      <p>소속(회사/기관/학교명)</p>
      <input
        type="text"
        placeholder="소속을 입력하세요"
        value={affiliation}
        onChange={(e) => setAffiliation(e.target.value)}
      />

      {/* 추가: 커리어 키워드 입력 부분입니다. */}
      <p>커리어 키워드</p>
      <OptionList>
        {[
          "창업",
          "라이프",
          "예술",
          "마케팅",
          "경제금융",
          "인문사회",
          "과학기술",
          "디자인",
          "관광여행"
        ].map((keyword) => (
          <button
            key={keyword}
            onClick={() => handleKeywordSelect(keyword)}
            selected={selectedKeywords.includes(keyword)}
          >
            {keyword}
          </button>
        ))}
      </OptionList>

      {/* 부가정보 저장하기 버튼 */}
      <button onClick={saveAdditionalInfo} disabled={!selectedArea || !selectedCity || !email || !phoneNumber || !affiliation || selectedKeywords.length === 0}>
        부가정보 저장하기
      </button>
    </Container>
  );
};

// Participant 컴포넌트를 내보냅니다.
export default Participant;
