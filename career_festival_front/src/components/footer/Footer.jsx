// src/components/footer/Footer.jsx
import React from 'react';
import FooterStyle from './FooterStyle'; // 스타일 파일 불러오기

const Footer = () => {
  return (
    <FooterStyle.FooterContainer>
      <p>footer</p>
      <p>&copy; 2024 Career Festival</p>
    </FooterStyle.FooterContainer>
  );
};

export default Footer;
