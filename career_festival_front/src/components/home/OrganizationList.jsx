import React from 'react';
import styled from 'styled-components';
import  '../../db/organizationsData.json';

const OrganizationBox =styled.div`
  //border: 1px solid red;
  border-radius: 5px;
  display: flex;
 
  flex-direction: column;
  align-items: center;

  aspect-ratio: 2/3;

  background-color: white;
  box-shadow: 0 4px 4px 0 rgb(0, 0, 0, 0.25);
`


const OrganizationProfileImg = styled.div`
  //border: 1px solid red;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;

  img{
    width: 50%;
    border-radius: 50%;

    align-self: center;
    margin-top: 10%;
  }
  
`
const OrganizationInfo = styled.div`
  //border: 1px solid red;
  width: 80%;
  height: 25%;
  text-align: center;

  font-size: 1rem;
  font-weight: 500;

  position: relative;
  display: flex;
  flex-direction: column;
`

const OrganizationNameWrapper = styled.div`
  //border: 1px solid red;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
const UploadedNumberWrapper = styled.div`
  //border: 1px solid red;

  margin-top: 0.8em;
  color: #838383;

  span{
    color: #582fff;
  }
`


const SubscribeButtonWrapper = styled.div`
  //border: 1px solid red;

  width: 100%;
  height: 25%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  button{
    width: 60%;
    height: 50%;
    margin: 0.8em auto;

    border: none;
    background-color: #582fff;
    color: #ffff;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 5px;
  }
`

const OrganizationList = ({profile, OrganizationName, uploadedNumber, subscribed}) => {
  return (
    <OrganizationBox>
      <OrganizationProfileImg>
        <img src = {profile} alt='주최자 이미지'/>
      </OrganizationProfileImg>


      <OrganizationInfo>
        <OrganizationNameWrapper title={OrganizationName}>{OrganizationName}</OrganizationNameWrapper>
        <UploadedNumberWrapper> <span>{uploadedNumber}</span>개의 행사 </UploadedNumberWrapper>
      </OrganizationInfo>
      <SubscribeButtonWrapper><button>구독하기</button></SubscribeButtonWrapper>
    </OrganizationBox>
  )
};

export default OrganizationList;