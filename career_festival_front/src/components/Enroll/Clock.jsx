import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  padding: 0.5vw;
  font-size: 1vw;
  border-radius: 0.6vw;
  border: 0.1vw #838383 solid;
  color: #838383;
  font-family: "Noto Sans KR";
`;

const Select = styled.select`
  padding: 0.5vw;
  font-size: 1vw;
  border-radius: 0.6vw;
  border: 0.1vw #838383 solid;
  color: #838383;
  font-family: "Noto Sans KR";
`;

const Option = styled.option`
  font-size: 1vw;
`;

const Clock = () => {
  const [selectedTime, setSelectedTime] = useState("00:00");

  const hours = Array.from({ length: 24 }, (_, index) =>
    index.toString().padStart(2, "0")
  );
  const minutes = Array.from({ length: 60 }, (_, index) =>
    index % 5 === 0 ? index.toString().padStart(2, "0") : null
  ).filter(Boolean);

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  return (
    <Container>
      <Input
        type="time"
        value={selectedTime}
        onChange={handleTimeChange}
        step="300" // 5분 단위로 설정
      />
    </Container>
  );
};

export default Clock;
