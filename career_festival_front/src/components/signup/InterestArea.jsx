import React, { useEffect } from "react";
import areaData from "../../db/areaData.json";
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
  VerticalLine,
} from "./InterestAreaStyle";

const InterestArea = ({
  selectedArea,
  handleAreaSelect,
  selectedCity,
  handleCitySelect,
  isModalOpen,
  handleModalToggle,
  closeModal,
  buttonText,
}) => {
  const areaOptions = areaData.areas;

  const handleOutsideClick = (e) => {
    if (isModalOpen && e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  useEffect(() => {
    handleAreaSelect("서울");
  }, [handleAreaSelect]);

  useEffect(() => {
    if (isModalOpen) {
      handleAreaSelect("서울");
    }
  }, [isModalOpen, handleAreaSelect]);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isModalOpen, closeModal, handleOutsideClick]);

  return (
    <InterestAreaStyle isOpen={isModalOpen}>
      <button onClick={handleModalToggle}>
        {selectedCity
          ? selectedCity
          : selectedArea
          ? `${buttonText} ${isModalOpen ? "▲" : "▼"}`
          : `관심 ${buttonText} 선택하세요`}
      </button>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} className="modal-overlay">
          <ModalContent>
            <SelectWrapper>
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

              <VerticalLine />

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
