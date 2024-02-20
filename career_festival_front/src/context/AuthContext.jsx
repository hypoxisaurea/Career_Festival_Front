import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"; // useNavigate를 import합니다.
import axios from "axios"; // axios를 import합니다.
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(""); // 토큰 상태 추가
  const navigate = useNavigate(); // useNavigate를 통해 navigate 함수를 가져옵니다.
  useEffect(() => {
    // 페이지 로드 시 로컬 스토리지에서 로그인 정보 및 토큰 확인
    const loggedIn = localStorage.getItem("isLoggedIn");
    const userInfo = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    if (loggedIn && userInfo && storedToken) {
      setIsLoggedIn(true);
      setUser(userInfo);
      setToken(storedToken); // 저장된 토큰 상태로 설정
      console.log("로컬 스토리지에서 로그인 정보 및 토큰을 가져왔습니다.");
    }
  }, []);
  // -----------------------------------------------------------------------------
  // - Name : getTokenFromLocalStorage
  // - Desc : 로컬 스토리지에서 토큰을 가져오는 함수
  // -----------------------------------------------------------------------------
  const getTokenFromLocalStorage = () => {
    const token = localStorage.getItem("token");
    return token;
  };
  // -----------------------------------------------------------------------------
  // - Name : login
  // - Desc : 사용자를 로그인하는 함수
  // - Input
  //   1) username : 사용자 이름
  //   2) password : 사용자 비밀번호
  // - Output
  // -----------------------------------------------------------------------------
  const login = async (username, password) => {
    try {
      console.log("로그인 시도 중...");
      // 서버에 로그인 정보를 전송하고 응답을 기다림
      const response = await fetch("http://localhost:9000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      if (response.ok) {
        console.log("로그인 성공!");
        const userData = await response.json();
        const jwtToken = response.headers.get("Authorization"); // 토큰 헤더에서 추출
        // 사용자 정보를 추가로 가져오는 API 호출
        const userInfoResponse = await fetch("http://localhost:9000/", {
          method: "GET",
          headers: {
            Authorization: jwtToken,
          },
        });
        if (userInfoResponse.ok) {
          const userInfo = await userInfoResponse.json();

          // 로컬 스토리지에 사용자 정보 저장
          localStorage.setItem("isLoggedIn", "true");
          // localStorage.setItem("user", JSON.stringify(userInfo));
          localStorage.setItem("token", jwtToken); // 토큰 저장

          setIsLoggedIn(true);
          setUser(userInfo);
          console.log("로그인 정보 및 토큰이 로컬 스토리지에 저장되었습니다.");
        } else {
          console.error(
            "사용자 정보 가져오기 실패:",
            userInfoResponse.statusText
          );
        }
      } else {
        console.error("로그인 실패:", response.statusText);
      }
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };
  // -----------------------------------------------------------------------------
  // - Name : logout
  // - Desc : 사용자를 로그아웃하는 함수
  // -----------------------------------------------------------------------------
  const logout = () => {
    // 로그아웃 시 로컬 스토리지에서 로그인 정보 및 인증 정보 삭제
    localStorage.clear();
    setIsLoggedIn(false);
    setUser(null);
    console.log("로그인 정보 및 인증 정보가 로컬 스토리지에서 삭제되었습니다.");
  };
  // -----------------------------------------------------------------------------
  // - Name : saveAdditionalInfo
  // - Desc : 서버에 부가정보를 저장하는 함수
  // - Input
  //   1) userData : 사용자 데이터
  // -----------------------------------------------------------------------------
  const saveAdditionalInfo = async (userData) => {
    try {
      console.log("부가정보 저장 함수 호출됨 ...");

      // 토큰 가져오기
      const token = getTokenFromLocalStorage();
      const response = await fetch("http://localhost:9000/participant", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        console.log("부가정보 저장 완료:", response.data);
        // 저장이 성공하면 홈 페이지로 이동합니다.
        navigate("/");
      } else {
        console.error("부가정보 저장 실패:", response.statusText);
      }
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  // -----------------------------------------------------------------------------
  // - Name : saveAdditionalOOInfo
  // - Desc : 서버에 주최자(Organizer) 부가정보를 저장하는 함수
  // - Input
  //   1) userData : 사용자 데이터
  // -----------------------------------------------------------------------------
  const saveAdditionalOOInfo = async (userData) => {
    try {
      console.log("부가정보 저장 함수 호출됨 ...");

      // 토큰 가져오기
      const token = getTokenFromLocalStorage();
      const response = await fetch("http://localhost:9000/organizer", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        console.log("부가정보 저장 완료:", response.data);
        // 저장이 성공하면 홈 페이지로 이동합니다.
        navigate("/");
      } else {
        console.error("부가정보 저장 실패:", response.statusText);
      }
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };
  // -----------------------------------------------------------------------------
  // - Name : registerEventStep12
  // - Desc : 주최자 등록하기 1 + 2 단계 함수
  // - Input
  //   1) formData : 주최자 등록 폼 데이터
  // -----------------------------------------------------------------------------
  const registerEventStep12 = (formData) => {
    try {
      console.log("주최자 등록 함수가 호출되었습니다.");
      // 토큰 가져오기
      const token = getTokenFromLocalStorage();
      // API 엔드포인트 설정
      const url = `http://localhost:9000/event/organizer`;
      console.log("URL:" + url);
      // Axios를 사용하여 데이터 전송
      axios
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `${token}`,
          },
        })
        .then((response) => {
          console.log("주최자 등록 완료:", response.data);
          // 다음 단계로 이동하거나 필요에 따라 다른 작업 수행
          navigate("/register/Level3");
        })
        .catch((error) => {
          console.error("주최자 등록 실패:", error.message);
        });
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };
  // -----------------------------------------------------------------------------
  // - Name : testtest
  // - Desc : 서버와 통신을 테스트하는 함수
  // -----------------------------------------------------------------------------
  const testtest = async () => {
    try {
      console.log("서버랑 통신을 테스트합니다.");
      // API 엔드포인트 설정
      const url = "http://localhost:9000/event/organizer";
      // 토큰 가져오기
      const token = getTokenFromLocalStorage();
      // FormData 객체 생성
      const formData = new FormData();
      // 이미지 파일 추가
      const imagePath =
        "https://careerfestival.s3.ap-northeast-2.amazonaws.com/event_main/684f126a-4107-4935-8d57-ae13938f31b6imagetest.png"; // 변경 필요
      const imageFile = await fetch(imagePath).then((response) =>
        response.blob()
      );
      formData.append("organizerProfileImage", imageFile);
      // 기타 필드 추가
      formData.append("organizerName", "ㅐㅐㅐㅐ");
      // Axios를 사용하여 데이터 전송
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${token}`,
        },
      });
      console.log("서버 응답:", response.data);
    } catch (error) {
      // 오류 처리
      console.error("서버와의 통신 중 오류 발생:", error.message);
    }
  };

  //
  // 마이 페이지
  //
  // AuthProvider 컴포넌트 내에 새로운 함수 추가
  const fetchMypageInfo = async () => {
    try {
      console.log("마이페이지 정보를 가져오는 중...");
      // 토큰 가져오기
      const token = getTokenFromLocalStorage();
      // 서버에 GET 요청 보내기
      const response = await axios.get("http://localhost:9000/mypage", {
        headers: {
          Authorization: `${token}`,
        },
      });
      console.log("서버 응답:", response); // 수정된 부분: 응답 전체 객체 출력
      if (response.status === 200) {
        const { userInfo } = response.data; // userInfo 객체 추출
        // userInfo 객체를 로컬 스토리지에 저장
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        console.log("마이페이지 정보:", userInfo);
        // 가져온 정보를 상태에 설정하거나 필요한 작업 수행
      } else {
        console.error("마이페이지 정보 가져오기 실패:", response.statusText);
      }
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };
  //
  // 마이페이지 수정하기
  //
  // AuthProvider 컴포넌트 내에 새로운 함수 추가
  const updateMypageInfo = async (updatedInfo) => {
    try {
      console.log("마이페이지 정보를 업데이트하는 중...");
      // 토큰 가져오기
      const token = getTokenFromLocalStorage();
      // 서버에 PATCH 요청 보내기
      const response = await axios.patch(
        "http://localhost:9000/mypage/update",
        updatedInfo,
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("서버 응답:", response); // 응답 전체 객체 출력
      if (response.status === 200) {
        console.log("마이페이지 정보 업데이트 성공!");
        // 업데이트가 성공하면 필요한 작업 수행
        // 예: 페이지 리로드 또는 다른 작업 수행
      } else {
        console.error("마이페이지 정보 업데이트 실패:", response.statusText);
      }
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  // AuthProvider 컴포넌트 내에 새로운 함수 추가
  const registerEvent = async (addData) => {
    try {
      console.log("행사 등록 요청 중...");

      // 토큰 가져오기
      const token = getTokenFromLocalStorage();

      // 서버에 POST 요청 보내기
      const response = await axios.post(
        "http://localhost:9000/event/register/",
        addData,
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("서버 응답:", response); // 응답 전체 객체 출력

      if (response.status === 200) {
        console.log("행사 등록 성공!");
        alert("행사 등록 완료");
        navigate("/");
      } else {
        console.error("행사 등록 실패:", response.statusText);
      }
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  //
  // 메인페이지
  //
  // AuthProvider 컴포넌트 내에 새로운 함수 추가
  const fetchMainpageInfo = async () => {
    try {
      console.log("메인페이지 정보를 가져오는 중...");
      // 토큰 가져오기
      const token = getTokenFromLocalStorage();

      // 서버에 GET 요청 보내기
      const response = await axios.get("http://localhost:9000", {
        headers: {
          Authorization: `${token}`,
        },
      });
      console.log("서버 응답:", response); // 수정된 부분: 응답 전체 객체 출력

      if (response.status === 200) {
        const { userInfo } = response.data; // userInfo 객체 추출

        // userInfo 객체를 로컬 스토리지에 저장
        localStorage.setItem("userInfo", JSON.stringify(userInfo));

        console.log("메인페이지 정보:", userInfo);
        // 가져온 정보를 상태에 설정하거나 필요한 작업 수행
      } else {
        console.error("메인페이지 정보 가져오기 실패:", response.statusText);
      }
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };
  //
  // 메인페이지
  //
  // AuthProvider 컴포넌트 내에 새로운 함수 추가
  const fetchfestivalListpageInfo = async () => {
    try {
      console.log("메인페이지 정보를 가져오는 중...");
      // 토큰 가져오기
      const token = getTokenFromLocalStorage();
      // 서버에 GET 요청 보내기
      const response = await axios.get("http://localhost:9000/festival-list", {
        headers: {
          Authorization: `${token}`,
        },
      });
      console.log("서버 응답:", response); // 수정된 부분: 응답 전체 객체 출력
      if (response.status === 200) {
        const { userInfo } = response.data; // userInfo 객체 추출
        // userInfo 객체를 로컬 스토리지에 저장
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        console.log("메인페이지 정보:", userInfo);
        // 가져온 정보를 상태에 설정하거나 필요한 작업 수행
      } else {
        console.error("메인페이지 정보 가져오기 실패:", response.statusText);
      }
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  //
  // 디테일 페이지
  //
  // AuthProvider 컴포넌트 내에 새로운 함수 추가
  const fetchEventDetailData = async () => {
    try {
      // 토큰 가져오기
      const token = getTokenFromLocalStorage();
      const eventId = window.location.pathname.split("/").pop();

      const response = await axios.get(
        `http://localhost:9000/event/${eventId}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      console.log("서버 응답:", response);

      return response.data;
    } catch (error) {
      console.error("이벤트 정보를 가져오지 못했습니다", error);
      throw error;
    }
  };

  const fetchEventOrganizerData = async () => {
    try {
      // 토큰 가져오기
      const token = getTokenFromLocalStorage();
      const eventId = window.location.pathname.split("/").pop();

      const response = await axios.get(
        `http://localhost:9000/event/${eventId}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      console.log("서버 응답:", response);

      return response.data;
    } catch (error) {
      console.error("이벤트 정보를 가져오지 못했습니다", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        login,
        logout,
        saveAdditionalInfo,
        saveAdditionalOOInfo,
        registerEventStep12,
        testtest,
        fetchMypageInfo,
        updateMypageInfo,
        registerEvent,
        fetchMainpageInfo,
        fetchfestivalListpageInfo,
        fetchEventDetailData,
        fetchEventOrganizerData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth는 AuthProvider 안에서 사용되어야 합니다.");
  }
  return context;
};
