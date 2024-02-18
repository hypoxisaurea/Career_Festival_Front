import React,{useState} from 'react'
import styled from 'styled-components'
import {
  KeywordOptionList,
  KeywordButton,
  Gender,
} from "../signup/ParticipantStyle";


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



const DepartmentContainer = styled.div`
    font-size: 1rem;
    font-weight: 700;

    @media screen and (max-width: 600px) {
        font-size: 2vw;
        }
    
    input{
        padding: 0.7vw 0 0.7vw 0.7vw;
        border: 0.1rem solid #838383;
        border-radius: 8px;
        cursor: pointer;
        background-color: #ffffff;
        text-align: start;
        color: #757575;
        width: 10vw;

        @media screen and (max-width: 600px) {
        font-size: 1.5vw;
        width: 20vw;
        border-radius: 5px;
        border: 0.05rem solid #838383;
        padding: 0.7vw 0 0.7vw 0.7vw;
        }

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

        display: flex;
        flex-direction: column;
        gap: 2vw;
        }
    
`
const VerticalDivider = styled.div`
    border-left: 0.02vw solid #d9d9d9;
    
    @media screen and (max-width: 600px) {
        display: none;
        }

`
const Age = styled.div`
    input{
        padding: 0.7vw 0 0.7vw 0.7vw;
        border: 0.1rem solid #838383;
        border-radius: 8px;
        cursor: pointer;
        background-color: #ffffff;
        text-align: start;
        color: #757575;
        width: 10vw;

        @media screen and (max-width: 600px) {
        font-size: 1.5vw;
        width: 20vw;
        border-radius: 5px;
        border: 0.05rem solid #838383;
        padding: 0.7vw 0 0.7vw 0.7vw;
        }
    }
`



function MypageInfoCorrection() {
    const [affiliation, setAffiliation] = useState(""); // 추가: 소속 상태


    const [selectedKeywords, setSelectedKeywords] = useState([]); // 추가: 선택된 키워드 상태
    // 기타 키워드 입력을 위한 상태 추가
    const [customKeyword, setCustomKeyword] = useState("");
    const [customKeywords, setCustomKeywords] = useState([]);

    // 커리어 키워드 선택 시 호출되는 함수입니다.
    const handleKeywordSelect = (keyword) => {
        // 이미 선택된 키워드인지 확인 후 토글
        if (selectedKeywords.includes(keyword)) {
        setSelectedKeywords((prevKeywords) =>
            prevKeywords.filter((kw) => kw !== keyword)
        );
        } else {
        setSelectedKeywords((prevKeywords) => [...prevKeywords, keyword]);
        }
    };

    // 기타 키워드를 추가하는 함수
    const addCustomKeyword = () => {
    if (customKeyword.trim() !== "") {
        setSelectedKeywords((prevKeywords) => [...prevKeywords, customKeyword]);
        setCustomKeywords((prevCustomKeywords) => [
        ...prevCustomKeywords,
        customKeyword
        ]);
        setCustomKeyword(""); // 입력 필드 초기화
    }
    };

    // 기타 키워드를 삭제하는 함수
    const removeCustomKeyword = (keywordToRemove) => {
        setSelectedKeywords((prevKeywords) =>
        prevKeywords.filter((kw) => kw !== keywordToRemove)
        );
        setCustomKeywords((prevCustomKeywords) =>
        prevCustomKeywords.filter((kw) => kw !== keywordToRemove)
        );
    };








  return (
   <MypageInfoContainer>
        <CareerKeywordContainer>
            <h4>내 커리어 키워드</h4>
            <KeywordOptionList>
                {[
                "창업",
                "라이프",
                "예술",
                "IT/프로그래밍",
                "마케팅",
                "경제/금융",
                "인문/사회",
                "과학기술",
                "디자인",
                "관광/여행"
                ].map((keyword) => (
                <KeywordButton
                    key={keyword}
                    onClick={() => handleKeywordSelect(keyword)}
                    selected={selectedKeywords.includes(keyword)}
                >
                    {keyword}
                </KeywordButton>
                ))}

                {/* 기타 키워드 입력 필드 */}
                <input
                type="text"
                placeholder="기타 키워드 추가"
                value={customKeyword}
                onChange={(e) => setCustomKeyword(e.target.value)}
                />

                {/* 기타 키워드 추가 버튼 */}
                <button onClick={addCustomKeyword}>추가</button>

                {/* 기타 키워드 목록 */}
                {customKeywords.map((customKeyword) => (
                <KeywordButton
                    key={customKeyword}
                    onClick={() => handleKeywordSelect(customKeyword)}
                    selected={selectedKeywords.includes(customKeyword)}
                    onRemove={() => removeCustomKeyword(customKeyword)}
                >
                    {customKeyword}
                </KeywordButton>
                ))}
            </KeywordOptionList>
        </CareerKeywordContainer>

        <DepartmentContainer>
            <h4>내가 속한 학교 혹은 단체 및 회사</h4>
            <input
            type="text"
            placeholder="소속을 입력하세요"
            value={affiliation}
            onChange={(e) => setAffiliation(e.target.value)}
            />
        </DepartmentContainer>

        <PersonalContainer>
            <h4>나이 및 성별</h4>
            <ContentWrapper3>
                <Age>
                    <input type="number" placeholder="숫자만 입력해주세요" />
                </Age>
                <VerticalDivider/>
                <Gender>
                    <input type="radio" id="male" name="gender" value="male" />
                    <label htmlFor="male">남성</label>
                    <input type="radio" id="female" name="gender" value="female" />
                    <label htmlFor="female">여성</label>
                </Gender>
            </ContentWrapper3>
        </PersonalContainer>
   </MypageInfoContainer> 
    
  )
}

export default MypageInfoCorrection