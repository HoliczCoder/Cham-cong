import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import ShowStaff from "./pages/Leader/ShowStaff";
import EditCheck from "./pages/Leader/EditCheck";
import Notification from "./pages/Leader/Notification";
/* import QuizDetail from "./components/QuizDetail"; */
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/show-staff" element={<ShowStaff />} />
          <Route path="/edit-check/:day" element={<EditCheck />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
        {/* <Link to={`/about?name=mien&age=20`}>about</Link> */}
      </BrowserRouter>
    </div>
  );
}
