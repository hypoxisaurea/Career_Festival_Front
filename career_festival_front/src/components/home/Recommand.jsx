// src/components/home/Recommand.jsx
import React from 'react';
import styled from 'styled-components';
import dummy from "../../db/RecommandedEvents.json";
import {useState, useEffect} from 'react';

import EmptyHeartImg from "../../assets/images/emptyheart.png";
import HeartImg from "../../assets/images/heart.png";


const RecommandCardcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
  border-radius: 32px;

  img{
    width: 30px;
    height: 20px;
    border-radius: 32px;
    margin: 10px 0px;
  }

  h4{
    margin: 0px;
  }
`
const RecommmadInfoWrapper = styled.div`
 
  border: 1px solid red;
`

const HeartIcon = styled.img`
  
`
// const HeartButton = ({isLiked, onclick})

const Recommand = ({mainImg, eventName, recruitmentStart, recruitmentEnd, isLiked, price, profile}) => {
  return (
    <div>
      <h3>추천 행사 사진</h3>
      <ul>
        {recommandedEvents.map(event => (
          <li key={event.id}>
            <strong>{event.title}</strong> - {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommand;
