// src/components/home/Recommand.jsx
import React from 'react';
import styled from 'styled-components';
import dummy from "../../db/RecommandedEvents.json";
import {useState, useEffect} from 'react';

import emptyStarIcon from "../../assets/images/emptyStarIcon.png";


//카드 전체
const RecommandCardcontainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1vw;
`;


//행사 이미지 
const RecommandMainImgWrapper = styled.div`
  grid-column: 1/6;
  grid-row: 1/4;
  display: block;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;

    border-radius: 10px;
    margin: 0;
  }
`;


//제목
const RecommandTitleWraper = styled.div`
  grid-column: 1/6;
  font-size: 1.2rem;
  font-weight: bold;
  align-self: center;
  overflow: hidden;
`;


//행사 정보
const RecommmadInfoWrapper = styled.div`
  font-size: 1rem;
  grid-column: 1/5;
  grid-row: 5/6;
`;

const RecomandIconWraper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-content: center;
  margin-top: 0.5vw;

  font-size: 1rem;
  font-weight: bold;
  color: #582fff;
`;
//저장 아이콘
const StarIcon = styled.img`
  margin-right: 0.5vw;
  width: 1vw;
  height: 1vw;
`

//주최자 사진
const RecommandOrganizerImgWraper = styled.div`
  img {
    width: 4vw;
    height: 4vw;
    border-radius: 50%;
  }
`;


// const HeartButton = ({isLiked, onclick})

const Recommand = ({mainImg, eventName, recruitmentStart, recruitmentEnd, isLiked, price, profile}) => {
  return (
    <RecommandCardcontainer>
      <RecommandMainImgWrapper>
        <img src={mainImg} alt='행사 이미지'/>
      </RecommandMainImgWrapper>
      
     
      <RecommandTitleWraper>
        {eventName}
      </RecommandTitleWraper>

      <RecommmadInfoWrapper>
        <div>{recruitmentStart}</div>
        <div>{recruitmentEnd}</div>

        <RecomandIconWraper>
        <div><StarIcon src={emptyStarIcon} alt='저장'/> {/*백엔드에서 나오면 바꾸기*/} </div>
        <div>{price}</div>
        </RecomandIconWraper>
        

      </RecommmadInfoWrapper>  


      <RecommandOrganizerImgWraper>
        <img src={profile} alt='주최자 이미지'/>
      </RecommandOrganizerImgWraper>    
    </RecommandCardcontainer>
  );
};

export default Recommand;
