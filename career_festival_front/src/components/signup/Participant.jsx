import React, { useState, useEffect } from "react";
import InterestArea from "./InterestArea";
import {
  Container,
  Title,
  Subtitle,
  Subtitle2,
  Gender,
  Age,
  EmailInput,
  TelInput,
  AffiliationInput,
  KeyworldOptionList,
  KeywordButton,
  TwoButton,
  LaterSave,
  Save
} from "./ParticipantStyle";

const Participant = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState("seoul");
  const [selectedCity, setSelectedCity] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [department, setDepartment] = useState(""); // 부서 상태 추가
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [customKeyword, setCustomKeyword] = useState("");
  const [customKeywords, setCustomKeywords] = useState([]);
  const [gender, setGender] = useState(""); // 성별 상태 추가
  const [age, setAge] = useState(""); // 나이 상태 추가
  const [token, setToken] = useState(""); // 토큰 상태 추가

  useEffect(() => {
    handleAreaSelect("seoul");
    // 토큰을 받아오는 함수를 호출하고, 받아온 토큰을 상태에 저장합니다.
    fetchToken();
  }, []);

  const fetchToken = () => {
    // 토큰을 받아오는 비동기 요청을 보내고, 받아온 토큰을 상태에 저장합니다.
    // 예를 들어, 로그인 후 토큰을 받아오는 함수를 호출하고 그 결과를 상태에 저장합니다.
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IjEyM0BuYXZlci5jb20iLCJyb2xlIjoiUk9MRV9QQVJUSUNJUEFOVCIsImlhdCI6MTcwNzkzMTA2MiwiZXhwIjoxNzA3OTMxNjYyfQ.T-KdkGf5r0JfuEPSZoboElLjY9nhy6BR5jNp5GIFU-E"; // 여기에 토큰 값을 받아오는 비동기 요청을 작성합니다.
    setToken(token);
  };

  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleAreaSelect = (area) => {
    setSelectedArea(area);
    setSelectedCity("");
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setModalOpen(false);
  };

  const handleKeywordSelect = (keyword) => {
    if (selectedKeywords.includes(keyword)) {
      setSelectedKeywords((prevKeywords) =>
        prevKeywords.filter((kw) => kw !== keyword)
      );
    } else {
      setSelectedKeywords((prevKeywords) => [...prevKeywords, keyword]);
    }
  };

  const addCustomKeyword = () => {
    if (customKeyword.trim() !== "") {
      setSelectedKeywords((prevKeywords) => [...prevKeywords, customKeyword]);
      setCustomKeywords((prevCustomKeywords) => [
        ...prevCustomKeywords,
        customKeyword
      ]);
      setCustomKeyword("");
    }
  };

  const removeCustomKeyword = (keywordToRemove) => {
    setSelectedKeywords((prevKeywords) =>
      prevKeywords.filter((kw) => kw !== keywordToRemove)
    );
    setCustomKeywords((prevCustomKeywords) =>
      prevCustomKeywords.filter((kw) => kw !== keywordToRemove)
    );
  };

  const handleNextInput = () => {
    const confirmNextInput = window.confirm("정말 다음에 입력하세요?");
    if (confirmNextInput) {
      window.location.href = "/";
    }
  };

  const saveAdditionalInfo = () => {
    if (
      selectedArea &&
      selectedCity &&
      email &&
      phoneNumber &&
      affiliation &&
      selectedKeywords.length > 0 &&
      gender &&
      age // 성별과 나이 모두 입력되었는지 확인
    ) {
      const userData = {
        gender,
        age,
        city:selectedArea,              // 시도
        addressLine:selectedCity,       // 시구군
        email,
        phoneNumber,
        company:affiliation,            // 소속
        department,                     // 부서/학과
        keywordName:selectedKeywords,
      };

      fetch("http://localhost:9000/signup/participant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` // 헤더에 토큰 추가
        },
        body: JSON.stringify(userData)
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("부가정보 저장 완료:", data);
          // 원하는 작업 수행
        })
        .catch((error) => {
          console.error("부가정보 저장 실패:", error.message);
        });
    } else {
      console.error("모든 항목을 완료해야 합니다.");
    }
  };

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

      <p>성별</p>
      <Gender>
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          onChange={() => setGender("male")} // 선택 시 gender 상태 업데이트
        />
        <label htmlFor="male">남성</label>
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          onChange={() => setGender("female")} // 선택 시 gender 상태 업데이트
        />
        <label htmlFor="female">여성</label>
      </Gender>

      <Age>
        <label>나이</label>
        <input
          type="number"
          placeholder="나이를 입력하세요"
          value={age}
          onChange={(e) => setAge(e.target.value)} // 입력 시 age 상태 업데이트
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
      <AffiliationInput>
        <p>소속(회사/기관/학교명)</p>
        <input
          type="text"
          placeholder="소속을 입력하세요"
          value={affiliation}
          onChange={(e) => setAffiliation(e.target.value)}
        />
        {/* 부서 입력 필드 */}
        <input
          type="text"
          placeholder="부서를 입력하세요"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
      </AffiliationInput>

      {/* 추가: 커리어 키워드 입력 부분입니다. */}
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

        {/* 기타 키워드 목록 */}
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
      <TwoButton>
        <LaterSave onClick={handleNextInput}>다음에 입력</LaterSave>
        {/* 부가정보 저장하기 버튼 */}
        <Save
          onClick={saveAdditionalInfo}
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

