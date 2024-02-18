// 키워드를 어떤걸 고르는지에 따라 되거나 안되거나 그럼 수정필요!!!!!!

import React, { useState, useEffect } from "react";
import InterestArea from "./InterestArea";
import AffiliationInput from "./AffiliationInput";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Title,
  Subtitle,
  Subtitle2,
  Gender,
  Age,
  EmailInput,
  TelInput,
  KeyworldOptionList,
  KeywordButton,
  TwoButton,
  LaterSave,
  Save
} from "./ParticipantStyle";
import { useAuth } from "../../context/AuthContext"; // useAuth를 추가로 임포트합니다.

const Participant = () => {
  // 각 입력값을 상태로 관리합니다.
  const [isModalOpen, setModalOpen] = useState(false); // 모달 창의 열림/닫힘 상태
  const [selectedArea, setSelectedArea] = useState("seoul"); // 선택된 관심지역 (시/도)
  const [selectedCity, setSelectedCity] = useState(""); // 선택된 관심지역 (시/군/구)
  const [email, setEmail] = useState(""); // 이메일 입력 상태
  const [phoneNumber, setPhoneNumber] = useState(""); // 전화번호 입력 상태
  const [affiliation, setAffiliation] = useState(""); // 소속 입력 상태
  const [department, setDepartment] = useState(""); // 부서 입력 상태
  const [selectedKeywords, setSelectedKeywords] = useState([]); // 선택된 커리어 키워드들
  // 기타 키워드 입력을 위한 상태 추가
  const [customKeyword, setCustomKeyword] = useState(""); // 추가된 기타 키워드
  const [customKeywords, setCustomKeywords] = useState([]); // 추가된 모든 기타 키워드들
  const [gender, setGender] = useState(""); // 성별 입력 상태
  const [age, setAge] = useState(""); // 나이 입력 상태
  const [token, setToken] = useState(""); // 토큰 상태 (인증에 사용)

  // useAuth 훅을 사용하여 인증 관련 기능을 가져옵니다.
  const { saveAdditionalInfo } = useAuth();

  useEffect(() => {
    // 컴포넌트가 마운트될 때 초기 작업을 수행합니다.


    // 로컬 스토리지에서 토큰을 가져와 설정합니다.
    const tokenFromStorage = getTokenFromLocalStorage();
    if (tokenFromStorage) {
      setToken(tokenFromStorage);
      console.log("로컬 스토리지에서 토큰을 가져왔습니다:", tokenFromStorage);
    } else {
      // 토큰이 없는 경우 다른 작업 수행
    }
  }, []);

  // useNavigate 훅을 사용하여 페이지 이동 기능을 설정합니다.
  const navigate = useNavigate();

  // 로컬 스토리지에서 토큰을 가져오는 함수
  const getTokenFromLocalStorage = () => {
    const token = localStorage.getItem("token");
    return token;
  };

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

  // 커리어 키워드를 선택하거나 해제하는 함수입니다.
  const handleKeywordSelect = (keyword) => {
    if (selectedKeywords.includes(keyword)) {
      setSelectedKeywords((prevKeywords) =>
        prevKeywords.filter((kw) => kw !== keyword)
      );
    } else {
      setSelectedKeywords((prevKeywords) => [...prevKeywords, keyword]);
    }
  };

  // 기타 키워드를 추가하는 함수입니다.
  const addCustomKeyword = () => {
    if (customKeyword.trim() !== "") {
      setSelectedKeywords((prevKeywords) => [...prevKeywords, customKeyword]);
      setCustomKeywords((prevCustomKeywords) => [
        ...prevCustomKeywords,
        customKeyword
      ]);
      setCustomKeyword(""); // 입력 필드 초기화
    }
  };

  // 기타 키워드를 삭제하는 함수입니다.
  const removeCustomKeyword = (keywordToRemove) => {
    setSelectedKeywords((prevKeywords) =>
      prevKeywords.filter((kw) => kw !== keywordToRemove)
    );
    setCustomKeywords((prevCustomKeywords) =>
      prevCustomKeywords.filter((kw) => kw !== keywordToRemove)
    );
  };

  // "다음에 입력" 버튼을 눌렀을 때 실행되는 함수입니다.
  const handleNextInput = () => {
    const confirmNextInput = window.confirm("정말 다음에 입력하세요?");
    if (confirmNextInput) {
      // 여기서 다음 페이지로 이동하도록 설정
      window.location.href = "/"; // 이동할 페이지의 경로에 따라 수정하세요.
    }
    // 다음에 입력하지 않을 경우, 아무 동작도 하지 않음
  };

  // 부가정보를 저장하는 함수입니다.
  const handleSaveAdditionalInfo = () => {
    console.log("부가정보 저장 함수가 호출되었습니다.");

    // 모든 항목이 입력되었는지 확인합니다.
    if (
      gender &&
      age &&
      selectedArea &&
      selectedCity &&
      email &&
      phoneNumber &&
      affiliation &&
      department &&
      (selectedKeywords.length > 0 || customKeywords.length > 0)
    ) {
      console.log("부가정보가 유효합니다.");

      // 나이를 정수형으로 변환합니다.
      const intAge = parseInt(age);

      // 데이터를 백엔드로 전달할 객체를 생성합니다.
      const userData = {
        gender,
        age: intAge,
        city: selectedArea,
        addressLine: selectedCity,
        email,
        phoneNumber,
        company: affiliation,
        department,
        keywordName: [...selectedKeywords, ...customKeywords] // 선택된 키워드와 기타 키워드를 합칩니다.
      };

      console.log("보낼 사용자 토큰:", token);
      console.log("보낼 사용자 데이터:", userData);

      saveAdditionalInfo(userData);
    } else {
      console.error("모든 항목을 완료해야 합니다.");
    }
  };


  // Participant 컴포넌트의 렌더링 부분입니다.
  return (
    <Container>
      {/* 화면 제목 및 설명을 출력합니다. */}
      <Title>김커리님, Career Festival에 가입해주셔서 감사합니다.</Title>
      <Subtitle>나에게 맞는 오프라인 커리어 행사를 찾고 싶으신가요?</Subtitle>

      {/* 부가정보 입력 안내 메시지를 출력합니다. */}
      <Subtitle2>
        부가정보를 미리 입력하면 더 빠르게 행사 매칭이 가능합니다.
        <br />
        또, 행사에 함께 갈 팀원 모집 시 서로의 프로필 열람이 가능합니다.
      </Subtitle2>
      <hr />

      {/* 성별 입력 부분입니다. */}
      <p>성별</p>
      <Gender>
        <input
          type="radio"
          id="male"
          name="gender"
          value="남성"
          onChange={() => setGender("남성")}
        />
        <label htmlFor="male">남성</label>
        <input
          type="radio"
          id="female"
          name="gender"
          value="여성"
          onChange={() => setGender("여성")}
        />
        <label htmlFor="female">여성</label>
      </Gender>

      {/* 나이 입력 부분입니다. */}
      <Age>
        <label>나이</label>
        <input
          type="number"
          placeholder="나이를 입력하세요"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </Age>

      {/* 관심지역 입력 부분입니다. */}
      <p>관심지역</p>
      <InterestArea
        selectedArea={selectedArea}
        handleAreaSelect={handleAreaSelect}
        selectedCity={selectedCity}
        handleCitySelect={handleCitySelect}
        isModalOpen={isModalOpen}
        handleModalToggle={handleModalToggle}
        closeModal={closeModal}
        buttonText="선택하기"
      />

      {/* 이메일 입력 부분입니다. */}
      <EmailInput>
        <label>이메일</label>
        <input
          type="email"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </EmailInput>

      {/* 전화번호 입력 부분입니다. */}
      <TelInput>
        <label>전화번호</label>
        <input
          type="tel"
          placeholder="전화번호를 입력하세요"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </TelInput>

      {/* 소속 입력 부분입니다. */}
      <AffiliationInput
        affiliation={affiliation}
        department={department}
        setAffiliation={setAffiliation}
        setDepartment={setDepartment}
      />

      {/* 커리어 키워드 입력 부분입니다. */}
      <p>커리어 키워드</p>
      <KeyworldOptionList>
        {[
          "창업",
          "라이프",
          "예술",
          "IT/프로그래밍",
          "마케팅",
          "경제/금융",
          "인문/사회",
          "과학기술",
          "디자인",
          "관광/여행"
        ].map((keyword) => (
          <KeywordButton
            key={keyword}
            onClick={() => handleKeywordSelect(keyword)}
            selected={selectedKeywords.includes(keyword)}
          >
            {keyword}
          </KeywordButton>
        ))}

        {/* 기타 키워드 입력 필드 */}
        <input
          type="text"
          placeholder="기타 키워드 추가"
          value={customKeyword}
          onChange={(e) => setCustomKeyword(e.target.value)}
        />
        
        {/* 기타 키워드 추가 버튼 */}
        <button onClick={addCustomKeyword}>추가</button>

        {/* 추가된 기타 키워드들 */}
        {customKeywords.map((customKeyword) => (
          <KeywordButton
            key={customKeyword}
            onClick={() => handleKeywordSelect(customKeyword)}
            selected={selectedKeywords.includes(customKeyword)}
            onRemove={() => removeCustomKeyword(customKeyword)}
          >
            {customKeyword}
          </KeywordButton>
        ))}
      </KeyworldOptionList>
      <hr />

      {/* "다음에 입력"과 "부가정보 저장하기" 버튼 */}
      <TwoButton>
        <LaterSave onClick={handleNextInput}>다음에 입력</LaterSave>
        <Save
          onClick={handleSaveAdditionalInfo}
          disabled={
            !gender ||
            !age ||
            !selectedArea ||
            !selectedCity ||
            !email ||
            !phoneNumber ||
            !affiliation ||
            !department ||
            selectedKeywords.length === 0
          }
        >
          부가정보 저장하기
        </Save>
      </TwoButton>
    </Container>
  );
};

export default Participant;
