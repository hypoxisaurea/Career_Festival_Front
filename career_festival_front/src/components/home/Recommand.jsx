// src/components/home/Recommand.jsx
import React from 'react';
import styled from 'styled-components';
import dummy from "../../db/RecommandedEvents.json";

const RecommandCardcontainer = styled.div`
  width: 392px;
  height: 400px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
  border-radius: 32px;

  img{
    width: 392px;
    height: 246px;
    border-radius: 32px;
    margin: 10px 0px;
  }

  h4{
    margin: 0px;
  }
`
const RecommmadInfoWrapper = styled.div`
  width: 392px;
  height: 132px;
 
  border: 1px solid red;
`

const Recommand = ({mainImg, eventName, recruitmentStart, recruitmentEnd, price}) => {
  return (
    <RecommandCardcontainer>
      <img src={mainImg} alt='행사 이미지'/>
      <RecommmadInfoWrapper>
        <h4>{eventName}</h4>
        <div>{recruitmentStart}</div>
        <div>{recruitmentEnd}</div>
        <div>{price}</div>
      </RecommmadInfoWrapper>
    </RecommandCardcontainer>
  );
};

export default Recommand;



