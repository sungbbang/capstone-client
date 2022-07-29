import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Register from "./Register";

const Login = () => {
  const navigate = useNavigate();

  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  return (
    <>
      <h4>로그인 페이지</h4>
      <button onClick={() => navigate("/")}>메인페이지</button>
      <div>
        <label>아이디</label>
        <input onChange={(e) => setInputId(e.target.value)}></input>
        <label>비밀번호</label>
        <input onChange={(e) => setInputPw(e.target.value)}></input>
        <button
          onClick={() => {
            console.log(inputId, inputPw);
          }}
        >
          로그인
        </button>
        <button
          onClick={() => {
            navigate("/register");
          }}
        >
          회원가입
        </button>
      </div>
    </>
  );
};

export default Login;
