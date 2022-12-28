import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../axiosInstance";
import "./QnAPage.css";

export default function QnAPage(props) {
  const [content, setContent] = useState();
  const { id } = useParams();
  const qna_id = id - 1;

  const getFixedQuestion = async () => {
    await axiosInstance
      .get(`/fixed-question/daily/${qna_id}`)
      .then((res) => setContent(res.data.content))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getFixedQuestion();
  });

  return (
    <div className="pagemmain">
      <link href="https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&display=swap" rel="stylesheet"></link>
      <script src="https://kit.fontawesome.com/214737df9f.js" crossorigin="anonymous"></script>
      <h2 className="sehtw">우리 가족의 {id}번째 질문 답변 </h2>
      <p className="sehth">
        {id}번째 기본 질문<br></br>
        {content}
        <button className="버튼">
          <svg className="아이콘" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm160-32c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z" />
          </svg>
        </button>
      </p>
      <table className="tabAns">
        <tr className="qtr">
          <td classname="qtd">
            <span>2022</span>
            <br></br>
            <br></br>
            아부지 : 가정과. 사회에. 책임을. 다한다. <br></br>
            엄마망 : 꽃도 좋아하고 모임도 좋아하고 요리하는 것도 좋아해요~^^<br></br>
            딸램 : 엄마 아빠를 제일 사랑하는 K-장녀!!!!<br></br>
            막냉 : ISTJ라서 말이 없다.
          </td>
          <td classname="qtd">
            <span>2023</span>
            <br></br>
            <br></br>
            아부지 : 오래오래. 우리가족. 언제든. 따뜻하게. <br></br>
            엄마망 : 요즘은 녹차를 우려먹는 우아~한 다도에 빠졌다^^나이를 먹어도 아름답게 살자^^!!<br></br>
            딸램 : 취업 성공, 이번달 가족 외식은 내가 쏜다!!<br></br>
            막냉 : 고등학생 되기 싫다...
          </td>
        </tr>
        <tr className="qtr">
          <td classname="qtd">
            <span>2024</span>
            <br></br>
            <br></br>
            아부지 : 든든하고. 건강한. 대한의. 사나이. <br></br>
            엄마망 : 임영웅한테 푹~~~~빠진 아줌마♡ 영웅시대 사랑해요^^<br></br>
            딸램 : 사회에 지쳤지만 월급날의 보람으로 살아가는,,,2년차 낡고 지친 사회인입니다...<br></br>
            막냉 : 스트레이키즈 짱!!
          </td>
          <td classname="qtd">
            <span>2025</span>
            <br></br>
            <br></br>
            아부지 : 자녀들. 무탈하고. 오래오래. 건강하게.<br></br>
            엄마망 : 건강하고 아름답게 살자~~~^^,,,나누며 살면은 복이 온단다.<br></br>
            딸램 : 어느새 사회생활도 3년차^^ 점점 엄마아빠와 공감할 수 있는 게 많아진다. 나도 어른이 되는 걸까?<br></br>
            막냉 : 벌써 수능이란 게 안 믿기는 지친 K고삼...{" "}
          </td>
        </tr>
      </table>
    </div>
  );
}
