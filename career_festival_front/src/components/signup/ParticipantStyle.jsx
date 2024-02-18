// ParticipantStyle.js

import styled,{ css } from "styled-components";

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
`;

const Subtitle2 = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
  color: #838383;
`;

const Gender = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  label {
    margin-right: 50px;
    font-size:14px; // 여성과 남성 사이의 간격을 조정합니다.
  }

  label:last-child {
    margin-right: 0; // 마지막 라벨에 마진을 주지 않습니다.
  }
`;

const Age = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    font-size: 16px;
    margin-bottom: 5px;
  }

  input {
    width: 180px;
    padding: 10px;
    border: 1px solid #838383;
    border-radius: 5px;
  }
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
    border: 1px solid #838383;
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
    border: 1px solid #838383;
    border-radius: 5px;
  }
`;


const KeyworldOptionList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  input {
    padding: 8px;
    cursor: pointer;
    background: #ffffff;
    color: #838383;
    border-radius: 18px;
    border: 1px solid #838383;
  }
`;

const KeywordButton = styled.button`
  padding: 8px;
  cursor: pointer;
  background: #ffffff;
  color:#838383;
  border-radius: 18px;
  border: 1px solid #838383;

  ${(props) =>
    props.selected &&
    css`
      border: 2px solid #582fff;
      color: #582fff;
    `};

  &:hover {
    color: #582fff;
  }
`;

const TwoButton = styled.div`
  display: flex;
  justify-content: center;  // 가로 중앙 정렬
  align-items: center;  // 세로 중앙 정렬
  gap: 2vw;  // 버튼 사이의 간격 조절
  padding: 2vw;
`;

const LaterSave = styled.button`
  background-color: #d9d9d9;
  color: #582fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: #c1c1c1;
  }

`;

const Save = styled.button`
  background-color: ${(props) => (props.disabled ? "#d9d9d9" : "#582fff")};
  color: ${(props) => (props.disabled ? "#582fff" : "#ffffff")};
  border: none;
  padding: 10px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border-radius: 10px;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#d9d9d9" : "#4018cc")};
  }
`;



export {
  Container,
  Title,
  Subtitle,
  Subtitle2,
  Gender,
  Age,
  EmailInput,
  TelInput,
  KeyworldOptionList,
  KeywordButton,
  TwoButton,
  LaterSave,
  Save,
};