import './Login.css';
import { Link } from "react-router-dom";


function Login() {
return (
    <div className='body-container'>
      <link href="https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap" rel="stylesheet"></link>
      <p className='login_letter'>로그인</p>
      <div className='contents'>
        <div> 아이디 : <input type="text"></input> </div>
        
        <div> 비밀번호 : <input type="text"></input> </div>
        <button class="login_btn"><Link to="/">로그인하기</Link></button>
      </div>
    </div>
  );
}

export default Login;
