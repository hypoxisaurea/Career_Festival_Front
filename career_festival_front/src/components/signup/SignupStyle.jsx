import styled from "styled-components";

const SignupContainer = styled.div`
  max-width: 300px;
  max-height: 300px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 400px;
  padding: 20px;
`;

const InputField = styled.input`
  width: 93.5%;
  margin-bottom: 10px;
  padding: 8px;
`;

const SocialLoginButtons = styled.div`
  display: flex;
  flex-direction: column;  // 위아래로 나타나도록 설정
  align-items: center;     // 가운데 정렬
  margin-top: 20px;
  margin-bottom: 20px;

  button {
    width: 100%;             // 버튼 너비 조절
    margin-bottom: 10px;    // 버튼 간격 조절
    padding: 10px;
    border: 3px solid transparent;
    border-radius: 5px;
    cursor: pointer;
  }

  // 카카오로 시작하기
  button:nth-child(1) {
    background-color: #ffffff;
    border: 3px solid #fde500;
    color: #181818;
  }
  // 네이버로 시작하기
  button:nth-child(2) {
    background-color: #ffffff;
    border: 3px solid #2feb00;
    color: #181818;
  }
`;

const OrDivider = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;

  div {
    flex: 1;
    height: 1px;
    background-color: #ccc;
    margin: 0 10px;
  }
`;

const EmailVerificationContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    width: 48%;
    background-color: #ffffff;
    border: 3px solid #582fff;
    padding: 10px;
    margin-left: 10px;
    color: #582fff;  // 텍스트 색상을 버튼 테두리 색상과 일치하도록 수정
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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
`;

const SignupStyle = {
  SignupContainer,
  InputField,
  SocialLoginButtons,
  EmailVerificationContainer,
  AgreementContainer,
  SignupButton,
  OrDivider,
  ModalOverlay,
  ModalContent,
};

export default SignupStyle;
