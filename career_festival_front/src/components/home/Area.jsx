// InterestArea.jsx를 퍼온 area 인데 얘는 회원가입아님

import React, { useEffect } from "react";
import styled from "styled-components";
// 데이터 파일 불러오기
import areaData from "../../db/areaData.json";

// 스타일드 컴포넌트를 사용하여 스타일 정의
const InterestAreaStyle = styled.div`
  // 제일 큰 버튼 스타일 정의
  button {
    text-align: start;
    border-radius: 0.5vw;
    cursor: pointer;
    color: #838383;
    background-color: #ffffff;
    font-size: 1vw;
    width: 10vw;
    border: 0.05rem solid #838383;
    padding: 0.7vw 0 0.7vw 0.7vw;
  }
`;

// 모달 스타일 정의
const Modal = styled.div`
  position: fixed; // 고정 위치 설정
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); // 배경을 흐리게 하는 rgba 값
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1; // 모달의 우선순위를 1로 설정

  // 내용 스타일 정의
  > div {
    width: 300px; // 모달 가로 크기 설정
    height: 400px;
    background-color: white; // 배경색 설정
    padding: 10px; // 안쪽 여백 설정
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // 그림자 효과 추가
  }
`;

// 모달 내용 스타일 정의
const ModalContent = styled.div`
  width:100%;
  height:100%;
  margin-top: 5px; // 하단 여백 추가
  margin-bottom: 10px; // 하단 여백 추가
  text-align: center; // 가운데 정렬을 위한 스타일 추가
`;

// 선택 옵션을 감싸는 스타일 정의
const SelectWrapper = styled.div`
  width:100%;// 부모 컨테이너에 대해 100%의 너비를 가지도록 설정
  height:100%;
  display: flex; // 플렉스 컨테이너로 설정
  // background-color:#ffff00;
  justify-content: space-around; // 가로 방향으로 간격을 벌리도록 설정
`;

// 시/도 옵션 목록 스타일 정의
const AreaOptionList = styled.div`
display: grid; // 그리드 레이아웃으로 변경
grid-template-columns: repeat(2, 1fr); // 2개의 열로 자동으로 나눔
gap: 5px; // 그리드 아이템 간의 간격 설정
`;

// 시/군/구 옵션 목록 스타일 정의
const CityOptionList = styled.div`
  display: grid; // 그리드 레이아웃으로 변경
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); // 자동으로 열 생성 및 최소 너비 설정
  gap: 5px; // 그리드 아이템 간의 간격 설정
  overflow-y: auto; /* 세로 스크롤이 필요한 경우에만 스크롤 표시 */
  max-height: 350px; /* 스크롤이 나타날 최대 높이 설정 */
  overflow-x: hidden; /* 가로 스크롤 숨김 */
`;

// 시/도 선택 부분 스타일 정의
const AreaWrapper = styled.div`
  // 시/도 선택 부분의 공통 스타일
  label {
    display: inline-block; // inline에서 inline-block으로 변경
    font-size: 16px;
    margin-bottom: 5px;
    width: 100%; // 라벨이 100%의 너비를 가지도록 설정
  }

  button {
    width: 100%; // 버튼의 가로 크기를 100%로 설정
    margin: 2px;
    padding: 6px;
    font-size: 14px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #ffffff;

    &:hover {
      color: #582fff;
      background-color: #e3dcff; // 호버 효과일 때의 배경색 추가
    }

    // 선택된 상태일 때의 스타일
    &.selected {
      background-color: #e3dcff;
      color: #582fff;
    }
  }
`;

// 시/군/구 선택 부분 스타일 정의
const CityWrapper = styled.div`
  // 시/군/구 선택 부분의 공통 스타일
  label {
    display: inline-block;
    font-size: 16px;
    margin-bottom: 5px;
    width: 100%;
  }

   // CityOptionList에 스크롤 적용
  ${CityOptionList} {
    overflow-y: auto;
    max-height: 350px;
  }

  button {
    width: 100%;
    margin: 2px;
    padding: 10px;
    font-size: 14px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #ffffff;

    &:hover {
      color: #582fff;
      background-color: #e3dcff;
    }

    // 선택된 상태일 때의 스타일
    &.selected {
      background-color: #e3dcff;
      color: #582fff;
    }
  }
`;


// 추가된 스타일 정의: 가로선
const HorizontalLine = styled.div`
  border-bottom: 2px solid #D9D9D9; // 가로선 스타일 정의
  margin: 10px 0; // 가로선 위아래 여백 설정
`;

// 추가된 스타일 정의: 세로선
const VerticalLine = styled.div`
  border-right: 2px solid #D9D9D9; // 세로선 스타일 정의
  height: 100; // 세로선의 높이를 100%로 설정
  margin-right: 1px; // 세로선 오른쪽 여백 설정
  margin-left: 1px; // 세로선 왼쪽 여백 설정
`;


const Area = ({
  selectedArea,
  handleAreaSelect,
  selectedCity,
  handleCitySelect,
  isModalOpen,
  handleModalToggle,
  closeModal,
  buttonText,
}) => {
  // 지역 정보를 데이터 파일에서 불러오기
  const areaOptions = areaData.areas;

  // 모달 외부 클릭 이벤트 핸들러
  const handleOutsideClick = (e) => {
    // 모달이 열려있는 상태에서 모달 영역 외부를 클릭한 경우에만 모달을 닫음
    if (isModalOpen && e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

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

  // 클릭 이벤트 리스너 등록
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isModalOpen, closeModal]);

  return (
    <InterestAreaStyle isOpen={isModalOpen}>
      {/* 모달 열기 버튼 */}
      <button onClick={handleModalToggle}>
        {/* 선택된 지역이 있으면 해당 지역, 없으면 기본 안내 메시지 출력 */}
        {selectedCity
          ? selectedCity
          : selectedArea
          ? `${buttonText} ${isModalOpen ? "▲" : "▼"}`
          : `관심 ${buttonText} 선택하세요`}
      </button>

      {/* 모달 창 */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} className="modal-overlay">
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

export default Area;
