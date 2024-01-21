// InterestArea.jsx

import React from "react";
import {
  InterestAreaStyle,
  ModalContent,
  SelectWrapper,
  OptionList,
  Modal,
} from "./InterestAreaStyle";

const InterestArea = ({ selectedArea, handleAreaSelect, selectedCity, handleCitySelect, areaOptions, isModalOpen, handleModalToggle, closeModal }) => {
  return (
<InterestAreaStyle isOpen={isModalOpen}>
      {/* 모달 열기 버튼 */}
      <button onClick={handleModalToggle}>
        {/* 선택된 지역이 있으면 해당 지역, 없으면 기본 안내 메시지 출력 */}
        {selectedCity
          ? selectedCity
          : selectedArea
          ? "시/군/구 선택"
          : "관심 지역 선택하세요"}
      </button>

      {/* 모달 창 */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen}>
          {/* X 버튼 추가 */}
          <button onClick={closeModal} style={{ float: "right", cursor: "pointer" }}>
            X
          </button>
          <ModalContent> {/* 수정된 부분 */}
            <SelectWrapper> {/* 수정된 부분 */}
              {/* 시/도 선택 부분 */}
              <div>
                <label>시/도</label>
                <OptionList> {/* 수정된 부분 */}
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
                  <OptionList> {/* 수정된 부분 */}
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
            </SelectWrapper> {/* 수정된 부분 */}
          </ModalContent> {/* 수정된 부분 */}
        </Modal>
      )}
    </InterestAreaStyle>
  );
};

export default InterestArea;
