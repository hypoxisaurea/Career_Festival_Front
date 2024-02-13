import React from 'react'
import styled from 'styled-components'


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

function MypageInfo() {
  return (
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
   </MypageInfoContainer> 
    
  )
}

export default MypageInfo