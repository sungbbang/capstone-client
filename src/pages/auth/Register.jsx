import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputPwCheck, setInputPwCheck] = useState("");

  const checkPw = () => {
    inputPw === inputPwCheck
      ? console.log(inputId, inputPw, inputPwCheck)
      : alert("비밀번호가 일치하지 않습니다.");
  };

  return (
    <>
      <h4>회원가입 페이지</h4>
      <div>
        <label>아이디</label>
        <input
          onChange={(e) => {
            setInputId(e.target.value);
          }}
        ></input>
        <label>비밀번호</label>
        <input
          onChange={(e) => {
            setInputPw(e.target.value);
          }}
        ></input>
        <label>비밀번호 확인</label>
        <input
          onChange={(e) => {
            setInputPwCheck(e.target.value);
          }}
        ></input>
        <button onClick={checkPw}>회원가입</button>
        <button onClick={() => navigate("/login")}>로그인</button>
      </div>
    </>
  );
};

export default Register;
