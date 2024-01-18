// src/components/home/HomePageStyle.jsx
import styled from 'styled-components';

const HomePageContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  //padding: 20px;

`;

/*{const LinkContainer = styled.div`
  display: flex;
  background-color: #f2f2f2; // 배경색을 원하는 색상으로 지정하세요 
  padding: 10px; // 링크 주변의 여백 조절
  margin-bottom: 20px;

  a {
    margin-right: 10px;
    text-decoration: none;
    color: #007bff;
    font-size: 18px;

    &:hover {
      text-decoration: underline;
    }
  }
`;}*/

const HomePickCarouselContainer = styled.div`
  width: 100%;
`

const RecommandPlaceContainer = styled.div`
  background-color: #f2f2f2; /*임의로 영역 확인용*/
  display: flex;
  flex-direction: column;

  width: 100%;
 ` 

const RecommandPersonalContainer = styled.div`
  background-color: #f7e4ad; /*임의로 영역 확인용*/
  display: flex;
  flex-direction: column;

  width: 100%;
`

const RecommandWraper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export { HomePageContainer, HomePickCarouselContainer, /*LinkContainer*/ RecommandWraper, RecommandPlaceContainer, RecommandPersonalContainer };
