import { Link } from "react-router-dom";
import "./Navigation.css";
import React from "react";
import { useState } from "react";

export default function Navigation() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const logout = () => {
    localStorage.removeItem("token");
    alert("로그아웃 되었습니다.");
    window.location.href = "/";
  };

  return (
    <nav className="wrapper">
      <div className="meme">
        <Link to="/">소나기 Home</Link>
      </div>
      <div className="meme">
        <Link to="/mypage">가족 정보</Link>
      </div>
      <div className="meme">
        <Link to="/question">질문목록</Link>
      </div>
      <div className="meme">
        {token ? (
          <div className="meme" onClick={logout}>
            <a>로그아웃</a>
          </div>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </div>
    </nav>
  );
}
