import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./common/Header";
import Footer from "./common/Footer";

import Home from "./pages/Home";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import StudyCreate from "./pages/study/StudyCreate";
import StudyDetail from "./pages/study/StudyDetail";
import StudyList from "./pages/study/StudyList";
import StudyEdit from "./pages/study/StudyEdit";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/study_create" element={<StudyCreate />} />
        <Route path="/study_detail/:id" element={<StudyDetail />} />
        <Route path="/study_edit/:id" element={<StudyEdit />} />
        <Route path="/study_list" element={<StudyList />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
