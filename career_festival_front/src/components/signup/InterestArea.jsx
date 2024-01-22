// InterestArea.jsx

import React from "react";
import {
  InterestAreaStyle,
  ModalContent,
  SelectWrapper,
  OptionList,
  Modal,
  AreaWrapper,
  CityWrapper,
  AreaOptionList,
  CityOptionList,
  HorizontalLine,
  VerticalLine
} from "./InterestAreaStyle";

const InterestArea = ({
  selectedArea,
  handleAreaSelect,
  selectedCity,
  handleCitySelect,
  isModalOpen,
  handleModalToggle,
  closeModal
}) => {
  // 지역 정보를 객체로 정의합니다.
  const areaOptions = {
    seoul: ["강남구", "종로구", "성북구", "성동구"],
    busan: ["서면역", "해운대", "북구", "사하구"]
    // 다른 지역 정보 추가 가능
  };

  return (
    <InterestAreaStyle isOpen={isModalOpen}>
      {/* 모달 열기 버튼 */}
      <button onClick={handleModalToggle}>
        {/* 선택된 지역이 있으면 해당 지역, 없으면 기본 안내 메시지 출력 */}
        {selectedCity
          ? selectedCity
          : selectedArea
          ? "지역 선택하세요 ▼"
          : "관심 지역 선택하세요"}
      </button>

      {/* 모달 창 */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen}>
          {/* X 버튼 추가 */}
          {/* <button onClick={closeModal} style={{ float: "right", cursor: "pointer" }}>
            X
          </button> */}
          <ModalContent>
            <SelectWrapper>
              {/* 시/도 선택 부분 */}
              <AreaWrapper>
                <label>시/도</label>
                <HorizontalLine></HorizontalLine>
                <AreaOptionList>
                  <button
                  onClick={() => handleAreaSelect("seoul")}
                  className={selectedArea === "seoul" ? "selected" : ""}
                >
                  서울
                </button>
                <button
                  onClick={() => handleAreaSelect("busan")}
                  className={selectedArea === "busan" ? "selected" : ""}
                >
                    부산
                  </button>
                  {/* 원하는 시/도 옵션을 추가하세요 */}
                </AreaOptionList>
              </AreaWrapper>
              {/* 세로선 */}
              <VerticalLine></VerticalLine>
              {/* 시/군/구 선택 부분 */}
              {selectedArea !== "" && (
                <CityWrapper>
                  <label>시/군/구</label>
                  <HorizontalLine></HorizontalLine>
                  <CityOptionList>
                    {areaOptions[selectedArea].map((city) => (
                      <button
                      key={city}
                      onClick={() => handleCitySelect(city)}
                      className={selectedCity === city ? "selected" : ""}
                    >
                        {city}
                      </button>
                    ))}
                  </CityOptionList>
                </CityWrapper>
              )}
            </SelectWrapper>
          </ModalContent>
        </Modal>
      )}
    </InterestAreaStyle>
  );
};

export default InterestArea;
