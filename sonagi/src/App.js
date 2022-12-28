import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import MainPage from "./pages/MainPage";
import CreatePage from "./pages/CreatePage";
import QuestionPage from "./pages/QuestionPage";
import MyPage from "./pages/MyPage";
import RegisterPage from "./pages/RegisterPage";
import CommentPage from "./pages/CommentPage";
import QnA from "./pages/QnAPage";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="create" element={<CreatePage />} />
        <Route path="question" element={<QuestionPage />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="Register" element={<RegisterPage />} />
        <Route path="comment" element={<CommentPage />} />
        <Route path="qna/:id" element={<QnA />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
