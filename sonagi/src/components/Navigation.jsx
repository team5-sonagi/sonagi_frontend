import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="container">
      <div className="meme">
        <Link to="/">소나기 Home</Link>
      </div>
      <div className="meme">
        <Link to="/mypage">마이페이지</Link>
      </div>
      <div className="meme">
        <Link to="/question">질문목록</Link>
      </div>
    </div>
  );
}
