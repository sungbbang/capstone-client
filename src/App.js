import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";
import CreateStudy from "./pages/study/CreateStudy";
import StudyDetail from "./pages/study/StudyDetail";
import StudyList from "./pages/study/StudyList";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/create_study" element={<CreateStudy />} />
        <Route path="/study_detail" element={<StudyDetail />} />
        <Route path="/study_list" element={<StudyList />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
