import './RegisterPage.css';

function RegisterPage() {
  //년도 드롭박스
  function loop_birth_year() {
    let year_arr = [];
    for (let i = 2016; i > 1960; i--) {
      year_arr.push(<option value={i}>{i}</option>);
    }
    return year_arr;
  }
  //월 드롭박스
  function loop_birth_month() {
    let month_arr = [];
    for (let i = 1; i <= 12; i++) {
      month_arr.push(<option value={i}>{i}</option>);
    }
    return month_arr;
  }
  //일 드롭박스
  function loop_birth_day() {
    let day_arr = [];

    for (let i = 1; i <= 31; i++) {
      day_arr.push(<option value={i}>{i}</option>);
    }
    return day_arr;
  }

  //MBTI 라디오버튼
  function loop_MBTI() {
    let MBTI_arr = ["ISTJ", "ISFJ" ,"INFJ", "INTJ", "ISTP", "ISFP", "INFP", "INTP", "ESTP", "ESFP", "ENFP", "ENTP", "ESTJ", "ESFJ", "ENFJ", "ENTJ"];
    let HTML_MBTI_arr = [];
    for (let i = 0; i < 16; i++) {
      HTML_MBTI_arr.push(
        <div className='MBTI'>
          <input type="radio" name="MBTI" id={MBTI_arr[i]} value={MBTI_arr[i]} />
          <label for={MBTI_arr[i]}>{MBTI_arr[i]}</label>
        </div>
      );
    }
    return HTML_MBTI_arr;
  }

  //성격 키워드 체크박스
  function loop_personality() {
    let personality_arr = ["논쟁을 좋아하는", "예의바른" ,"신중한", "참신한", "열정적인", "지도력 있는", "인내심 많은", "경쟁심 많은", "희생적인", "의존적인", "마음이 넓은", "기발한", "사교적인", "차분한", "독립적인", "줏대있는"
                    ,"겸손한", "성실한", "분석적인", "충동적인", "진지한", "이해심 많은", "자발적인", "용기있는", "논리적인", "완벽주의자", "절제된", "공감을 잘하는", "솔직한", "감성적인" ];
    let HTML_personality_arr = [];
    for (let i = 0; i < personality_arr.length; i++) {
      HTML_personality_arr.push(
        <div className='personality'>
          <input type="checkbox" id={`personality+${i}`} value={`personality+${i}`} />
          <label for={`personality+${i}`}>{personality_arr[i]}</label>
        </div>
      );
    }
    return HTML_personality_arr;
  }

  // HTML
  return (
    <div className='pagemmain'>
       <link href="https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&display=swap" rel="stylesheet"></link>
      
       <h2 className="sehtw">회원가입</h2>
      <h3 className="sehth">
        질문에 답해가며 스스로를 알아가는 시간♡
      </h3>
      <div className='centxt'>
        아이디 : <input type="text"></input> <br />
        비밀번호 : <input type="text"></input> <br />
        성명 : <input type="text"></input> <br />
        생년월일 :
        <form className="birth_year">
          <select name="birth_year" id="birth_year">
            {loop_birth_year()}
          </select>
          <label for="cars">년</label>
        </form>
        <form className="birth_month">
          <select name="birth_month" id="birth_month">
            {loop_birth_month()}
          </select>
          <label for="cars">월</label>
        </form>
        <form className="birth_day">
          <select name="birth_day" id="birth_day">
            {loop_birth_day()}
          </select>
          <label for="cars">일</label>
        </form>
        <br/><br></br>
        MBTI :
        <div className='MBTI-container'>
          {loop_MBTI()}
        </div>
        <br/>
        자신을 소개해보세요! :
        <form className='perst'>
          {loop_personality()}
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
