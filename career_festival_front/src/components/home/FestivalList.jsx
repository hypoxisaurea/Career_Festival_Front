// src/components/home/FestivalList.jsx
import React from 'react';

const FestivalList = () => {
  // 예시 데이터 (행사 목록)
  const festivals = [
    { id: 1, name: '웹 개발 세미나', date: '2024-02-15' },
    { id: 2, name: '디자인 워크샵', date: '2024-03-10' },
    { id: 3, name: 'IT 컨퍼런스', date: '2024-04-05' },
  ];

  return (
    <div>
      <h3>행사 목록</h3>
      <ul>
        {festivals.map(festival => (
          <li key={festival.id}>
            <strong>{festival.name}</strong> - {festival.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FestivalList;
