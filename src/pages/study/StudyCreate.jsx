import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudyCreate = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [area, setArea] = useState("");

  const defaultSection = ["어학", "IT", "자격증", "토익"];
  const [section, setSection] = useState("");

  const [text, setText] = useState("");
  const [hashtag, setHashtag] = useState([]);

  const handleHashTag = () => {
    setText("");
    if (hashtag.length < 3) {
      if (text !== "") {
        if (hashtag[0] === text) {
          alert("중복된 해시태그입니다.");
        } else if (hashtag[1] === text) {
          alert("중복된 해시태그입니다.");
        } else if (hashtag[2] === text) {
          alert("중복된 해시태그입니다.");
        } else {
          hashtag.push(text);
          setHashtag(hashtag);
        }
      } else {
        alert("빈 해시태그는 입력할 수 없습니다.");
      }
    } else {
      alert("해시태그는 최대 3개까지 입력할 수 있습니다.");
    }
  };
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
      <div className="study-area">
        <label>지역</label>
        <select
          name="area"
          id="area"
          onChange={(e) => {
            setArea(e.target.value);
          }}
        >
          <optgroup label="지역"></optgroup>
          <option value="지역">===지역을 골라주세요===</option>
          <option>없음(비대면 스터디)</option>
          <option>서울</option>
          <option>대전</option>
          <option>세종</option>
        </select>
      </div>
      <div className="study-section">
        <label>분야</label>
        {defaultSection.map((a, i) => (
          <Section
            key={i}
            defaultSection={defaultSection[i]}
            setSection={setSection}
          />
        ))}
      </div>
      {hashtag.map((a, i) => (
        <div className="hashtag" key={i}>
          <span
            onClick={() => {
              const copy = hashtag.filter((tag, index) => index !== i);
              setHashtag(copy);
            }}
          >
            # {a} ❌
          </span>
        </div>
      ))}
      <div className="hashtag-input">
        <input
          value={text}
          placeholder="#해시태그"
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button onClick={handleHashTag}>작성</button>
      </div>
      <div>
        <button
          onClick={() => {
            axios
              .post("/study", {
                title: title,
                content: content,
                section: section,
                area: area,
                hashtag: hashtag.toString(),
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

const Section = ({ defaultSection, setSection }) => {
  return (
    <>
      <input
        type="radio"
        name="genre"
        onClick={() => {
          const copy = defaultSection;
          setSection(copy);
        }}
      ></input>
      <label>{defaultSection}</label>
    </>
  );
};

export default StudyCreate;
