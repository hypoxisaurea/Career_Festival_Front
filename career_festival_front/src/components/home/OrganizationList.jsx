import React from 'react';
import styled from 'styled-components';
import  '../../db/organizationsData.json';

const OrganizationBox =styled.div`
  border: 1px solid red;
  border-radius: 5px;
  display: flex;
 
  flex-direction: column;
  align-items: center;

  aspect-ratio: 2/3;
`


const OrganizationProfileImg = styled.div`
  border: 1px solid red;
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
  border: 1px solid red;
  width: 80%;
  height: 50%;
  text-align: center;

  font-size: 1em;
  font-weight: 500;
`



const OrganizationList = ({profile, OranizationName, uploadedNumber, subscribed}) => {
  return (
    <OrganizationBox>
      <OrganizationProfileImg>
        <img src = {profile} alt='주최자 이미지'/>
      </OrganizationProfileImg>


      <OrganizationInfo>
        <div>{OranizationName}</div>
        <div><span>{uploadedNumber}</span>개의 행사</div>
        <button> 구독하기</button>
      </OrganizationInfo>
    </OrganizationBox>
  )
};

export default OrganizationList;