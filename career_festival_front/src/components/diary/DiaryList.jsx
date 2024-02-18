  import React from "react";
  import { useState, useEffect, useCallback } from "react";
  import styled from "styled-components";
  import { Link } from "react-router-dom";
  import Pagination from "./Pagination";
  import dummy from "../../db/Diary.json";

  const ListContainer = styled.div``;

  const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2vw;
    margin-bottom: 5vw;
  `;

  const DiaryContainer = styled.div`
    display: flex;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0.6vw;
    border: 1px #d9d9d9 solid;
  `;

  const ColorContainer = styled.div`
    width: 1.5vw;
    height: 100%;
    background: #582fff;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    display: flex;
  `;

  const DiaryContentContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 25vw;
    height: 15vw;
    background: white;
    padding: 2vw 1.5vw 2vw 2.3vw;
  `;

  const HorizontalDivider = styled.div`
    width: 100%;
    height: 0.2vw;
    background: #d9d9d9;
    margin: 0.5vw 0 0.5vw 0;
  `;

const EventTitleText = styled.div`
  color: black;
  font-size: 1.2vw;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;
  display: flex;
  justify-content: space-between;
  span {
    margin-right: 1vw; // 각 요소 사이의 간격을 조절합니다.
  }
`;

  const DiaryTitleText = styled.div`
    color: black;
    font-size: 1.1vw;
    font-family: "Noto Sans KR";
    font-weight: 700;
    word-wrap: break-word;
    text-align: center;
    margin-top: -2vw;
  `;

  const TypeTagContainer = styled.div`
    padding: 0.25vw 0.6vw 0.25vw 0.6vw;
    display: inline-block;

    border-radius: 1vw;
    border: 1px #838383 solid;

    color: #838383;
    font-size: 0.9vw;
    font-family: "Noto Sans KR";
    font-weight: 500;
    word-wrap: break-word;
  `;

  const GenreTagContainer = styled.div`
    padding: 0.25vw 0.6vw 0.25vw 0.6vw;
    margin-left: 0.5vw;
    display: inline-block;

    border-radius: 1vw;
    border: 1px #582fff solid;

    color: #582fff;
    font-size: 0.9vw;
    font-family: "Noto Sans KR";
    font-weight: 500;
    word-wrap: break-word;
  `;

  const HeaderContainer = styled.div`
    display: block;
  `;

  const TagContainer = styled.div`
    display: flex;
    margin-top: auto;
  `;

  const QuoteContainer = styled.div`
    display: flex;
    justify-content: center;
    gap:20vw;
    font-size:4vw;
  `;

    const Left = styled.div`
      display: flex;
      justify-content: center;
      color:#838383;
    `;

     const Right = styled.div`
       display: flex;
       justify-content: center;
       color: #838383;
     `;


  const DiaryList = () => {
    // 페이징 관련 state
    const itemsPerPage = 4; // 페이지당 보여줄 항목 수
    const [currentPage, setCurrentPage] = useState(1);

    // 페이지에 해당하는 데이터를 반환하는 함수
    const getCurrentPageData = useCallback(() => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const myDiary = dummy.DiaryList || [];
      return myDiary.slice(startIndex, endIndex);
    }, [currentPage, itemsPerPage]);

    // 페이지 변경 시 호출되는 함수
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };

    return (
      <ListContainer>
        <ContentContainer>
          {getCurrentPageData().map((item) => (
            <DiaryContainer>
              <ColorContainer />
              <DiaryContentContainer>
                <HeaderContainer>
                  <EventTitleText>
                    <span>{item.eventTitle}</span>
                    <span>{item.uploadedDate}</span>
                  </EventTitleText>
                </HeaderContainer>
                
                <HorizontalDivider />

                <QuoteContainer>
                  <Left>❝</Left>
                  <Right>❞</Right>
                </QuoteContainer>

                <DiaryTitleText>{item.diaryTitle}</DiaryTitleText>

                <TagContainer>
                  <TypeTagContainer>{item.type}</TypeTagContainer>
                  <GenreTagContainer>{item.genre}</GenreTagContainer>
                </TagContainer>
              </DiaryContentContainer>
            </DiaryContainer>
          ))}
        </ContentContainer>

        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(dummy.DiaryList.length / itemsPerPage)}
          onPageChange={handlePageChange}
        />
      </ListContainer>
    );
  };

  export default DiaryList;
