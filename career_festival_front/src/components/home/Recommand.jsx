// src/components/home/Recommand.jsx
import React from 'react';
import styled from 'styled-components';
import dummy from "../../db/RecommandedEvents.json";
import {useState, useEffect} from 'react';

import EmptyHeartImg from "../../assets/images/emptyheart.png";
import HeartImg from "../../assets/images/heart.png";


const RecommandCardcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
  border-radius: 32px;

  img{
    width: 30px;
    height: 20px;
    border-radius: 32px;
    margin: 10px 0px;
  }

  h4{
    margin: 0px;
  }
`
const RecommmadInfoWrapper = styled.div`
 
  border: 1px solid red;
`

const HeartIcon = styled.img`
  
`
// const HeartButton = ({isLiked, onclick})

const Recommand = ({mainImg, eventName, recruitmentStart, recruitmentEnd, isLiked, price, profile}) => {
  return (
    <RecommandCardcontainer>
      <img src={mainImg} alt='행사 이미지'/>
      <RecommmadInfoWrapper>
        <h4>{eventName}</h4>
        <div>{recruitmentStart}</div>
        <div>{recruitmentEnd}</div>
        <HeartIcon src={EmptyHeartImg} alt='heartlogo'/> {/*백엔드에서 나오면 바꾸기*/}
        <div>{price}</div>
        <img src={profile} alt='주최자 이미지'/>
      </RecommmadInfoWrapper>
    </RecommandCardcontainer>
  );
};

export default Recommand;



