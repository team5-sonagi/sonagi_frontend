import './MyPage.css';

class MainData{
  name; birth; MBTI; personality_arr;
  setMainData(name, birth, MBTI, personality_arr){
    this.name = name;
    this.birth = birth;
    this.MBTI = MBTI;
    this.personality_arr = personality_arr;
  }
}

function MyPage() {

  //dummy data
  let bro = new MainData();
  bro.setMainData("김유민(막냉)", "2004.07.18", "ISTJ", ["#신중한 ", "#경쟁심 많은 ", "#희생적인 "])
  let me = new MainData();
  me.setMainData("김지민(딸램)", "2000.08.02", "ENFP", ["#성실한 ", "#분석적인 ", "#겸손한 "])
  let mom = new MainData();
  mom.setMainData("오현이(엄마망)", "1970.02.29", "ISTJ", ["#논리적인 ", "#완벽주의자 ", "#절제된 ", "# 성실한"])
  let dad = new MainData();
  dad.setMainData("김석철(아부지)", "1968.11.17", "INTP", ["#열정적인 ", "#이해심 많은 ", "#지도력 있는 "])

  //프로필 카드 만드는 함수
  function make_profile() {
    let profile_arr = [me,bro, mom, dad];
    let HTML_profile_arr = [];
    for (let i = 0; i < profile_arr.length; i++) {
      HTML_profile_arr.push(
        <div className="profile_card">
          <div className="bol">{profile_arr[i].name}</div>
          <div>{profile_arr[i].birth}</div>
          <div>{profile_arr[i].MBTI}</div>
          {profile_arr[i].personality_arr}
        </div>
      );
    }
    return HTML_profile_arr;
  }

  return (
    <div className='pagemmain'>
      <h2 className="sehtw">우리 가족 정보</h2>
      <h3 className="sehth">
        가족들이 직접 작성한 프로필을 확인해 보세요!
      </h3>
       <link href="https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&display=swap" rel="stylesheet"></link>
      {make_profile()}
    </div>
  );
}

export default MyPage;
