import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axiosInstance from "../axiosInstance";
import "./MainPage.css";

export default function MainPage() {
  const [id, setId] = useState();
  const [question, setQuestion] = useState();
  const [text1, setText1] = useState("답변을 입력해 주세요");
  const [text2, setText2] = useState("답변을 입력해 주세요");
  const [editable, setEditable] = useState(true);

  const getDailyQuestion = async () => {
    await axiosInstance
      .get(`/fixed-question/daily`)
      .then((res) => {
        setId(res.data.id);
        setQuestion(res.data.content);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getDailyQuestion();
  }, []);

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
      let body = {
        content: text1,
        questionId: id,
      };
      axiosInstance
        .post(`/fixedAnswer`, body)
        .then((res) => {
          alert("답변 완료!");
          setEditable(!editable);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="main">
      <link href="https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&display=swap" rel="stylesheet"></link>
      <h2 className="fhtwo">오늘의 질문과 추가 질문에 답변!</h2>

      <div className="Qone">
        <p className="firstQ">{id}번째 기본 질문</p>
        <p className="secondQ">{question}</p>
        <p className="AnsQ">{editable ? <input type="text" placeholder={text1} onChange={handleChange1} onKeyDown={handleKeyDown}/> : <div onClick={editOn}></div>}</p>
      </div>
      <div className="Qtwo">
        <p className="firstQ">
          <br></br>오늘의 추가 질문
        </p>
        <p className="secondQ">"엄마"의 MBTI는?</p>
        <p className="AnsQ">{editable ? <input type="text" placeholder={text2} onChange={handleChange2} onKeyDown={handleKeyDown} /> : <div onClick={editOn}>{text2}</div>}</p>
      </div>
    </div>
  );
}
