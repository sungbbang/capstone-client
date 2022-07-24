import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useEffect } from "react";

const StudyList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    axios
      .get("/study")
      .then((res) => {
        const copy = [...data, ...res.data];
        setData(copy);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div>
        <input
          onChange={(e) => {
            setSearchWord(e.target.value);
            console.log(searchWord);
          }}
        ></input>
        <button onClick={() => {}}>스터디 검색</button>
        <button onClick={() => navigate("/study_create")}>스터디 생성</button>
        <h4>스터디 목록</h4>
        {data.map((a, i) => (
          <span key={i} onClick={() => navigate("/study_detail")}>
            <p>제목: {data[i].title}</p>
            <p>내용: {data[i].content}</p>
            <p>분야: {data[i].section}</p>
            <p>지역: {data[i].area}</p>
            <p>#{data[i].hashtag}</p>
            <hr />
          </span>
        ))}
      </div>
    </>
  );
};

export default StudyList;
