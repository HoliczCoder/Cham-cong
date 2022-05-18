import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Quiz from "./pages/Quiz";
import ChooseQuiz from "./pages/ChooseQuiz";
import Result from "./pages/Result";
import User from "./pages/User";
import Edit from "./pages/Edit";
/* import QuizDetail from "./components/QuizDetail"; */
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/choose-quiz" element={<ChooseQuiz />} />
          <Route path="/quiz" element={<Quiz />}></Route>
          <Route path="/result" element={<Result />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/edit:id" element={<Edit />}></Route>
        </Routes>
        {/* <Link to={`/about?name=mien&age=20`}>about</Link> */}
      </BrowserRouter>
    </div>
  );
}
