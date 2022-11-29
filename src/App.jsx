import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import StudyCreate from "./pages/study/StudyCreate";
import StudyDetail from "./pages/study/StudyDetail";
import StudyList from "./pages/study/StudyList";

import StudyCommunity from "./pages/study/studyCommunity/StudyCommunity";
import WritePost from "./pages/study/studyCommunity/WritePost";
import Post from "./pages/study/studyCommunity/Post";

import Login from "./pages/auth/Login";
import Regist from "./pages/auth/Regist";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigator from "./common/Navigator";

import Chat from "./pages/chatting/Chat";
import MyPage from "./pages/my/MyPage";
import ChatRoom from "./pages/chatting/ChatRoom";

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
          <Route path="/study_create" element={<StudyCreate />} />
          <Route path="/study_list/:id" element={<StudyDetail />} />
          <Route path="/study_community/:id" element={<StudyCommunity />} />
          <Route path="/study_community/write" element={<WritePost />} />
          <Route path="/post" element={<Post />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/chat/:id" element={<ChatRoom />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
