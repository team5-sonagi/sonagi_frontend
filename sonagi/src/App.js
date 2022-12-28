import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import MainPage from "./pages/MainPage";
import CreatePage from "./pages/CreatePage";
import QuestionPage from "./pages/QuestionPage";
import MyPage from "./pages/MyPage";
import RegisterPage from "./pages/RegisterPage";
import CommentPage from "./pages/CommentPage";


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="create" element={<CreatePage />} />
        <Route path="question/:id" element={<QuestionPage />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="Register" element={<RegisterPage />} />
        <Route path="comment" element={<CommentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
