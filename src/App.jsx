import React, { useState } from "react";
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./pages/Home";

import StudyCreate from "./pages/study/StudyCreate";
import StudyDetail from "./pages/study/StudyDetail";
import StudyList from "./pages/study/StudyList";
import Login from "./pages/auth/Login";
import Regist from "./pages/auth/Regist";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigator from "./common/Navigator";

import Chat from "./pages/chatting/Chat";
import MyPage from "./pages/my/MyPage";
import VideoChatRoom from "./pages/chatting/VideoChatRoom";

const App = () => {
  return (
    <>
      <Navigator />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regist" element={<Regist />} />
          <Route path="/study_list" element={<StudyList />} />
          <Route path="/study_list/:id" element={<StudyDetail />} />
          <Route path="/study_create" element={<StudyCreate />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/chat/video:id" element={<VideoChatRoom />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
