import React from 'react'
import styled from 'styled-components'
import  "../db/organizationsData.json"
import { useLocation, useParams } from 'react-router-dom'
import OrganizationInsight from '../components/organization/OrganizationInsight'
import dummy from "../db/RecommendedEvents.json"
import Recommend from '../components/home/Recommend'


//전체 페이지
const OrganizationInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 15vw;
    gap: 3vw
`

//이전 페이지 이동
const OrganizationPageReturnContainer = styled.div`
    display: none;
`

//주최자 상단 
const OrganizationInsightContainer = styled.div`
    background-color: beige;
    width: 100%;

`

// 프로필 이미지, 이름, 구독 버튼 (수정 버튼)
const OrganizationProfileWrapper = styled.div`
    background-color: aliceblue;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;

`

const OrganizationProfileImg = styled.img`
    width: 4vw;
    height: 4vw;
    border-radius: 50%;
`

const OrganizationNameWrapper = styled.div`
    margin-left: 1vw;
    font-size: 1.5rem;
    font-weight: 700;

    @media screen and (max-width: 600px) {
    font-size: 1.5vw;
  }
`

const OrganizationButton = styled.button`
    position: absolute;
    right: 0;

    width: 9vw;
    height: 3vw;
    border: none;
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: 500;
    background-color: #582FFF;
    color: #ffff;

    @media screen and (max-width: 600px) {
    font-size: 1vw;
  }
`

//행사 리스트
const OrganizationFestivalListContainer = styled.div`
    background-color: beige;
    width: 100%;
    gap: 1vw;
`
const OrganizationFestivalListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3,22vw);
    gap: 2vw;
    align-items: top;
`





function OrganizationInfoPage() {
  const {OrganizationName} = useParams();
  const {state} = useLocation();
  console.log(OrganizationName);
  console.log(state);


  return (
    <OrganizationInfoContainer>
        <OrganizationPageReturnContainer>
            {/* 이전 페이지로 이동 (주최자로 로그인시 없어짐) */}
        </OrganizationPageReturnContainer>


        <OrganizationInsightContainer>
            <OrganizationProfileWrapper>
                <OrganizationProfileImg src={state.profile} alt='주최자 프로필 사진'/>
                <OrganizationNameWrapper>{state.OrganizationName}</OrganizationNameWrapper>
                {/* 주최자로 로그인시 행사 등록하기 */}
                <OrganizationButton>구독하기</OrganizationButton>
            </OrganizationProfileWrapper>
            
            <OrganizationInsight
                subscriberNumber = {state.subscriberNumber}
                uploadedNumber = {state.uploadedNumber}
            />

        </OrganizationInsightContainer>

        <OrganizationFestivalListContainer>
            <h4>행사목록</h4>
            <div>그동안 등록했던 행사들을 볼 수 있습니다.</div>
            <OrganizationFestivalListWrapper>
                {dummy.RecommendedByPerson.slice(0, 3).map((item) => (
                <Recommend
                key={item.eventName}
                mainImg={item.mainImg}
                eventName={item.eventName}
                recruitmentStart={item.recruitmentStart}
                recruitmentEnd={item.recruitmentEnd}
                isLiked={item.isLiked}
                price={item.price}
                profile={item.profile}
              />
            ))}
            </OrganizationFestivalListWrapper>
        </OrganizationFestivalListContainer>
    </OrganizationInfoContainer>
  )
}

export default OrganizationInfoPage