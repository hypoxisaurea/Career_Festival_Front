import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 20vw;
  display: flex;
  align-items: center;
`;

const DropdownButton = styled.button`
  text-align: start;
  width: 80px;
  background-color: #ffffff;
  color: #838383;
  padding: 10px;
  font-size: 13px;
  border: 1px solid #838383;
  border-radius: 5px;
  cursor: pointer;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #ffffff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  margin-top: 5px;
  width: 5%; // 모달 창의 폭을 조정합니다.
  display: ${({ isModalOpen }) =>
    isModalOpen ? "flex" : "none"}; // 모달이 열리고 닫히도록 수정
`;

const MenuItem = styled.div`
  width: 100px;
  padding: 10%;
  cursor: pointer;
  border-bottom: 1px solid #838383;
  font-size: 12px;
  transition: color 0.3s, background-color 0.3s;
  color: ${({ hovered }) => (hovered ? "#582fff" : "#838383")};
  background-color: ${({ hovered }) => (hovered ? "#e3dcff" : "#ffffff")};
`;

const InputField = styled.input`
  padding: 10px;
  font-size: 13px;
  border: 1px solid #838383;
  border-radius: 5px;
  width: 200px;
  margin-left: 5px;
  ${DropdownButton} {
    margin-right: 1vw;
  }
`;

const AffiliationInput = ({
  affiliation,
  department,
  setAffiliation,
  setDepartment,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const options = ["미성년자", "학부생", "졸업생", "대학원생", "무직", "기타"];
  const [hoveredItem, setHoveredItem] = useState("");

  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setAffiliation(item);
    setModalOpen(false); // 모달창 닫기
  };

  return (
    <>
      <label
        style={{
          fontWeight: "bold",
          fontSize: "1vw",
        }}
      >
        소속(회사/기관/학교명)
      </label>
      <Container>
        <div className="dropdown">
          <DropdownButton onClick={handleModalToggle}>
            {selectedItem || "소속"}
          </DropdownButton>
          <Modal isModalOpen={isModalOpen}>
            {options.map((item, index) => (
              <MenuItem
                key={index}
                hovered={hoveredItem === item}
                onClick={() => handleItemClick(item)}
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem("")}
                style={{ color: selectedItem === item ? "#582fff" : "#838383" }}
              >
                {item}
              </MenuItem>
            ))}
          </Modal>
        </div>
        <InputField
          type="text"
          placeholder="부서/학과"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
      </Container>
    </>
  );
};

export default AffiliationInput;
