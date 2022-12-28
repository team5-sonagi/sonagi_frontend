import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../axiosInstance";
import "./QuestionPage.css";

const questionList = [
  {
    id: 1,
    content: "당신이 어떤 사람인지 소개해 주세요. TMI도 좋아요!",
  },
  {
    id: 2,
    content: "가족들을 서로 소개해 주세요.",
  },
  {
    id: 3,
    content: "가족들과 함께 듣고 싶은 노래를 알려주세요",
  },
  {
    id: 4,
    content: "엄마가 좋아하는 것(음식, 물건 등…)은?",
  },
  {
    id: 5,
    content: "아빠가 좋아하는 것(음식, 물건 등…)은?",
  },
  {
    id: 6,
    content: "가족 각자가 닮은 동물은 무엇인가요?",
  },
  {
    id: 7,
    content: "가족들의 취향을 맞춰보세요! 짬뽕/짜장면?",
  },
  {
    id: 8,
    content: "가족들과 함께 시작하고 싶은 취미활동이 있나요?",
  },
  {
    id: 9,
    content: "진심으로 미안했지만 제대로 사과하지 못했던 일이 있다면 무엇인가요?",
  },
  {
    id: 10,
    content: "풋풋했던 우리 부모님의 첫 데이트! 어땠는지 얘기가 듣고 싶어요!",
  },
  {
    id: 11,
    content: "가족들에게 말 못한 서운함이 있다면 오늘 털어놓아 보아요.",
  },
  {
    id: 12,
    content: "정신없는 하루를 보낸 가족들에게 힘 나는 한 마디를 해 주세요.",
  },
  {
    id: 13,
    content: "가족여행을 가기 가장 좋은 계절과 그 이유는 무엇인가요?",
  },
  {
    id: 14,
    content: "내 기억 속 가족들은 어떤 사람이었나요?",
  },
  {
    id: 15,
    content: "일주일동안 가족들을 보지 못한다면 ㅠㅠ?",
  },
  {
    id: 16,
    content: "당신이 가족들에게 사랑을 표현할 때 가장 중요하게 생각하는 것은?",
  },
  {
    id: 17,
    content: "난 반찬 '이것'만 있으면 밥 두 공기는 먹을 수 있다.",
  },
  {
    id: 18,
    content: "가족에게 사랑한다는 말을 들었을 때의 기분은 어땠나요?",
  },
  {
    id: 19,
    content: "자신만의 매력을 소개해 주세요!",
  },
  {
    id: 20,
    content: "십 년뒤 지금의 당신을 돌아본다면 후회할 것 같은 점은?",
  },
  {
    id: 21,
    content: "십 년뒤 지금의 당신을 돌아본다면 뿌듯할 것 같은 점은?",
  },
  {
    id: 22,
    content: "달라도 너무 달라! 우리 가족이랑 나는 이것만큼은 정반대인 것 같은 점은?",
  },
  {
    id: 23,
    content: "당신이 가장 당신다워지는 순간은 언제인가요?",
  },
  {
    id: 24,
    content: "당신은 스트레스를 어떻게 해소하는 편이가요?",
  },
  {
    id: 25,
    content: "당신이 발견한 우리 가족의 귀여운 버릇이 있다면?",
  },
  {
    id: 26,
    content: '나와 같이 생활을 하면서 "이것"만큼은 꼭 지켜줬으면 좋겠어!',
  },
  {
    id: 27,
    content: "아무리 노력해도 고치기 어려운 단점이 있나요?",
  },
  {
    id: 28,
    content: "가족들과 눈을 마주치면 어떤 생각이 드나요?",
  },
  {
    id: 29,
    content: "올해가 가기 전 가족들과 꼭 함께 이루고 싶은 것이 있다면?",
  },
  {
    id: 30,
    content: "당신은 행복을 위해 얼마만큼의 돈이 필요하다고 생각하나요?",
  },
];

export default function CreatePage() {
  const [text1, setText1] = useState("나만의 질문을 입력해 주세요!");
  const [text2, setText2] = useState("나만의 질문을 입력해 주세요!");
  const [text3, setText3] = useState("나만의 질문을 입력해 주세요!");
  const [editable, setEditable] = useState(false);

  const editOn = () => {
    setEditable(true);
  };
  const handleChange1 = (e) => {
    setText1(e.target.value);
  };

  const handleChange2 = (e) => {
    setText2(e.target.value);
  };

  const handleChange3 = (e) => {
    setText3(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setEditable(!editable);
    }
  };

  return (
    <div className="pageQue">
      <link href="https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&display=swap" rel="stylesheet"></link>
      <h2 className="sehtw">질문 목록</h2>
      <h3 className="sehth">매일매일 달라지는 기본 질문과 가족들이 서로에게 궁금한 추가 질문들</h3>

      <div className="divOne">
        <p className="nananame">기본 질문</p>
        <table className="tabOne">
          <th className="numlist">번호</th>
          <th>질문</th>

          {questionList.map((question) => (
            <tr key={question.id}>
              <td>{question.id}</td>
              <td>
                <Link to={`/qna/${question.id}`}>{question.content}</Link>
              </td>
            </tr>
          ))}
        </table>
      </div>

      <div className="divTwo">
        <p className="nananame">추가한 질문</p>
        <table className="tabOne">
          <th className="numlist">번호</th>
          <th>질문</th>

          <tr>
            <td>1</td>
            <td>{editable ? <input type="text" value={text1} onChange={handleChange1} onKeyDown={handleKeyDown} /> : <div onClick={editOn}>{text1}</div>}</td>
          </tr>

          <tr>
            <td>2</td>
            <td>{editable ? <input type="text" value={text2} onChange={handleChange2} onKeyDown={handleKeyDown} /> : <div onClick={editOn}>{text2}</div>}</td>
          </tr>

          <tr>
            <td>3</td>
            <td>{editable ? <input type="text" value={text3} onChange={handleChange3} onKeyDown={handleKeyDown} /> : <div onClick={editOn}>{text3}</div>}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
