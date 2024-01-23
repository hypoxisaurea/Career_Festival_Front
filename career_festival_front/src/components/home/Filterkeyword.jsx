import React from "react";
import styled from "styled-components";

const KeywordContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const KeywordItem = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f7ff;
  color: #582fff;
  border-radius: 20px;
  padding: 5px;
  margin-right: 5px;
`;

const FilterKeyword = ({ selectedFilters, removeFilter }) => {
  return (
    <KeywordContainer>
      {selectedFilters.map((filter, index) => (
        <KeywordItem key={index}>
          <span>{filter}</span>
          <button onClick={() => removeFilter(filter)}>X</button>
        </KeywordItem>
      ))}
    </KeywordContainer>
  );
};

export default FilterKeyword;
