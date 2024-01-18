import React from 'react'
import styled from 'styled-components';


const HomePickCarouselContainer =styled.div`
  background-color: #f7e4ad; /*임의로 영역 확인용*/
  display: flex;
  flex-direction: column;
  img{
    width: 300px;
    height: 200px;
  }
`

export default function HomePickCarousel() {
  return (

    <HomePickCarouselContainer>
      커리어 페스티벌 Pick!
      <img src = "https://dummyimage.com/600x400/d9d9d9/fff" alt='careerpick사진'/>
    </HomePickCarouselContainer>
  );   
}