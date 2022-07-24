import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./common/Header";
import Footer from "./common/Footer";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import CreateStudy from "./pages/study/CreateStudy";
import StudyDetail from "./pages/study/StudyDetail";
import StudyList from "./pages/study/StudyList";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<div>메인페이지</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/study_create" element={<CreateStudy />} />
        <Route path="/study_detail" element={<StudyDetail />} />
        <Route path="/study_list" element={<StudyList />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
