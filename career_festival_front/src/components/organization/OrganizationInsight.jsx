import React from 'react'
import styled from 'styled-components'
import buttonright from '../../assets/images/bannerrightarrow.png'



// 주최자 인사이트 블록
const OrganizationInsightWrapper = styled.div`
    width: auto;
    border: 1px solid red;
    border-radius: 12px;

    display: flex;
    flex-direction: column;
    margin: 1rem auto;
    padding: 2vw 1.5vw;
`
const OrganizationInsightBoxWrapper = styled.div`
    display: flex;
    flex-direction: row;
`
// 구독자 수 인사이트
const OrganizationInsightBox = styled.div`
    border: 1px solid red;

    width: 18vw;
    height: 10vw;
    border-radius: 10px;
    margin-right: 2vw;
    padding: 1.5vw 1.5vw;

    h2{
        font-size: 1.3em;
        font-weight: 700;
        display: flex;
        flex-direction: row;
        align-items: center;
       
        margin: 0;
    }

    div{
       margin-top: 3.5vw;
    }

`



function OrganizationInsight(props) {
  return (
    <OrganizationInsightWrapper>
        <h2 style ={{fontSize: "1rem", fontWeight:"700", marginTop:"0"}}>프로필 인사이트</h2>
        <OrganizationInsightBoxWrapper>
            <OrganizationInsightBox>
                <h2>구독자<span><img style={{width: "0.7rem", marginLeft:"0.5rem"}} src={buttonright} alt='구독자 목록 보기'/></span></h2> {/* 버튼 아이콘 바꾸기 */}
                <div><span style={{fontSize: "2.2em", fontWeight: '350', color:"#582FFF"}}>{props.subscriberNumber}</span>
                <span style={{fontSize: "1em", fontWeight: '400', color:"black"}}>명</span>
                </div>
            </OrganizationInsightBox>
                
            <OrganizationInsightBox>
                <h2>등록행사</h2> 
                <div><span style={{fontSize: "2.2em", fontWeight: '350', color:"#582FFF"}}>{props.uploadedNumber}</span>
                <span style={{fontSize: "1em", fontWeight: '400', color:"black"}}>개의 행사</span>
                </div>
            </OrganizationInsightBox>    
        </OrganizationInsightBoxWrapper>
    </OrganizationInsightWrapper>
  )
}

export default OrganizationInsight