// OrganizerStyle.js

import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #e3dcff;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
`;

const Subtitle2 = styled.p`
  font-size: 14px;
  margin-bottom: 40px;
  color: #838383;
`;

const EmailInput = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    font-size: 16px;
    margin-bottom: 5px;
  }

  input {
    width: 180px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid;
    border-radius: 5px;
  }
`;

const TelInput = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    font-size: 16px;
    margin-bottom: 5px;
  }

  input {
    width: 180px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid;
    border-radius: 5px;
  }
`;

const AffiliationInput = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    font-size: 16px;
    margin-bottom: 5px;
  }

  input {
    width: 180px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid;
    border-radius: 5px;
  }
`;

const KeyworldOptionList = styled.div`
display: flex;
  flex-wrap: wrap;
  gap: 10px;

  button {
    border: none;
    padding: 8px;
    cursor: pointer;
    background: #ffffff;

    ${(props) =>
      props.selected
        ? "background-color: #582fff; color: #fff; border: 1px solid #582fff;" // 선택된 항목에 배경색, 글자색, 테두리 추가
        : ""};
    &:hover {
      color: #582fff;
    }
  }
`;



export {
  Container,
  Title,
  Subtitle,
  Subtitle2,
  EmailInput,
  TelInput,
  AffiliationInput,
  KeyworldOptionList,
};