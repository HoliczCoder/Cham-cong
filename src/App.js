import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Quiz from "./pages/Quiz";
import ChooseQuiz from "./pages/ChooseQuiz";
import Result from "./pages/Result"
import TakeBreak from "./pages/TakeBreak";
import Edit from "./pages/Edit";
/* import QuizDetail from "./components/QuizDetail"; */
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path ="/takeBreak" element={<TakeBreak />} />
          <Route path = "/edit" element={<Edit />} />
        </Routes>
        {/* <Link to={`/about?name=mien&age=20`}>about</Link> */}
      </BrowserRouter>
    </div>
  );
}
