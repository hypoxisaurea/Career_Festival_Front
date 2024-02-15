import React, { useState, useEffect } from "react";
import InterestArea from "./InterestArea";
import {
  BrowserRouter as Router,
useNavigate
} from "react-router-dom";
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
import axios from 'axios'; // Axios를 임포트합니다.

const Participant = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState("seoul");
  const [selectedCity, setSelectedCity] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [department, setDepartment] = useState("");
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [customKeyword, setCustomKeyword] = useState("");
  const [customKeywords, setCustomKeywords] = useState([]);
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    handleAreaSelect("seoul");
    const tokenFromStorage = getTokenFromLocalStorage();
    if (tokenFromStorage) {
      setToken(tokenFromStorage);
      console.log("로컬 스토리지에서 토큰을 가져왔습니다:", tokenFromStorage);
    } else {
      // 토큰이 없는 경우 다른 작업 수행
    }
  }, []);

  const navigate = useNavigate();

  const getTokenFromLocalStorage = () => {
    const token = localStorage.getItem("token");
    return token;
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
    console.log("부가정보 저장 함수가 호출되었습니다.");
  
    if (
      selectedArea &&
      selectedCity &&
      email &&
      phoneNumber &&
      affiliation &&
      department &&
      selectedKeywords.length > 0 &&
      gender &&
      age
    ) {
      console.log("부가정보가 유효합니다.");
  
      // age를 정수형으로 변환
      const intAge = parseInt(age);

      const userData = {
        gender,
        age: intAge, // 정수형으로 변환된 age 사용
        city: selectedArea,
        addressLine: selectedCity,
        email,
        phoneNumber,
        company: affiliation,
        department,
        keywordName: selectedKeywords,
      };
  
      console.log("보낼 사용자 토큰:", token);
      console.log("보낼 사용자 데이터:", userData);
  
      axios.patch("http://localhost:9000/participant", userData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      })
        .then((response) => {
          console.log("부가정보 저장 완료:", response.data);
          navigate("/");
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

      <Age>
        <label>나이</label>
        <input
          type="number"
          placeholder="나이를 입력하세요"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </Age>

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

      <EmailInput>
        <label>이메일</label>
        <input
          type="email"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </EmailInput>

      <TelInput>
        <label>전화번호</label>
        <input
          type="tel"
          placeholder="전화번호를 입력하세요"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </TelInput>

      <AffiliationInput>
        <p>소속(회사/기관/학교명)</p>
        <input
          type="text"
          placeholder="소속을 입력하세요"
          value={affiliation}
          onChange={(e) => setAffiliation(e.target.value)}
        />
        <input
          type="text"
          placeholder="부서를 입력하세요"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
      </AffiliationInput>

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

        <input
          type="text"
          placeholder="기타 키워드 추가"
          value={customKeyword}
          onChange={(e) => setCustomKeyword(e.target.value)}
        />

        <button onClick={addCustomKeyword}>추가</button>

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