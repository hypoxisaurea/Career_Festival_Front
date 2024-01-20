import React, { useState } from "react";
import styled from "styled-components";
import checkedImage from "../../assets/images/checked_image.png";
import uncheckedImage from "../../assets/images/unchecked_image.png";

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  cursor: pointer;
  color: black; // 글씨체를 검은색으로 변경
  font-size: 14px; // 폰트 크기를 조절
`;

const StyledCheckbox = styled.input`
  display: none;
`;

const CheckImage = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 8px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: white;
  transition: border-color 0.3s, background-color 0.3s;
`;


const Filter = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleCheckboxChange = (category) => {
    // 현재 선택된 카테고리를 확인하고 토글
    if (selectedFilters.includes(category)) {
      setSelectedFilters(
        selectedFilters.filter((filter) => filter !== category)
      );
    } else {
      setSelectedFilters([...selectedFilters, category]);
    }
  };

  return (
    <div>
      <form>
        {[
          "창업",
          "IT/프로그래밍",
          "경제/금융",
          "경영",
          "인문/사회",
          "예술",
          "마켓팅",
          "과학기술",
          "디자인/영상",
          "의료/의학",
          "기획",
          "관광/여행",
          "기타",
        ].map((category) => (
          <div key={category}>
            <CheckboxLabel>
              <StyledCheckbox
                type="checkbox"
                value={category}
                checked={selectedFilters.includes(category)}
                onChange={() => handleCheckboxChange(category)}
              />
              <CheckImage
                src={
                  selectedFilters.includes(category)
                    ? checkedImage
                    : uncheckedImage
                }
                alt={category}
                checked={selectedFilters.includes(category)}
              />
              {category}
            </CheckboxLabel>
          </div>
        ))}
      </form>

      <div>
        <h4>선택된 카테고리</h4>
        <ul>
          {selectedFilters.map((filter) => (
            <li key={filter}>{filter}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;