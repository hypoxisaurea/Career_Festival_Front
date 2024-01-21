import React, { useState } from "react";
import styled from "styled-components";

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  cursor: pointer;
  color: black;
  font-size: 14px;
`;

const StyledCheckbox = styled.input`
  margin-right: 8px;
`;

const CheckboxContainer = styled.div`
  form {
    margin-top: 20px; /* form에 마진 탑 추가 */
  }
`;

const Checkbox = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(
        selectedOptions.filter((selected) => selected !== option)
      );
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <CheckboxContainer>
      <form>
        {["강연/세미나", "학술대회", "전시/박람회", "기타"].map((option) => (
          <div key={option}>
            <CheckboxLabel>
              <StyledCheckbox
                type="checkbox"
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              {option}
            </CheckboxLabel>
          </div>
        ))}
      </form>

      <div>
        <h4>선택된 이벤트 유형</h4>
        <ul>
          {selectedOptions.map((selected) => (
            <li key={selected}>{selected}</li>
          ))}
        </ul>
      </div>
    </CheckboxContainer>
  );
};

export default Checkbox;
