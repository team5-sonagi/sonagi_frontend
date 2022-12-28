import './CommentPage.css';

class CommentData{
    role; comment;
    setMainData(role, comment){
      this.role = role;
      this.comment = comment;
    }
  }

function CommentPage() {

    let question = "아빠의 어릴 때랑 저는 어떤 점이 비슷한가요?";
    let dad = new CommentData();
    dad.setMainData("아빠", "랄랄랄")
    let mom = new CommentData();
    mom.setMainData("엄마", "네 아빠는 롤롤롤")

    //다른 페이지에서 질문 값 받는 함수  
    function HTML_question () {
        return <p>{question}</p>;
    }

    //댓글 DB에서 읽어오기
    function HTML_comment () {
        let comment_arr = [dad, mom];
        let HTML_comment_arr = [];
        for (let i = 0; i < comment_arr.length; i++) {
            HTML_comment_arr.push(
              <div className="comment">
                {comment_arr[i].role} :
                {comment_arr[i].comment}
              </div>
            );
          }

        return HTML_comment_arr;
    }


  return (
    <div>
        {HTML_question()}
        <hr/>
        {HTML_comment()}
        <div>
            <input type="text" placeholder='댓글을 입력해보세요.'></input> <button>입력</button>
        </div>
    </div>
  );

}

export default CommentPage;

