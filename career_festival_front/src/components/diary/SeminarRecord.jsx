import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "../diary/Modal";

import Editor from "../EditorComponent";

const RecordContainer = styled.div`
  flex-direction: column;
`;

const InputContainer = styled.div`
  width: 100%;
  margin-top: 2.7vw;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: column;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  input{
    font-size:1vw;
  }
`;

// const BottomContainer = styled.div`
//   width: 100%;
//   display: flex;
//   border: 0.1vw #838383 solid;
//   border-bottom-left-radius: 0.6vw;
//   border-bottom-right-radius: 0.6vw;
// `;

const CountContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 1vw 1vw 1.5vw 0;
  font-size:1vw;
`;

const TitleText = styled.div`
  color: black;
  font-size: 1.4vw;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;
`;

// const TextInput = styled.textarea`
//   width: 100%;
//   height: auto;
//   min-height: 50vw;
//   color: #838383;
//   font-size: 1vw;
//   font-family: "Noto Sans KR";
//   font-weight: 400;
//   word-wrap: break-word;
//   margin-top: 1.2vw;
//   border-top-left-radius: 0.6vw;
//   border-top-right-radius: 0.6vw;
//   border: 0.1vw #838383 solid;
//   padding: 0.5vw 0 0 1vw;
//   box-sizing: border-box;

//   &::placeholder {
//     color: #838383;
//     font-size: 1vw;
//     font-family: "Noto Sans KR";
//     font-weight: 400;
//   }
// `;

const CountText = styled.span`
  color: black;
  font-size: 14px;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;
`;

const CountColorText = styled.span`
  color: #582fff;
  font-size: 14px;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;
`;

function SeminarRecord({ onComplete }) {
  const [inputCount, setInputCount] = useState(0);
  const [isWritten, setIsWritten] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState(null);
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);

    const [desc, setDesc] = useState("");
    function onEditorChange(value) {
      setDesc(value);
    }
    

  // 작성이 완료되었을 때 onComplete 호출
  useEffect(() => {
    if (isWritten) {
      console.log("작성이 완료되었습니다.");
      onComplete(true);
    } else {
      console.log("작성이 아직 완료되지 않았습니다.");
      onComplete(false);
    }
  }, [isWritten, onComplete]);

  console.log("현재 작성 여부:", isWritten);

  //모달
  const onInputHandler = (e) => {
    const count = e.target.value.length;

    setInputCount(count);
    setIsWritten(count > 100); // 여기에서 작성 여부 판별 조건을 설정

    if (count > 5000) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);

      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        setImageWidth(img.width);
        setImageHeight(img.height);
      };
    };

    reader.readAsDataURL(file);
  };

  return (
    <RecordContainer>
      <InputContainer>
        <TitleText>행사 기록</TitleText>
        <ContentContainer>
          <TextContainer>
            <div>
              <Editor value={desc} onChange={onEditorChange} />
            </div>
            {/* <TextInput
              placeholder="다녀온 강연/세미나 내용을 정리해주세요."
              onChange={onInputHandler}
              maxLength="5000"
            /> */}
          </TextContainer>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {image && (
            <img
              src={image}
              alt="Uploaded Image"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "20%",
                maxHeight: "20%",
              }}
            />
          )}
          {showModal && <Modal onClose={() => setShowModal(false)} />}
          <CountContainer>
            <CountColorText>{inputCount}</CountColorText>
            <CountText>/5000자</CountText>
          </CountContainer>
        </ContentContainer>
      </InputContainer>
      {isWritten && <div>작성이 완료되었습니다.</div>}
    </RecordContainer>
  );
}

export default SeminarRecord;
