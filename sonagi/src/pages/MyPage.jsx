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
  let me = new MainData();
  me.setMainData("김김이", "2000.08.02", "ENFP", ["#성실한 ", "#분석적인 ", "#겸손한 "])
  let mom = new MainData();
  mom.setMainData("오오이", "1970.02.29", "ISTJ", ["#논리적인 ", "#완벽주의자 ", "#절제된 "])
  let dad = new MainData();
  dad.setMainData("김김삼", "1968.11.17", "INTP", ["#열정적인 ", "#신중한 ", "#이해심 많은 ", "#지도력 있는 "])

  //프로필 카드 만드는 함수
  function make_profile() {
    let profile_arr = [me, mom, dad];
    let HTML_profile_arr = [];
    for (let i = 0; i < profile_arr.length; i++) {
      HTML_profile_arr.push(
        <div className="profile_card">
          <div>{profile_arr[i].name}</div>
          <div>{profile_arr[i].birth}</div>
          <div>{profile_arr[i].MBTI}</div>
          {profile_arr[i].personality_arr}
        </div>
      );
    }
    return HTML_profile_arr;
  }


  return (
    <div>
      {make_profile()}
    </div>
  );
}

export default MyPage;
