import React from 'react'
import styled from 'styled-components'
import  "../db/organizationsData.json"
import { useLocation, useParams } from 'react-router-dom'



//전체 페이지
const OrganizationInfoContainer = styled.div`
    
`

//이전 페이지 이동
const OrganizationPageReturnContainer = styled.div`
    
`

//주최자 상단 
const OrganizationInsightContainer = styled.div`
    
`
const OrganizationProfileImg = styled.img`
    
`

const OrganizationNameWrapper = styled.div`
    
`

const OrganizationButton = styled.button`
    
`

const OrganizationInsightWrapper = styled.div`
    
`

//행사 리스트
const OrganizationFestivalListContainer = styled.div`
    
`
const OrganizationFestivalListWrapper = styled.div`
    
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
            <OrganizationProfileImg src={state.profile} alt='주최자 프로필 사진'/>
            <OrganizationNameWrapper>{state.OrganizationName}</OrganizationNameWrapper>
            {/* 주최자로 로그인시 행사 등록하기 */}
            <OrganizationButton>구독하기</OrganizationButton>


            <OrganizationInsightWrapper>
                <div>{state.subsciberNumber}</div>
                <div>{state.uploadedNumber}</div>
            </OrganizationInsightWrapper>
        </OrganizationInsightContainer>

        <OrganizationFestivalListContainer>
            <OrganizationFestivalListWrapper>

            </OrganizationFestivalListWrapper>
        </OrganizationFestivalListContainer>
    </OrganizationInfoContainer>
  )
}

export default OrganizationInfoPage