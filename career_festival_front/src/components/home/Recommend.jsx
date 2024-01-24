// src/components/home/Recommend.jsx
import React from 'react';
import styled from 'styled-components';
import dummy from "../../db/RecommendedEvents.json";
import {useState, useEffect} from 'react';

import emptyStarIcon from "../../assets/images/emptyStarIcon.png";



/* 전체 틀
적용되는 페이지에 따라 사이즈가 다르게 들어가도록 함
따라서 해당 컴포넌트 사용시, 컴포넌트가 들어가는 컨테이너의 크기를 vw 단위로 맞추고
그리드의 가로폭 크기도 vw단위로 고정할것
*/
const RecommendCardcontainer = styled.div`
  //border: solid red;
  border-radius: 10%;
  width: 100%;
  display: flex;
  flex-direction: column;

`

//행사 이미지 (600*400또는 6:4비율로 받을 것)
const RecommendMainImgWrapper = styled.div`
  //border: solid green;
  border-radius: 10%;

  img{
    width: 100%;
    height: 100%;
    border-radius: 10%;
  }
`

//행사 이름
const RecommendTitleWrapper = styled.div`
  //border: solid green;
  width: 100%;
  padding: 0.5em 0;

  overflow: hidden;
  text-overflow: ellipsis;


  font-size: 1.2em;
  font-weight: 700;
`


//행사 정보: 제목 하단 전체
const RecommendInfoWrapper = styled.div`
  //border: solid green;
  width: 100%;
  display: flex;
  flex-direction: row;
`


//행사 시간, 즐겨찾기 라인
const RecommandDetailWrapper = styled.div`
  //border: solid skyblue;
  width: 80%;
  display: block;
  font-size: 1em;
  font-weight: 500;
`

//행사 시간
const RecommendTimeInfoWrapper = styled.div`
  //border: solid yellow;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  
`

// 즐겨찾기, 가격
const RecommendIconWapper = styled.div`
  //border: solid yellow;

  display: flex;
  flex-direction: row;
  align-content: center;
  padding-top: 0.2em;
  
  color: #582fff;
  font-weight: 700;

`

//즐겨찾기 아이콘
const StarIcon = styled.img`
  width: 1.2em;
  height: 1.2em;
  margin-right: 0.5rem;

`


// 주최자 프로필 이미지 (400*400 또는 1:1 비율로 고정되서 받을 것)
const RecommendOrganizerImgWrapper = styled.div`
  //border: solid skyblue;
  width: 20%;
  aspect-ratio: 1/1;
  

  img{
    width: 100%;
    border-radius: 50%;
  }
  
`




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
        <RecommandDetailWrapper>
          <RecommendTimeInfoWrapper>
            <div>{recruitmentStart}</div>
            <div>{recruitmentEnd}</div>
          </RecommendTimeInfoWrapper>
        

          <RecommendIconWapper>
            <div><StarIcon src={emptyStarIcon} alt='저장'/> {/*백엔드에서 나오면 바꾸기*/} </div>
            <div>{price}</div>
          </RecommendIconWapper>
        </RecommandDetailWrapper>

        <RecommendOrganizerImgWrapper>
          <img src={profile} alt='주최자 이미지'/>
        </RecommendOrganizerImgWrapper>
      </RecommendInfoWrapper>      
    </RecommendCardcontainer>
  );
};

export default Recommend;
