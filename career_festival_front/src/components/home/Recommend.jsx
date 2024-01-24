// src/components/home/Recommend.jsx
import React from 'react';
import styled from 'styled-components';
import dummy from "../../db/RecommendedEvents.json";
import {useState, useEffect} from 'react';

import emptyStarIcon from "../../assets/images/emptyStarIcon.png";


//카드 전체
const RecommendCardcontainer = styled.div`
  border: 1px solid red; //생략 가능
  border-radius: 10px;
  aspect-ratio: 1/1;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
`




//행사 이미지 백에서 600*400 사이즈 고정으로 받기 요청
const RecommendMainImgWrapper = styled.div`
  border: 1px solid red; //생략 가능
  
  grid-column: 1/6;
  grid-row: 1/4;
  display: block;

  img{
    width: 100%;
    height: 100%;

    border-radius: 10px;
    margin: 0;
  } 
  
  border-radius: 10px;
`


//제목
const RecommendTitleWrapper = styled.div`
  border: 1px solid red;//생략가능
  grid-column: 1/6;
  grid-row: 4/5;

  
  align-self: center;
  font-size: 1.2vmax;
  font-weight: 900;

  overflow: hidden;
`


//행사 정보
const RecommendInfoWrapper = styled.div`
  border: 1px solid red;//생략가능

  grid-column: 1/5;
  grid-row: 5/6;
`
const RecommendTimeInfoWrapper =styled.div`
  border: 1px solid red;
  font-size: 0.7vmax;
  font-weight: 500;

  overflow: hidden;
`

const RecommendIconWapper =styled.div`
  display: inline-flex;
  flex-direction: row;

  font-size: 1vmax;
  font-weight: 700;
  color: #582fff;
`
//저장 아이콘
const StarIcon = styled.img`
  margin-right: 0.5vmax;
  width: 1em;
  height: 1em;
`



//주최자 사진
const RecommendOrganizerImgWrapper = styled.div`
    border: 1px solid red;
    grid-column:5/6;
    grid-row: 5/6;
   
    img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    }
`




// const HeartButton = ({isLiked, onclick})

const Recommend = ({mainImg, eventName, recruitmentStart, recruitmentEnd, isLiked, price, profile}) => {
  return (
    <RecommendCardcontainer>
      <RecommendMainImgWrapper>
        <img src={mainImg} alt='행사 이미지'/>
      </RecommendMainImgWrapper>
      
     
      <RecommendTitleWrapper> 
        {eventName}
      </RecommendTitleWrapper>

      <RecommendInfoWrapper>

        <RecommendTimeInfoWrapper>
          <div>{recruitmentStart}</div>
          <div>{recruitmentEnd}</div>
        </RecommendTimeInfoWrapper>
        

        <RecommendIconWapper>
          <div><StarIcon src={emptyStarIcon} alt='저장'/> {/*백엔드에서 나오면 바꾸기*/} </div>
          <div>{price}</div>
        </RecommendIconWapper>
      </RecommendInfoWrapper>  


      <RecommendOrganizerImgWrapper>
        <img src={profile} alt='주최자 이미지'/>
      </RecommendOrganizerImgWrapper>    
    </RecommendCardcontainer>
  );
};

export default Recommend;
