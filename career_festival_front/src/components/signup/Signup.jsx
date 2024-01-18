// src/components/signup/Signup.jsx
import React, { useState } from 'react';
import SignupStyle from './SignupStyle';

const Signup = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [emailVerificationCode, setEmailVerificationCode] = useState('');
  const [agreement1, setAgreement1] = useState(false);
  const [agreement2, setAgreement2] = useState(false);
  const [agreement3, setAgreement3] = useState(false);

  const handleSignup = async () => {
    try {
      // const response = await fetch('https://example.com/api/signup', {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          password,
          checkPassword: confirmPassword,
          email,
          // ... 다른 필요한 필드 추가
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);
      } else if (response.status === 500) {
        console.error('Error: Email already exists');
      } else if (response.status === 400) {
        console.error('Error: Bad request');
      } else {
        console.error('Unexpected error');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const isSignupButtonDisabled = () => {
    return (
      !name ||
      !password ||
      !confirmPassword ||
      !email ||
      !emailVerificationCode ||
      !(agreement1 && agreement2 && agreement3)
    );
  };

  return (
    <SignupStyle.SignupContainer>
      <SignupStyle.SocialLoginButtons>
        <button>카카오로 시작하기</button>
        <button>네이버로 시작하기</button>
      </SignupStyle.SocialLoginButtons>

      <SignupStyle.InputField
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <SignupStyle.InputField
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <SignupStyle.InputField
        type="password"
        placeholder="비밀번호 확인"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <SignupStyle.InputField
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <SignupStyle.EmailVerificationContainer>
        <input
          type="text"
          placeholder="이메일 인증번호"
          value={emailVerificationCode}
          onChange={(e) => setEmailVerificationCode(e.target.value)}
        />
        <button>인증하기</button>
      </SignupStyle.EmailVerificationContainer>

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

      <SignupStyle.SignupButton
        disabled={isSignupButtonDisabled()}
        onClick={handleSignup}
      >
        회원가입
      </SignupStyle.SignupButton>
    </SignupStyle.SignupContainer>
  );
};

export default Signup;
