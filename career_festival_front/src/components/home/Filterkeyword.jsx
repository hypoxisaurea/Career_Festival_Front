import React from "react";
import styled from "styled-components";

const KeywordContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5vw;
`;

const KeywordItem = styled.div`
  display: flex;
  align-items: center;
  background-color: #582fff;
  color: #ffffff;
  border-radius: 8px;
  padding: 0.5vw;
  margin-top: 0.5vw;
  margin-right: 0.5vw;
`;

const RemoveButton = styled.button`
  background-color: #582fff;
  color: #ffffff;
  border: none;
  border-radius: 50%;
  padding: 5px;
  margin-left: 5px;
  cursor: pointer;
`;

const FilterKeyword = ({ selectedFilters, removeFilter }) => {
  return (
    <KeywordContainer>
      {selectedFilters.map((filter, index) => (
        <KeywordItem key={index}>
          <span>{filter}</span>
          <RemoveButton
            style={{ fontSize: "1rem" }}
            onClick={() => removeFilter(filter)}
          >
            X
          </RemoveButton>
        </KeywordItem>
      ))}
    </KeywordContainer>
  );
};

export default FilterKeyword;
