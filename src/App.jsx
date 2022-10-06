import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./common/Header";
import Footer from "./common/Footer";

import Home from "./pages/Home";

import Login from "./pages/auth/Login";
import Regist from "./pages/auth/Regist";

import StudyCreate from "./pages/study/StudyCreate";
import StudyDetail from "./pages/study/StudyDetail";
import StudyList from "./pages/study/StudyList";
import StudyEdit from "./pages/study/StudyEdit";
import { Navigate } from "react-router-dom";

import "antd/dist/antd.css";

const App = () => {
  // if (!localStorage.getItem("studyCapstone")) {
  //   return (
  //     <div>
  //       <Header />
  //       <Routes>
  //         <Route path="/" element={<Login />} />
  //       </Routes>
  //       <Footer />
  //     </div>
  //   );
  // }

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/regist"
          element={
            localStorage.getItem("studyCapstone") ? (
              <Regist />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
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
