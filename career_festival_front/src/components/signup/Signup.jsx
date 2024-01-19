// src/components/signup/Signup.jsx
import React, { useState } from "react";
import styled from "styled-components";
import SignupStyle from "./SignupStyle";

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailVerificationCode, setEmailVerificationCode] = useState("");
  const [agreement1, setAgreement1] = useState(false);
  const [agreement2, setAgreement2] = useState(false);
  const [agreement3, setAgreement3] = useState(false);

  // 모달 관련 상태
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    // 모달에서 입력한 데이터를 저장할 상태
  });

  const handleSignup = async () => {
    // 모달 열기 부분 추가
    openModal();
  };

  const isSignupButtonDisabled = () => {
    return (
      !name ||
      !password ||
      // !confirmPassword ||
      // !email ||
      // !emailVerificationCode ||
      !(agreement1 && agreement2 && agreement3)
    );
  };

  const Modal = ({ closeModal, handleModalNext }) => {
    const [role, setRole] = useState(""); // 선택된 라디오 버튼 값을 저장

    const handleOptionChange = (e) => {
      setRole(e.target.value);
    };

    const handleNextButtonClick = () => {
      // "다음" 버튼이 눌리면 선택된 데이터를 상태에 저장하고 모달을 닫음
      setModalData({ role });
      closeModal();
      handleModalNext(role);
    };

    return (
      <SignupStyle.Modal>
        {/* 무조건 나타나는 환영 메시지 */}
        <SignupStyle.CheckIcon
          src={require("../../assets/images/check-icon.png")}
          alt="Check Icon"
        />
        <SignupStyle.WelcomeText>
          <p><span>{name}</span>님 환영합니다!</p>
          <br />
          오늘부터 행사의 참여자도, 주최자도 될 수 있어요.
        </SignupStyle.WelcomeText>

        <SignupStyle.WelcomeText2>
          어떤 용도로 사용하실건가요?
        </SignupStyle.WelcomeText2>

        <SignupStyle.ModalRadioContainer>
          <label>
            <input
              type="radio"
              value="participant"
              checked={role === "participant"}
              onChange={handleOptionChange}
            />
            신청자<br/>
            행사를 신청하고 참여합니다!
          </label>
          <label>
            <input
              type="radio"
              value="organizer"
              checked={role === "organizer"}
              onChange={handleOptionChange}
            />
            주최자<br/>
            행사를 개설하고 운영합니다!
          </label>
        </SignupStyle.ModalRadioContainer>

        <SignupStyle.ModalButton onClick={handleNextButtonClick}>
          다음
        </SignupStyle.ModalButton>
      </SignupStyle.Modal>
    );
  };

  const handleModalNext = async (role) => {
    // 모달에서 입력한 데이터를 상태에 저장
    // 예시: setModalData({ field1: modalField1, field2: modalField2, ... });
    // 필요에 따라 모달에서 입력한 데이터를 상태에 저장하도록 수정
    // 모달에서 선택한 데이터를 가져와서 활용
    const selectedData = modalData.selectedOption; // 예시: 모달에서 선택한 데이터의 필드명에 따라 수정
    try {
      // fetch 함수 호출
      // const response = await fetch('https://example.com/api/signup', {

      // 백엔드에 보내지는 데이터
      console.log("Sending data to the server:", {
        name,
        password,
        checkPassword: confirmPassword,
        email,
        role
      });

      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          password,
          checkPassword: confirmPassword,
          email,
          role
          // ... 다른 필요한 필드 추가
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
      } else if (response.status === 500) {
        console.error("Error: Email already exists");
      } else if (response.status === 400) {
        console.error("Error: Bad request");
      } else {
        console.error("Unexpected error");
      }
      // 모달에서의 다음 처리 함수 호출
      // handleModalNext(); // 이 부분을 주석 처리해주세요.
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // 모달 열기 함수
  const openModal = () => {
    console.log("Opening modal");
    setModalOpen(true);
    document.body.style.overflow = "hidden"; // 모달이 열릴 때 스크롤을 막음
  };

  // 모달 닫기 함수
  const closeModal = () => {
    console.log("Closing modal");
    setModalOpen(false);
    document.body.style.overflow = "auto"; // 모달이 닫힐 때 스크롤을 다시 허용
    // 모달에서 입력한 데이터 초기화
    setModalData({});
  };

  return (
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
        <label>
          <input
            type="checkbox"
            checked={agreement1}
            onChange={() => setAgreement1(!agreement1)}
          />
          [필수] 만14세 이상입니다.
        </label>
        <label>
          <input
            type="checkbox"
            checked={agreement2}
            onChange={() => setAgreement2(!agreement2)}
          />
          [필수] 이용약관
        </label>
        <label>
          <input
            type="checkbox"
            checked={agreement3}
            onChange={() => setAgreement3(!agreement3)}
          />
          [필수] 개인정보 수집·이용 동의서
        </label>
      </SignupStyle.AgreementContainer>

      {/* 회원가입 버튼 */}
      <SignupStyle.SignupButton
        disabled={isSignupButtonDisabled()}
        onClick={handleSignup}
      >
        회원가입
      </SignupStyle.SignupButton>
      {/* 모달 컴포넌트 */}
      {modalOpen && (
        <>
          <SignupStyle.Backdrop onClick={closeModal} />
          <Modal closeModal={closeModal} handleModalNext={handleModalNext} />
        </>
      )}
    </SignupStyle.SignupContainer>
  );
};
export default Signup;
