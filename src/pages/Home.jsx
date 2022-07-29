import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>메인페이지</h1>
      <button onClick={() => navigate("/login")}>로그인</button>
      <button onClick={() => navigate("/study_list")}>스터디 목록</button>
    </div>
  );
};

export default Home;
