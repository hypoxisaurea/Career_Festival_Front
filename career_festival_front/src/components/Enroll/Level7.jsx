import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import InterestArea from "../signup/InterestArea"; // 관심지역 컴포넌트 import
import imageIcon from "../../assets/images/frame_gallery_image.png";
import {
  NextButton,
  PurpleTitle,
  Title,
  Level7Container,
  SubTitle,
  HL, //HorizenLine
  KeyworldOptionList,
  KeywordButton,
  InputFestivalName, // 추가: InputFestivalName 컴포넌트 import
  InputIntroduce,
  FestivalInformation, // 추가: 행사 정보 입력 컴포넌트 import
  FestivalInformationInput, // 추가: 행사 정보 입력 컴포넌트 import
  AddOther,
  AddOtherButton,
  AddURL,
  FestivalFee,
  ManagerName,
  ManagerEmail,
  AttachmentButton,
  ImageIcon,
  ImageAddButton
} from "./Level7Style"; // Level7Style 파일에서 스타일 요소들을 불러옴

const Level7 = () => {
  // 상태 정의
  // 키워드
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [customKeyword, setCustomKeyword] = useState("");
  const [customKeywords, setCustomKeywords] = useState([]); // 초기값을 빈 배열로 변경
  // 행사명
  const [eventName, setEventName] = useState("");
  // 이미지 추가
  const [selectedImage, setSelectedImage] = useState(null); // 선택된 이미지 파일 상태 추가
  const [externalSiteUrl, setExternalSiteUrl] = useState(""); // 외부 사이트 URL 상태 추가
  // 관심지역
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState("seoul");
  const [selectedCity, setSelectedCity] = useState("");
  // 행사 정보
  const [eventInfo, setEventInfo] = useState(""); // 행사 정보 상태 추가
  // 행사 참가비, 담당자 정보 상태 정의
  const [entryFee, setEntryFee] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  // 함수 정의
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

  const removeCustomKeyword = (keywordToRemove) => {
    setSelectedKeywords((prevKeywords) =>
      prevKeywords.filter((kw) => kw !== keywordToRemove)
    );
    setCustomKeywords((prevCustomKeywords) =>
      prevCustomKeywords.filter((kw) => kw !== keywordToRemove)
    );
  };
  // 파일 업로드 input에 대한 참조 생성
  const fileInputRef = useRef(null);

  // AttachmentButton 클릭 시 파일 업로드 input 클릭
  const handleAttachmentButtonClick = () => {
    fileInputRef.current.click();
  };

  // 파일 선택 시 실행될 함수
  const handleFileUpload = (e) => {
    const file = e.target.files[0]; // 선택된 파일 가져오기
    setSelectedImage(file); // 선택된 파일 상태 업데이트
  };

  // 관심지역
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

  return (
    <Level7Container>
      <PurpleTitle>기본설정</PurpleTitle>
      <SubTitle>행사에 대한 기본설정이에요.</SubTitle>
      <HL />
      <Title>모집기간</Title>

      <PurpleTitle>행사 상세 정보</PurpleTitle>
      <SubTitle>행사에 대해 자세히 설명해주세요!</SubTitle>
      <HL />

      {/* 추가: 커리어 키워드 입력 부분입니다. */}
      <p>행사분야</p>
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
        <AddOther
          type="text"
          placeholder="기타 키워드 추가"
          value={customKeyword}
          onChange={(e) => setCustomKeyword(e.target.value)}
        />

        {/* 기타 키워드 추가 버튼 */}
        <AddOtherButton onClick={addCustomKeyword}>추가</AddOtherButton>

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

      <Title>행사명</Title>
      {/* 행사명 입력 부분을 컴포넌트로 교체 */}
      <InputFestivalName
        placeholder="행사명을 입력하세요"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <Title>간단 소개</Title>
      <InputIntroduce
        placeholder="간단소개 입력 (최대 30자)"
        value={eventName} // 이 부분은 입력된 간단 소개를 표시할 값으로 변경 필요
        onChange={(e) => setEventName(e.target.value)}
      />

      <Title>관심지역</Title>
      {/* 관심지역 컴포넌트 */}
      <InterestArea
        selectedArea={selectedArea}
        handleAreaSelect={handleAreaSelect}
        selectedCity={selectedCity}
        handleCitySelect={handleCitySelect}
        isModalOpen={isModalOpen}
        handleModalToggle={handleModalToggle}
        closeModal={closeModal}
        buttonText="관심지역 선택"
      />

      <Title>행사 대표이미지</Title>
      {/* 파일 업로드를 위한 input 요소 */}
      {/* 파일 업로드를 위한 input 요소 */}
      {/* 파일 업로드를 위한 input 요소 */}
      {/* 파일 업로드를 위한 input 요소 */}
      {/* 파일 업로드를 위한 input 요소 */}
      {/* 파일 업로드를 위한 input 요소 */}
      {/* 파일 업로드를 위한 input 요소 */}
      {/* 파일 업로드를 위한 input 요소 */}


      {/* 파일 미리보기를 위한 img 요소 */}
      {selectedImage && (
        <img src={URL.createObjectURL(selectedImage)} alt="행사 대표이미지" />
      )}
      <Title>행사 일정</Title>

      <Title>행사 신청 외부사이트</Title>
      <AddURL
        type="url"
        placeholder="URL을 입력하세요"
        value={externalSiteUrl}
        onChange={(e) => setExternalSiteUrl(e.target.value)}
      />
      <Title>행사 정보</Title>
      {/* 행사 정보 입력 부분 */}
      <FestivalInformation>
        <FestivalInformationInput
          placeholder="행사에 대한 정보를 최대 5000자까지 입력하세요."
          value={eventInfo}
          onChange={(e) => setEventInfo(e.target.value)}
        />
        {/* 파일 업로드 input */}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          style={{ display: "none" }} // 화면에 보이지 않도록 스타일 지정
          ref={fileInputRef} // ref 연결
        />

        {/* AttachmentButton에 onClick 이벤트 핸들러 추가 */}
        <AttachmentButton >
          <ImageAddButton onClick={handleAttachmentButtonClick}>
            <ImageIcon src={imageIcon} alt="이미지 첨부 아이콘" />
            <span>이미지첨부</span>
          </ImageAddButton>
          <p>{eventInfo.length}/5000 글자 입력됨</p>
        </AttachmentButton>
      </FestivalInformation>
      <Title>행사 참가비</Title>
      <FestivalFee
        type="text"
        placeholder="행사 참가비를 입력하세요"
        value={entryFee}
        onChange={(e) => setEntryFee(e.target.value)}
      />
      <h2>담당자 정보</h2>
      <Title>이름</Title>
      <ManagerName
        type="text"
        placeholder="담당자 이름을 입력하세요"
        value={contactName}
        onChange={(e) => setContactName(e.target.value)}
      />
      <Title>이메일</Title>
      <ManagerEmail
        type="email"
        placeholder="담당자 이메일을 입력하세요"
        value={contactEmail}
        onChange={(e) => setContactEmail(e.target.value)}
      />

      <Link to="/">
        <NextButton>행사개설</NextButton>
      </Link>
    </Level7Container>
  );
};

export default Level7;
