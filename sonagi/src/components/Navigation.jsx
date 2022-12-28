import { Link } from "react-router-dom";
import "./Navigation.css";
import React from "react";

export default function Navigation() {
  return (
    <nav className="wrapper">
      <div className="meme">
        <Link to="/">소나기 Home</Link>
      </div>
      <div className="meme">
        <Link to="/mypage">마이페이지</Link>
      </div>
      <div className="meme">
        <Link to="/question">질문목록</Link>
      </div>
    </nav>
  );
}
