// src/components/home/HomePageStyle.jsx
import styled from 'styled-components';

const HomePageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const LinkContainer = styled.div`
  display: flex;
  background-color: #f2f2f2; /* 배경색을 원하는 색상으로 지정하세요 */
  padding: 10px; /* 링크 주변의 여백 조절 */
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
`;

const RecommandPlaceContainer = styled.div`
background-color: #f2f2f2; /*임의로 영역 확인용*/ `

const RecommandPersonalContainer = styled.div`
background-color: #f7e4ad; /*임의로 영역 확인용*/ `

export { HomePageContainer, LinkContainer, RecommandPlaceContainer, RecommandPersonalContainer };
