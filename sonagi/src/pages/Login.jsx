import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../axiosInstance";

function Login() {
  const [id, setId] = useState();
  const [pw, setPw] = useState();
  const onChangeId = (e) => setId(e.currentTarget.value);
  const onChangePw = (e) => setPw(e.currentTarget.value);

  const login = async () => {
    let body = {
      username: id,
      password: pw,
    };
    await axiosInstance
      .post(`/login`, body)
      .then((res) => {
        alert(`로그인 되었습니다.`);
        localStorage.setItem("token", res.data);
        window.location.href = "/";
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="body-container">
      <link href="https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&display=swap" rel="stylesheet"></link>

      <p className="login_letter">로그인</p>
      <div className="contents">
        <div>
          {" "}
          아이디 : <input type="text" value={id} onChange={onChangeId}></input>{" "}
        </div>

        <div>
          {" "}
          비밀번호 : <input type="password" value={pw} onChange={onChangePw}></input>{" "}
        </div>
        <button className="login_btn" onClick={login}>
          로그인하기
        </button>
        <Link to="/register"> 회원가입</Link>
      </div>
    </div>
  );
}

export default Login;
