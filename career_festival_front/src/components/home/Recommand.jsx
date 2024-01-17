// src/components/home/Recommand.jsx
import React from 'react';
import styled from 'styled-components';

const RecommandCardcontainer = styled.div`

`

const Recommand = () => {
  // 예시 데이터 (위치 기반 행사 목록)
  const recommandedEventsPlace = [
    { id: 1, title: '좋은 기업 채용박람회', startdate: '2024-02-15', enddate:'2024-02-16' },
    { id: 2, title: 'IT 기술 세미나', startdate: '2024-03-10', enddate:'2024-03-11' },
    { id: 3, title: '디자인 워크샵1', startdate: '2024-04-05', enddate:'2024-04-06' },
    { id: 4, title: '디자인 워크샵2', startdate: '2024-04-06', enddate:'2024-04-07' },
    { id: 5, title: '디자인 워크샵3', startdate: '2024-04-07', enddate:'2024-04-08' },
    { id: 6, title: '디자인 워크샵4', startdate: '2024-04-08', enddate:'2024-04-09' },
  ];

  // 예시 데이터 (개인 기반 행사 목록)
  const recommandedEventsPersonal = [
    { id: 1, title: '좋은 기업 채용박람회2', startdate: '2024-02-15', enddate:'2024-02-16' },
    { id: 2, title: 'IT 기술 세미나2', startdate: '2024-03-10', enddate:'2024-03-11' },
    { id: 3, title: '디자인 워크샵12', startdate: '2024-04-05', enddate:'2024-04-06' },
  ];

  return (
   /* <div>
      <h3>추천 행사 사진</h3>
      <ul>
        {recommandedEventsPlace.map(event => (
          <li key={event.id}>
            <strong>{event.title}</strong> - {event.date}
          </li>
        ))}
      </ul>
    </div>*/
    <RecommandCardcontainer>
      <h3>추천 행사 사진</h3>
      <ul>
        {recommandedEventsPlace.map(event => (
          <li key={event.id}>
            <strong>{event.title}</strong> - {event.date}
          </li>
        ))}
      </ul>
    </RecommandCardcontainer>
  );
};

export default Recommand;



