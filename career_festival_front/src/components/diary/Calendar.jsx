//캘린더
import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const StyledDatePicker = styled(DatePicker)`
  width: 120%;
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
