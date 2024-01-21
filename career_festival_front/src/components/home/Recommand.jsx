// src/components/home/Recommand.jsx
import React from 'react';
import styled from 'styled-components';
import dummy from "../../db/RecommandedEvents.json";
import {useState, useEffect} from 'react';

import emptyStarIcon from "../../assets/images/emptyStarIcon.png";


//카드 전체
const RecommandCardcontainer = styled.div`
  //border: 1px solid red; //생략 가능


  border-radius: 10px;
  aspect-ratio: 1/1;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
`




//행사 이미지 
const RecommandMainImgWrapper = styled.div`
  //border: 1px solid red; //생략 가능
  
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
const RecommandTitleWraper = styled.div`
  //border: 1px solid red;//생략가능


  grid-column: 1/6;
  grid-row: 4/5;
  font-size: 1.2vmax;
  font-weight: 900;
  //margin-top: 1vmax;
  align-self: center;

  overflow: hidden;
`


//행사 정보
const RecommmadInfoWrapper = styled.div`
  //border: 1px solid red;//생략가능


  font-size: 1vmax;
  font-weight: 500;

  grid-column: 1/5;
  grid-row: 5/6;
`

const RecomandIconWraper =styled.div`
  display: inline-flex;
  flex-direction: row;
  align-content: center;
  margin-top: 0.5vmax;

  font-size: 1vmax;
  font-weight: 700;
  color: #582fff;
`
//저장 아이콘
const StarIcon = styled.img`
  margin-right: 0.5vmax;
  width: 1.5vmax;
  height: 1.5vmax;
`





//주최자 사진
const RecommandOrganizerImgWraper = styled.div`
    //border: 1px solid red;
    grid-column:5/6;
    grid-row: 5/6;
   
    img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    }
`


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
