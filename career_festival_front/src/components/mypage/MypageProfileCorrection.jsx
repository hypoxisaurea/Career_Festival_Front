import React from 'react';
import styled from "styled-components";
import MypageProfileImg from '../../assets/images/mypage_profile.png';
import { useState, useEffect } from "react";
import InterestArea from "../signup/InterestArea";



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
  gap: 0.5vw;

  @media screen and (max-width: 600px) {
       gap: 2vw;
        }

  h4{
    font-size: 1rem;
    font-weight: 700;
    margin: 1vw auto;

    @media screen and (max-width: 600px) {
        font-size: 2vw;
        margin: 0;
        }
  }

`





const NameContainer = styled.div`
    input{
        padding: 0.7vw 0 0.7vw 0.7vw;
        border: 0.1rem solid #838383;
        border-radius: 8px;
        cursor: pointer;
        background-color: #ffffff;
        text-align: start;
        color: #757575;

        @media screen and (max-width: 600px) {
        font-size: 1.5vw;
        width: 20vw;
        border-radius: 5px;
        border: 0.05rem solid #838383;
        padding: 0.7vw 0 0.7vw 0.7vw;
        }
    }
`
const EmailContainer = styled.div`
  input {
    padding: 0.7vw 0 0.7vw 0.7vw;
    border: 0.1rem solid #838383;
    border-radius: 8px;
    cursor: pointer;
    background-color: #ffffff;
    text-align: start;
    color: #757575;
    width: 25vw;

    @media screen and (max-width: 600px) {
      font-size: 1.5vw;
      width: 20vw;
      border-radius: 5px;
      border: 0.05rem solid #838383;
      padding: 0.7vw 0 0.7vw 0.7vw;
    }
  }
`

const PlaceContainer = styled.div`
    
`

const IntroduceContainer = styled.div`
     input{
        padding: 0.7vw 0 0.7vw 0.7vw;
        border: 0.1rem solid #838383;
        border-radius: 8px;
        cursor: pointer;
        background-color: #ffffff;
        text-align: start;
        color: #757575;
        width: 25vw;

        @media screen and (max-width: 600px) {
        font-size: 1.5vw;
        width: 31vw;
        border-radius: 5px;
        border: 0.05rem solid #838383;
        padding: 0.7vw 0 0.7vw 0.7vw;
        }
    }
`


function MypageProfileCorrection() {
  // 모달 창의 열림 여부와 선택된 지역 정보 및 추가 정보를 상태로 관리합니다.
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState("seoul");
  const [selectedCity, setSelectedCity] = useState("");
  const [email, setEmail] = useState(""); // 추가: 이메일 상태
  const [name, setName] = useState(""); // 이름 추가
  const [introduce, setIntroduce] = useState(""); // 한줄 소개 추가
  

  // useEffect를 사용하여 컴포넌트가 처음 마운트될 때 실행될 로직 추가
  useEffect(() => {
    // 로컬 스토리지에서 사용자 정보를 가져와서 이메일을 설정합니다.
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo && userInfo.email) {
      setEmail(userInfo.email);
    }
  }, []);
  
  // 모달 창을 열거나 닫는 함수를 정의합니다.
  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  // 모달 닫기 함수를 정의합니다.
  const closeModal = () => {
    setModalOpen(false);
  };

  // 시/도를 선택할 때 호출되는 함수입니다.
  const handleAreaSelect = (area) => {
    setSelectedArea(area);
    setSelectedCity("");
  };

  // 시/군/구를 선택할 때 호출되는 함수입니다.
  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setModalOpen(false);
  };


  //모든 항목이 입력되었는지 확인




  return (
    <MypageProfileContainer>
      <MypageProfileImgWrapper>
        <img src={MypageProfileImg} alt='mypageProfile'/>
      </MypageProfileImgWrapper>
      <MypageInfoWrapper>
        <NameContainer>
            <h4>이름</h4>
            <input
                type="text"
                placeholder="예시) 김커리"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            
        </NameContainer>


        <EmailContainer>
        <h4>이메일</h4>
          <input
            type="email"
            value={email}
            disabled // 수정 불가능하도록 설정
          />
        </EmailContainer>

        <PlaceContainer>
            <h4>관심지역</h4>
            <InterestArea
             selectedArea={selectedArea}
             handleAreaSelect={handleAreaSelect}
             selectedCity={selectedCity}
             handleCitySelect={handleCitySelect}
             isModalOpen={isModalOpen}
             handleModalToggle={handleModalToggle}
             closeModal={closeModal}
             buttonText="선택하기"
            />
        </PlaceContainer>

        <IntroduceContainer>
            <h4>한줄소개</h4>
            <input
                type="text"
                placeholder="본인을 간략하게 표한할 한 줄 소개를 작성해보세요!"
                value={introduce}
                onChange={(e) => setIntroduce(e.target.value)}
            />
        </IntroduceContainer>
      </MypageInfoWrapper>
      {/*<ShowProfile>보여지는 프로필 설정하기</ShowProfile>*/}

    </MypageProfileContainer>

  )
}

export default MypageProfileCorrection