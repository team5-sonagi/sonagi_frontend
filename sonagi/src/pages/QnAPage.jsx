import "./QnAPage.css";

export default function QnAPage() {
  return (
    <div className="pagemmain">
      <link href="https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&display=swap" rel="stylesheet"></link>
      <h2 className="sehtw">우리 가족의 1번째 질문 답변 </h2>
      <p className="sehth">
        1번째 기본 질문<br></br>
        당신이 어떤 사람인지 소개해 주세요. TMI도 좋아요!
      </p>
      <table className="tabAns">
        <tr className="qtr">
          <td classname="qtd">2022<br></br>
          아부지 : 가정과.   사회에.   책임을.   다한다.   <br></br>
          엄마망 : 꽃도 좋아하고 모임도 좋아하고 요리하는 것도 좋아해요~^^<br></br>
          딸램 : 엄마 아빠를 제일 사랑하는 K-장녀!!!!<br></br>
          막냉 : ISTJ라서 말이 없다.</td>
          <td classname="qtd">2023<br></br>
          아부지 : 오래오래.   우리가족.   언제든.   따뜻하게.   <br></br>
          엄마망 : 요즘은 녹차를 우려먹는 우아~한 다도에 빠졌다^^나이를 먹어도 아름답게 살자^^!!<br></br>
          딸램 : 취업 성공, 이번달 가족 외식은 내가 쏜다!!<br></br>
          막냉 : 고등학생 되기 싫다...</td>
        </tr>
        <tr className="qtr">
          <td classname="qtd">2024
          <br></br>
          아부지 : 든든하고.   건강한.   대한의.   사나이.   <br></br>
          엄마망 : 임영웅한테 푹~~~~빠진 아줌마♡ 영웅시대 사랑해요^^<br></br>
          딸램 : 사회에 지쳤지만 월급날의 보람으로 살아가는,,,2년차 낡고 지친 사회인입니다...<br></br>
          막냉 : 스트레이키즈 짱!!</td>
          <td classname="qtd">2025
          <br></br>
          아부지 : 자녀들.  무탈하고.   오래오래.   건강하게.<br></br>
          엄마망 : 건강하고 아름답게 살자~~~^^,,,나누며 살면은 복이 온단다.<br></br>
          딸램 : 어느새 사회생활도 3년차^^ 점점 엄마아빠와 공감할 수 있는 게 많아진다.
          나도 어른이 되는 걸까?<br></br>
          막냉 : 벌써 수능이란 게 안 믿기는 지친 K고삼... </td>
        </tr>
      </table>
    </div>
  );
}
