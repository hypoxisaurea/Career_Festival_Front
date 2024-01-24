// InterestArea.jsx

import React, { useEffect } from "react";
import {
  InterestAreaStyle,
  ModalContent,
  SelectWrapper,
  Modal,
  AreaWrapper,
  CityWrapper,
  AreaOptionList,
  CityOptionList,
  HorizontalLine,
  VerticalLine
} from "./InterestAreaStyle";

// 데이터 파일 불러오기
import areaData from "../../db/areaData.json";

const InterestArea = ({
  selectedArea,
  handleAreaSelect,
  selectedCity,
  handleCitySelect,
  isModalOpen,
  handleModalToggle,
  closeModal
}) => {
  // 지역 정보를 데이터 파일에서 불러오기
  const areaOptions = areaData.areas;

  // 컴포넌트가 마운트될 때 서울로 초기 선택
  useEffect(() => {
    handleAreaSelect("서울");
  }, []); 

  // 모달이 열릴 때 서울로 선택
  useEffect(() => {
    if (isModalOpen) {
      handleAreaSelect("서울");
    }
  }, [isModalOpen]);

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
                  {Object.keys(areaOptions).map((area) => (
                    <button
                      key={area}
                      onClick={() => handleAreaSelect(area)}
                      className={selectedArea === area ? "selected" : ""}
                    >
                      {area}
                    </button>
                  ))}
                </AreaOptionList>
              </AreaWrapper>

              {/* 세로선 */}
              <VerticalLine />
              {/* 시/군/구 선택 부분 */}
              {selectedArea !== "" && areaOptions[selectedArea] && (
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
