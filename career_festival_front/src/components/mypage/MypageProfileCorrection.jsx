import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MypageProfileImg from "../../assets/images/mypage_profile.png";
import InterestArea from "../signup/InterestArea";
import {
  KeywordOptionList,
  KeywordButton,
  Gender,
} from "../signup/ParticipantStyle";

//전체 페이지
const MypageProfileContainer = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: row;
  gap: 12vw;
  align-items: center;

  @media screen and (max-width: 600px) {
    gap: 9vw;
  }
`;
const MypageProfileImgWrapper = styled.div`
  //border: 1px solid red;
  width: 18vw;
  height: 18vw;

  img {
    width: 100%;
    height: 100%;
  }
`;
const MypageInfoWrapper = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: column;
  gap: 0.5vw;

  @media screen and (max-width: 600px) {
    gap: 2vw;
  }

  h4 {
    font-size: 1rem;
    font-weight: 700;
    margin: 1vw auto;

    @media screen and (max-width: 600px) {
      font-size: 2vw;
      margin: 0;
    }
  }
`;

const NameContainer = styled.div`
  input {
    padding: 0.7vw 0 0.7vw 0.7vw;
    border: 0.1rem solid #838383;
    border-radius: 8px;
    cursor: pointer;
    background-color: #ffffff;
    text-align: start;
    color: #757575;

    @media screen and (max-width: 600px) {
      font-size: 1.5vw;
      width: 20vw;
      border-radius: 5px;
      border: 0.05rem solid #838383;
      padding: 0.7vw 0 0.7vw 0.7vw;
    }
  }
`;

const EmailContainer = styled.div`
  input {
    padding: 0.7vw 0 0.7vw 0.7vw;
    border: 0.1rem solid #838383;
    border-radius: 8px;
    cursor: pointer;
    background-color: #ffffff;
    text-align: start;
    color: #757575;
    width: 25vw;

    @media screen and (max-width: 600px) {
      font-size: 1.5vw;
      width: 20vw;
      border-radius: 5px;
      border: 0.05rem solid #838383;
      padding: 0.7vw 0 0.7vw 0.7vw;
    }
  }
`;

const PlaceContainer = styled.div``;

const IntroduceContainer = styled.div`
  input {
    padding: 0.7vw 0 0.7vw 0.7vw;
    border: 0.1rem solid #838383;
    border-radius: 8px;
    cursor: pointer;
    background-color: #ffffff;
    text-align: start;
    color: #757575;
    width: 25vw;

    @media screen and (max-width: 600px) {
      font-size: 1.5vw;
      width: 31vw;
      border-radius: 5px;
      border: 0.05rem solid #838383;
      padding: 0.7vw 0 0.7vw 0.7vw;
    }
  }
`;

const MypageInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vw;
`;

const CareerKeywordContainer = styled.div`
  font-size: 1rem;
  font-weight: 700;

  @media screen and (max-width: 600px) {
    font-size: 2vw;
  }
`;

const DepartmentContainer = styled.div`
  font-size: 1rem;
  font-weight: 700;

  @media screen and (max-width: 600px) {
    font-size: 2vw;
  }

  input {
    padding: 0.7vw 0 0.7vw 0.7vw;
    border: 0.1rem solid #838383;
    border-radius: 8px;
    cursor: pointer;
    background-color: #ffffff;
    text-align: start;
    color: #757575;
    width: 10vw;

    @media screen and (max-width: 600px) {
      font-size: 1.5vw;
      width: 20vw;
      border-radius: 5px;
      border: 0.05rem solid #838383;
      padding: 0.7vw 0 0.7vw 0.7vw;
    }
  }
`;

const PersonalContainer = styled.div`
  font-size: 1rem;
  font-weight: 700;

  @media screen and (max-width: 600px) {
    font-size: 2vw;
  }
`;
const ContentWrapper3 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5vw;
  font-size: 1rem;
  font-weight: 400;

  @media screen and (max-width: 600px) {
    font-size: 2vw;

    display: flex;
    flex-direction: column;
    gap: 2vw;
  }
`;
const VerticalDivider = styled.div`
  border-left: 0.02vw solid #d9d9d9;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;
const Age = styled.div`
  input {
    padding: 0.7vw 0 0.7vw 0.7vw;
    border: 0.1rem solid #838383;
    border-radius: 8px;
    cursor: pointer;
    background-color: #ffffff;
    text-align: start;
    color: #757575;
    width: 10vw;

    @media screen and (max-width: 600px) {
      font-size: 1.5vw;
      width: 20vw;
      border-radius: 5px;
      border: 0.05rem solid #838383;
      padding: 0.7vw 0 0.7vw 0.7vw;
    }
  }
`;

function MypageProfileCorrection() {
  // 모달 창의 열림 여부와 선택된 지역 정보 및 추가 정보를 상태로 관리합니다.
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState("seoul");
  const [selectedCity, setSelectedCity] = useState("");
  const [email, setEmail] = useState(""); // 추가: 이메일 상태
  const [name, setName] = useState(""); // 이름 추가
  const [introduce, setIntroduce] = useState(""); // 한줄 소개 추가

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

  //모든 항목이 입력되었는지 확인


  const [affiliation, setAffiliation] = useState(""); // 추가: 소속 상태

  const [selectedKeywords, setSelectedKeywords] = useState([]); // 추가: 선택된 키워드 상태
  // 기타 키워드 입력을 위한 상태 추가
  const [customKeyword, setCustomKeyword] = useState("");
  const [customKeywords, setCustomKeywords] = useState([]);

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

  // 기타 키워드를 추가하는 함수
  const addCustomKeyword = () => {
    if (customKeyword.trim() !== "") {
      setSelectedKeywords((prevKeywords) => [...prevKeywords, customKeyword]);
      setCustomKeywords((prevCustomKeywords) => [
        ...prevCustomKeywords,
        customKeyword,
      ]);
      setCustomKeyword(""); // 입력 필드 초기화
    }
  };

  // 기타 키워드를 삭제하는 함수
  const removeCustomKeyword = (keywordToRemove) => {
    setSelectedKeywords((prevKeywords) =>
      prevKeywords.filter((kw) => kw !== keywordToRemove)
    );
    setCustomKeywords((prevCustomKeywords) =>
      prevCustomKeywords.filter((kw) => kw !== keywordToRemove)
    );
  };


  return (
    <div>
      <MypageProfileContainer>
        <MypageProfileImgWrapper>
          <img src={MypageProfileImg} alt="mypageProfile" />
        </MypageProfileImgWrapper>
        <MypageInfoWrapper>
          <NameContainer>
            <h4>이름</h4>
            <input
              type="text"
              placeholder="예시) 김커리"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </NameContainer>

          <EmailContainer>
            <h4>이메일</h4>
            <input
              type="email"
              placeholder="예시) example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </EmailContainer>

          <PlaceContainer>
            <h4>관심지역</h4>
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
          </PlaceContainer>

          <IntroduceContainer>
            <h4>한줄소개</h4>
            <input
              type="text"
              placeholder="본인을 간략하게 표한할 한 줄 소개를 작성해보세요!"
              value={introduce}
              onChange={(e) => setIntroduce(e.target.value)}
            />
          </IntroduceContainer>
        </MypageInfoWrapper>
        {/*<ShowProfile>보여지는 프로필 설정하기</ShowProfile>*/}
      </MypageProfileContainer>
      <MypageInfoContainer>
        <CareerKeywordContainer>
          <h4>내 커리어 키워드</h4>
          <KeywordOptionList>
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
              "관광/여행",
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
          </KeywordOptionList>
        </CareerKeywordContainer>

        <DepartmentContainer>
          <h4>내가 속한 학교 혹은 단체 및 회사</h4>
          <input
            type="text"
            placeholder="소속을 입력하세요"
            value={affiliation}
            onChange={(e) => setAffiliation(e.target.value)}
          />
        </DepartmentContainer>

        <PersonalContainer>
          <h4>나이 및 성별</h4>
          <ContentWrapper3>
            <Age>
              <input type="number" placeholder="숫자만 입력해주세요" />
            </Age>
            <VerticalDivider />
            <Gender>
              <input type="radio" id="male" name="gender" value="male" />
              <label htmlFor="male">남성</label>
              <input type="radio" id="female" name="gender" value="female" />
              <label htmlFor="female">여성</label>
            </Gender>
          </ContentWrapper3>
        </PersonalContainer>
      </MypageInfoContainer>{" "}
    </div>
  );
}

export default MypageProfileCorrection;
