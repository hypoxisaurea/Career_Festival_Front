
// src/components/login/Login.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginStyle from "./LoginStyle"; // 스타일 파일 불러오기

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // 로그인 로직 구현
    console.log("Username:", username);
    console.log("Password:", password);
    // 실제 로그인 처리를 여기에 추가하세요.
  };

  return (
    <LoginStyle.LoginContainer>
      <LoginStyle.InputField
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <LoginStyle.InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <LoginStyle.Button onClick={handleLogin}>Login</LoginStyle.Button>
      <Link to="/signup">
        <LoginStyle.SignupButton>회원가입하기</LoginStyle.SignupButton>
      </Link>
    </LoginStyle.LoginContainer>
  );
};

export default Login;


// // src/components/LoginComponent.js
// import React, { useState } from "react";

// const LoginComponent = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     // 로그인 로직 구현
//     console.log("Username:", username);
//     console.log("Password:", password);
//     // 실제 로그인 처리를 여기에 추가하세요.
//   };

//   return (
//     <div>
//       <label>
//         Username:
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </label>
//       <br />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default LoginComponent;
