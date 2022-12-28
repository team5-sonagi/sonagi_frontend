import styles from "./QnAPage.css";

export default function QnAPage() {
  return (
    <div>
      <link href="https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&display=swap" rel="stylesheet"></link>
      <h2>우리 가족의 1번째 질문 답변 </h2>
      <p className="firstQ">
        1번째 기본 질문<br></br>
        당신이 어떤 사람인지 소개해 주세요. TMI도 좋아요!
      </p>
      <table className="tabAns">
        <tr>
          <td>2022<br></br>
          아부지 : <br></br>
          엄마망 : <br></br>
          딸램 : <br></br>
          막냉 : </td>
          <td>2023<br></br>
          아부지 : <br></br>
          엄마망 : <br></br>
          딸램 : <br></br>
          막냉 : </td>
        </tr>
        <tr>
          <td>2024
          <br></br>
          아부지 : <br></br>
          엄마망 : <br></br>
          딸램 : <br></br>
          막냉 : </td>
          <td>2025
          <br></br>
          아부지 : <br></br>
          엄마망 : <br></br>
          딸램 : <br></br>
          막냉 : </td>
        </tr>
      </table>
    </div>
  );
}
