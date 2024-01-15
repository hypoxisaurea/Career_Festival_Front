// src/components/footer/Footer.jsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  background: #582fff;
  padding: 10px 15%;
  text-align: center;
  color: #ffffff;
`;


const Footer = () => {
  return (
    <FooterContainer>
      <p>footer</p>
      <p>&copy; 2024 Career Festival</p>
    </FooterContainer>
  );
};

export default Footer;
