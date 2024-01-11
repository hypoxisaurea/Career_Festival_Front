// src/components/home/Recommand.jsx
import React from 'react';

const Recommand = () => {
  // 예시 데이터 (행사 목록)
  const recommandedEvents = [
    { id: 1, title: '좋은 기업 채용박람회', date: '2024-02-15' },
    { id: 2, title: 'IT 기술 세미나', date: '2024-03-10' },
    { id: 3, title: '디자인 워크샵', date: '2024-04-05' },
  ];

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
