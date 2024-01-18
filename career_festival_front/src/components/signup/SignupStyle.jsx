import styled from "styled-components";

const SignupContainer = styled.div`
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const InputField = styled.input`
  width: 93.5%;
  margin-bottom: 10px;
  padding: 8px;
`;

const SocialLoginButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  button {
    width: 48%;
    padding: 10px;
    border: 2px solid transparent;
    border-radius: 5px;
    cursor: pointer;
  }

  // 카카오로 시작하기
  button:nth-child(1) {
    background-color: #ffffff;  // 배경색 흰색
    border: 4px solid #fde500;  // 테두리 설정
    color: #181818;
  }
  // 네이버로 시작하기
  button:nth-child(2) {
    background-color: #ffffff;  // 배경색 흰색
    border: 4px solid #06b163;  // 테두리 설정
    color: #181818;
  }
`;

const EmailVerificationContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    width: 48%;
    padding: 10px;
    margin-left: 10px;
    background-color: #582fff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const AgreementContainer = styled.div`
  margin-bottom: 10px;
  label {
    display: block;
    margin-bottom: 5px;
    color: #000000;
  }

`;

const SignupButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#28a745")};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${(props) => (props.disabled ? "#ccc" : "#218838")};
  }
`;

const SignupStyle = {
  SignupContainer,
  InputField,
  SocialLoginButtons,
  EmailVerificationContainer,
  AgreementContainer,
  SignupButton,
};

export default SignupStyle;
