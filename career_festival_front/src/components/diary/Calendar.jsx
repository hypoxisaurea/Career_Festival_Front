import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const StyledDatePicker = styled(DatePicker)`
  width: 250px;
  height: auto;
  color: #838383;
  font-size: 1vw;
  font-family: "Noto Sans KR";
  font-weight: 400;
  word-wrap: break-word;
  border-radius: 0.6vw;
  border: 0.1vw #838383 solid;
  margin-top: 1.2vw;
  padding: 1vw 1vw 1vw 1vw;

  &::placeholder {
    color: #838383;
    font-size: 1vw;
    font-family: "Noto Sans KR";
    font-weight: 400;
  }

  .react-datepicker__header {
    background: black; // 원하는 배경색
    color: white; // 원하는 글자색
  }

  .react-datepicker__day-name,
  .react-datepicker__day {
    color: black; // 텍스트 색상을 검정색으로 변경
  }

  .react-datepicker__current-month {
    color: black; // 텍스트 색상을 검정색으로 변경
  }

  .react-datepicker__day--selected {
    background-color: blue; // 선택된 날짜의 배경색을 변경
  }

  .react-datepicker__day--keyboard-selected {
    background-color: blue; // 키보드로 선택된 날짜의 배경색을 변경
  }
`;

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <StyledDatePicker
      dateFormat="yyyy.MM.dd"
      shouldCloseOnSelect
      minDate={new Date("2000-01-01")}
      maxDate={new Date()} //이 줄을 지우면 미래 날짜 선택 가능
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      placeholderText="행사를 다녀온 날짜를 선택해주세요.    📅"
    />
  );
};

export default Calendar;
