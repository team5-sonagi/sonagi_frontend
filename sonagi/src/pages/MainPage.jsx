import React from "react";
import { useState } from "react";
import "./MainPage.css";

export default function MainPage() {
  const [text1, setText1] = useState("답변을 입력해 주세요");
  const [text2, setText2] = useState("답변을 입력해 주세요");
  const [editable, setEditable] = useState(true);

  const editOn = () => {
    setEditable(true);
  };
  const handleChange1 = (e) => {
    setText1(e.target.value);
  };

  const handleChange2 = (e) => {
    setText2(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setEditable(!editable);
    }
  };

  return (
    <div className="main">
      <link href="https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&display=swap" rel="stylesheet"></link>
      <h2 className="fhtwo">오늘의 질문과 추가 질문에 답변!</h2>

      <div className="Qone">
        <p className="firstQ">
          1번째 기본 질문</p>
        <p className="secondQ">
          당신이 어떤 사람인지 소개해 주세요. TMI도 좋아요!</p>
        <p className="AnsQ">
        {editable ? (
        <input type="text" value={text1} onChange={handleChange1} onKeyDown={handleKeyDown} />
        ) : (<div onClick={editOn}>{text1}</div>)}
        </p>
      </div>
      <div className="Qtwo">
        <p className="firstQ">
          <br></br>오늘의 추가 질문</p>
        <p className="secondQ">
          "엄마"의 MBTI는?</p>
        <p className="AnsQ">
        {editable ? (
        <input type="text" value={text2} onChange={handleChange2} onKeyDown={handleKeyDown} />
        ) : (<div onClick={editOn}>{text2}</div>)}
        </p>
      </div>
    </div>
  );
}
