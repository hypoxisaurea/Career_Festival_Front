// src/components/login/LoginStyle.jsx
import styled from "styled-components";

const LoginContainer = styled.div`
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const InputField = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #582fff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #401f91;
  }
`;

const SignupButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #582fff;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background-color: #401f91;
  }
`;

const LoginStyle = {
  LoginContainer,
  InputField,
  Button,
  SignupButton,
};

export default LoginStyle;
