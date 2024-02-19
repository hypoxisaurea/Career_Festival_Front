import React from 'react';
import styled from "styled-components";
import MypageProfileImg from '../../assets/images/mypage_profile.png';

//전체 페이지
const MypageProfileContainer = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: row;
  gap: 12vw;
  align-items: center;

  @media screen and (max-width: 600px) {
    gap: 9vw;
        }
`
const MypageProfileImgWrapper = styled.div`
  //border: 1px solid red;
  width: 18vw;
  height: 18vw;

  img{
    width: 100%;
    height: 100%;
  }
`
const MypageInfoWrapper = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: column;
  gap: 1vw;

  h2{
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0;

    @media screen and (max-width: 600px) {
        font-size: 2.5vw;
        }
  }
  span{
    color: #582FFF;
  }
`
const EmailWrapper = styled.div`
  h4{
    font-size: 1rem;
    font-weight: 700;
  

    @media screen and (max-width: 600px) {
        font-size: 2vw;
        margin: 1vw 0;
        }
  }
  div{
    font-size: 0.8rem;
    font-weight: 420;
   

    @media screen and (max-width: 600px) {
        font-size: 1.6vw;
        }
  }
`
const PersonalAreaWrapper = styled.div`
h4{
    font-size: 1rem;
    font-weight: 700;
   

    @media screen and (max-width: 600px) {
        font-size: 2vw;
        margin: 1vw 0;
        }
  }
  
`
const AreaItem = styled.button`
  //margin: 0.7vw 0 2vw 0;
  border: none;
  border-radius: 6px;
  width: 6vw;
  height: 2vw;
  background-color: #DAD1FB;
  color: #582FFF;
  font-size: 1rem;
  font-weight: 700;

  @media screen and (max-width: 600px) {
        font-size: 1.2vw;
        font-weight: 500;

        width: 8vw;
        margin: 0;
        }
`
const Introduce = styled.div`
h4{
    font-size: 1rem;
    font-weight: 700;
   

    @media screen and (max-width: 600px) {
        font-size: 2vw;
        margin: 1vw 0;
        }
  }
  div{
    font-size: 1rem;
    font-weight: 400; margin: 0.7vw 0 0 0;

    @media screen and (max-width: 600px) {
        font-size: 2vw;
        }
  }
  
`
// const ShowProfile = styled.div`
//   position: absolute;
//   margin-top: 25vw;
//   margin-left: 46vw;
//   font-size: 0.8rem;
//   font-weight: 410;
//   color: #582FFF;
// `


const MypageInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3vw;
`

const CareerKeywordContainer = styled.div`
    font-size: 1rem;
    font-weight: 700;

    @media screen and (max-width: 600px) {
        font-size: 2vw;
        }
`

const ContentWrapper1 = styled.div`
   
    
`

const DepartmentContainer = styled.div`
    font-size: 1rem;
    font-weight: 700;

    @media screen and (max-width: 600px) {
        font-size: 2vw;
        }
    
`
const ContentWrapper2 = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5vw;
    font-size: 1rem;
    font-weight: 400;
    
    @media screen and (max-width: 600px) {
        font-size: 2vw;
        }
`

const PersonalContainer = styled.div`
    font-size: 1rem;
    font-weight: 700;
    
    @media screen and (max-width: 600px) {
        font-size: 2vw;
        }
`
const ContentWrapper3 = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5vw;
    font-size: 1rem;
    font-weight: 400;

    @media screen and (max-width: 600px) {
        font-size: 2vw;
        }
    
`
const VerticalDivider = styled.div`
    border-left: 0.02vw solid #d9d9d9;
`


function MypageProfile() {
  return (
    <div>
    <MypageProfileContainer>
      <MypageProfileImgWrapper>
        <img src={MypageProfileImg} alt='mypageProfile'/>
      </MypageProfileImgWrapper>
      <MypageInfoWrapper>
        <h2>안녕하세요 <span>김커리</span>입니다.</h2> {/* 데이터 연결 필요 */}
        <EmailWrapper>
          <h4>이메일</h4>
          <div>dkfjaljdlkfjslkf</div>
        </EmailWrapper>

        <PersonalAreaWrapper>
          <h4>관심지역</h4>
          <AreaItem>용산구</AreaItem>
        </PersonalAreaWrapper>

        <Introduce>
          <h4>한줄 소개</h4>
          <div>행사를 사랑하고 나누는 삶!</div>
        </Introduce>
      </MypageInfoWrapper>
      {/*<ShowProfile>보여지는 프로필 설정하기</ShowProfile>*/}

    </MypageProfileContainer>
<MypageInfoContainer>
        <CareerKeywordContainer>
            <h4>내 커리어 키워드</h4>
            <ContentWrapper1>
                {/* participant에서 백 데이터 맞춰서 가져오면 될 듯 */}
            </ContentWrapper1>
        </CareerKeywordContainer>

        <DepartmentContainer>
            <h4>내가 속한 학교 혹은 단체 및 회사</h4>
            <ContentWrapper2>
                <div>홍익대학교</div>
                <div>공과대학/컴퓨터공학과</div>
            </ContentWrapper2>
        </DepartmentContainer>

        <PersonalContainer>
            <h4>나이 및 성별</h4>
            <ContentWrapper3>
                <div>25세</div>
                <VerticalDivider/>
                <div>여성</div>
            </ContentWrapper3>
        </PersonalContainer>
   </MypageInfoContainer> </div>
  )
}

export default MypageProfile