import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateStudy = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const section = "어학";
  const area = "대전";
  const hashtag = "리액트";
  // const hashtag = ["리액트", "프론트엔드"];
  const newArr = hashtag;
  console.log(newArr);
  return (
    <>
      <h4>스터디 생성</h4>
      <div className="study-title">
        <label>제목</label>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
      </div>
      <div className="study-content">
        <label>내용</label>
        <textarea
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
      </div>
      {/* <div className="study-area">
        <label htmlFor="area">지역</label>
        <select name="area" id="area">
          <optgroup label="지역"></optgroup>
          <option value="서울">서울</option>
          <option value="대전">대전</option>
          <option value="세종">세종</option>
        </select>
      </div>
      <div className="study-section">
        <label htmlFor="section">분야</label>
        <input type="radio"></input>
      </div> */}
      <div>
        <button
          onClick={() => {
            axios
              .post("/study", {
                title: title,
                content: content,
                section: section,
                area: area,
                hashtag: hashtag,
              })
              .then(() => {
                navigate("/study_list");
              })
              .catch(function (error) {
                console.log(error);
              });
          }}
        >
          스터디 생성
        </button>
      </div>
    </>
  );
};

export default CreateStudy;
