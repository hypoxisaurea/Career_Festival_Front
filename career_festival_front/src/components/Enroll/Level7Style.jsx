// Level7Style.jsx
import styled, { css } from "styled-components";

export const Level7Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; // 컨테이너가 화면 전체를 차지하도록 설정
  margin-bottom: 40vw;
  padding: 10vw;
`;
export const HL = styled.hr`
  border: 0.1px solid #838383; // 가로선 스타일 지정
  width: 100%; // 가로선이 컨테이너 전체 너비를 차지하도록 설정
  margin: 1vw 0; // 위아래 여백 추가
`;
// 다음 버튼 스타일 정의
export const NextButton = styled.button`
  margin-top: 20px;
  padding: 1vw 4vw;
  font-size: 1rem;
  background-color: #582fff;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
export const PurpleTitle = styled.h1`
  color: #582fff; // 글자색을 #582fff로 지정
  font-size: 1.5rem;
  text-align: left; // 왼쪽 정렬
`;
export const Title = styled.h1`
  color: #000000; // 글자색을 #582fff로 지정
  font-size: 1rem;
  text-align: left; // 왼쪽 정렬
`;

export const SubTitle = styled.h1`
  color: #838383;
  font-size: 0.8rem;
  text-align: left; // 왼쪽 정렬
  margin-bottom: 20px; // 아래 여백 추가
`;

export const KeyworldOptionList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const KeywordButton = styled.button`
  border: none;
  padding: 8px;
  cursor: pointer;
  color: #838383;
  background: #ffffff;
  border: 2px solid;
  border-radius: 20px;

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

export const InputFestivalName = styled.input`
  width: 30%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;


  &:focus {
    border-color: #582fff;
    outline: none;
  }
`;
export const InputIntroduce = styled.input`
  width: 40%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;


  &:focus {
    border-color: #582fff;
    outline: none;
  }
`;

export const FestivalInformation = styled.div`
  width: 100%;
  // background-color: #c57f2e;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const FestivalInformationInput = styled.textarea`
  width: 99.5%;
  height: 20vw; /* 원하는 높이로 조절 */
  // margin: 1vw;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;


  &:focus {
    border-color: #582fff;
    outline: none;
  }
`;

export const AddOther = styled.input`
  width: 12%;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;


  &:focus {
    border-color: #582fff;
    outline: none;
  }
`;

export const AddOtherButton = styled.button`
  border: none;
  padding: 8px;
  color: #582fff;
  background: #dad1fb;
  border: 0.1rem solid;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    color: #ffffff;
    background-color: #582fff;
  }
`;

export const AddURL = styled.input`
  width: 40%;
  margin-bottom: 1vw;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;


  &:focus {
    border-color: #582fff;
    outline: none;
  }
`;

export const FestivalFee = styled.input`
  width: 30%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;


  &:focus {
    border-color: #582fff;
    outline: none;
  }
`;

export const ManagerName = styled.input`
  width: 20%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;


  &:focus {
    border-color: #582fff;
    outline: none;
  }
`;

export const ManagerEmail = styled.input`
  width: 20%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    border-color: #582fff;
    outline: none;
  }

`;

export const AttachmentButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 자식 요소들을 양쪽으로 정렬합니다 */
  background: none;
  border: none;
`;

export const ImageAddButton = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  background-color: #4cc390;
  cursor: pointer;
  span {
    font-size: 0.7rem; /* 이미지첨부 글씨에 대한 스타일 조절 */
  }
`;

export const ImageIcon = styled.img`
  width: 20%; /* 이미지의 크기를 조절하세요 */
  height: 100%;
  margin-left: 5px; /* 이미지와 글씨 사이의 간격을 조절하세요 */
  margin-top: 5px; /* 이미지 아래 여백 추가 */
`;

