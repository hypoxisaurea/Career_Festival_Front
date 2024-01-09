// 디자인이 아직 안나온듯?
// src/components/home/Diary.jsx
import React from 'react';

const Diary = () => {
  // 예시 데이터 (다이어리 목록)
  const diaryEntries = [
    { id: 1, content: '오늘의 소감: 좋은 경험이었습니다.', date: '2024-02-15' },
    { id: 2, content: '행사에서 배운 것을 정리 중입니다.', date: '2024-03-10' },
    { id: 3, content: '디자인 워크샵 참여 후 느낀 점을 기록 중입니다.', date: '2024-04-05' },
  ];

  return (
    <div>
      <h3>다이어리</h3>
      <ul>
        {diaryEntries.map(entry => (
          <li key={entry.id}>
            <strong>{entry.date}</strong> - {entry.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Diary;
