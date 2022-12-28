import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="container">
      <div>
        <Link to="/">소나기</Link>
      </div>
      <div>
        <Link to="/create">질문 생성</Link>
      </div>
      <div>
        <Link to="/mypage">마이페이지</Link>
      </div>
    </div>
  );
}
