import React, { useState } from "react";
import SignupStyle from "./SignupStyle";

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailVerificationCode, setEmailVerificationCode] = useState("");
  const [agreements, setAgreements] = useState({
    agreement1: false,
    agreement2: false,
    agreement3: false,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSignup = async () => {
    try {
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          password,
          // checkPassword: confirmPassword,
          // email
          // ... 다른 필요한 필드 추가
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
        setIsModalOpen(true);
      } else if (response.status === 500) {
        console.error("Error: Email already exists");
      } else if (response.status === 400) {
        console.error("Error: Bad request");
      } else {
        console.error("Unexpected error");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleModalClose = () => {
    setSelectedOption("");
    setIsModalOpen(false);
  };

  const handleRadioChange = (value) => {
    setSelectedOption(value);
  };

  const handleCheckboxChange = (key) => {
    setAgreements((prevAgreements) => ({
      ...prevAgreements,
      [key]: !prevAgreements[key],
    }));
  };

  const isSignupButtonDisabled = () => {
    return (
      !name ||
      !password ||
      // !confirmPassword ||
      // !email ||
      // !emailVerificationCode ||
      !(agreements.agreement1 && agreements.agreement2 && agreements.agreement3)
    );
  };

  return (
    <div>
      <SignupStyle.SignupContainer>
        <div>회원가입</div>
        <SignupStyle.SocialLoginButtons>
          <button>카카오로 시작하기</button>
          <button>네이버로 시작하기</button>
        </SignupStyle.SocialLoginButtons>
        <SignupStyle.OrDivider>
          <div></div>
          <div>또는</div>
          <div></div>
        </SignupStyle.OrDivider>

        {/* 이름 섹션 */}
        <div className="input-section">
          <div className="input-label">이름</div>
          <SignupStyle.InputField
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* 비밀번호 섹션 */}
        <div className="input-section">
          <div className="input-label">비밀번호</div>
          <SignupStyle.InputField
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="input-label">비밀번호 확인</div>
          <SignupStyle.InputField
            type="password"
            placeholder="비밀번호 확인"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* 이메일 섹션 */}
        <div className="input-section">
          <div className="input-label">이메일(ID)</div>
          <SignupStyle.InputField
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <SignupStyle.EmailVerificationContainer>
          <input
            type="text"
            placeholder="인증번호 6자리를 입력해주세요."
            value={emailVerificationCode}
            onChange={(e) => setEmailVerificationCode(e.target.value)}
          />
          <button>인증하기</button>
        </SignupStyle.EmailVerificationContainer>

        {/* 이용약관 세션 */}
        <SignupStyle.AgreementContainer>
          {Object.entries(agreements).map(([key, value]) => (
            <label key={key}>
              <input
                type="checkbox"
                checked={value}
                onChange={() => handleCheckboxChange(key)}
              />
              {`[필수] ${key}`}
            </label>
          ))}
        </SignupStyle.AgreementContainer>

        {/* 회원가입 버튼 */}
        <SignupStyle.SignupButton
          disabled={isSignupButtonDisabled()}
          onClick={handleSignup}
        >
          회원가입
        </SignupStyle.SignupButton>
      </SignupStyle.SignupContainer>

      {/* 모달 */}
      {isModalOpen && (
        <SignupStyle.ModalOverlay onClick={handleModalClose}>
          <SignupStyle.ModalContent>
            <h2>회원가입 완료!</h2>
            <p>라디오 버튼 선택: {selectedOption}</p>
            <div>
              <label>
                <input
                  type="radio"
                  value="option1"
                  checked={selectedOption === "option1"}
                  onChange={() => handleRadioChange("option1")}
                />
                옵션 1
              </label>
              <label>
                <input
                  type="radio"
                  value="option2"
                  checked={selectedOption === "option2"}
                  onChange={() => handleRadioChange("option2")}
                />
                옵션 2
              </label>
            </div>
            <button onClick={handleModalClose}>닫기</button>
          </SignupStyle.ModalContent>
        </SignupStyle.ModalOverlay>
      )}
    </div>
  );
};

export default Signup;
