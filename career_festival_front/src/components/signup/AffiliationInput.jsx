import React, { useState } from "react";

const AffiliationInput = ({
  affiliation,
  department,
  setAffiliation,
  setDepartment
}) => {
  // 모달의 오픈 여부를 관리하는 상태 변수
  const [isModalOpen, setModalOpen] = useState(false);
  // 선택된 아이템을 관리하는 상태 변수
  const [selectedItem, setSelectedItem] = useState("");

  // 선택 가능한 옵션들
  const options = ["미성년자", "학부생", "졸업생", "대학원생", "무직", "기타"];

  // 모달 오픈/클로즈 핸들러 함수
  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  // 아이템 클릭 핸들러 함수
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setAffiliation(item);
    setModalOpen(false);
  };

  // 컨테이너 스타일
  const containerStyle = {
    width: "20vw", // 컨테이너 너비 설정
    display: "flex", // 플렉스 레이아웃 적용
    alignItems: "center" // 수직 가운데 정렬
  };
  
  // 드롭다운 버튼 스타일
  const dropdownToggleStyle = {
    width:"100%", // 너비 100% 설정
    backgroundColor: "#ffffff", // 배경색
    color: "black", // 텍스트 색상
    padding: "10px 20px", // 안쪽 여백 설정
    fontSize: "14px", // 폰트 크기 설정
    border: "1px solid #ccc", // 테두리 설정
    borderRadius: "5px", // 테두리 모서리 둥글기 설정
    cursor: "pointer" // 커서 스타일 설정
  };

  // 모달 스타일
  const modalStyle = {
    width:"20%", // 너비 설정
    display: isModalOpen ? "block" : "none", // 모달 오픈 여부에 따라 표시 여부 설정
    position: "absolute", // 절대 위치 설정
    backgroundColor: "#ffffff", // 배경색
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)", // 그림자 설정
    zIndex: 1, // z-index 설정
    marginTop: "5px" // 위쪽 여백 설정
  };

  // 메뉴 아이템 스타일
  const menuItemStyle = {
    width: "30%", // 너비 설정
    padding: "2%", // 안쪽 여백 설정
    cursor: "pointer", // 커서 스타일 설정
    borderBottom: "1px solid #ccc", // 하단 테두리 설정
    transition: "color 0.3s, background-color 0.3s" // 글자색과 배경색 변경에 대한 트랜지션 효과 설정
  };

  // 입력 필드 스타일
  const inputStyle = {
    ...dropdownToggleStyle, // 드롭다운 버튼 스타일을 상속
    marginLeft: "1vw", // 왼쪽 여백 설정
    width: "6vw" // 너비 설정
  };

  // 호버된 아이템을 관리하는 상태 변수
  const [hoveredItem, setHoveredItem] = useState("");

  return (
    <>
      {/* 제목 */}
      <p>소속(회사/기관/학교명)</p>
      {/* 컨테이너 */}
      <div style={containerStyle}>
        {/* 드롭다운 메뉴 */}
        <div className="dropdown">
          {/* 드롭다운 토글 버튼 */}
          <button style={dropdownToggleStyle} onClick={handleModalToggle}>
            {selectedItem || "소속"}
          </button>
          {/* 모달 */}
          <div style={modalStyle}>
            {/* 옵션 목록 매핑 */}
            {options.map((item, index) => (
              <div
                key={index}
                style={{
                  ...menuItemStyle,
                  color: hoveredItem === item ? "#582fff" : "black", // 호버 시 글자색 변경
                  backgroundColor: hoveredItem === item ? "#e3dcff" : "#ffffff" // 호버 시 배경색 변경
                }}
                onClick={() => handleItemClick(item)}
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem("")}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        {/* 입력 필드 */}
        <input
          type="text"
          placeholder="부서/학과"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          style={inputStyle}
        />
      </div>
    </>
  );
};

export default AffiliationInput;
