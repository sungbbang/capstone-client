import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { patch, get, post } from "../../api";

const StudyEdit = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [area, setArea] = useState("");

  const defaultSection = ["어학", "IT", "자격증", "토익"];
  const [section, setSection] = useState("");

  const [text, setText] = useState("");
  const [hashtag, setHashtag] = useState([]);
  const params = useParams();
  const [studyData, setStudyData] = useState();

  const loadStudyDetail = async () => {
    const res = await get(`/study/${params.id}`)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
    setStudyData(res.data);
  };

  const editStudy = async (url) => {
    await patch(`/study/${params.id}`, {
      title: title,
      content: content,
      section: section,
      area: area,
      hashtag: hashtag.toString(),
    });
    navigate("/study_list");
  };

  useEffect(() => {
    loadStudyDetail();
  }, []);

  const [selected, setSelected] = useState("yes");

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  const handleHashTag = () => {
    setText("");
    if (hashtag.length < 3) {
      if (text !== "") {
        if (hashtag.includes(text)) {
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
      <h4>스터디 수정</h4>
      <div className="study-title">
        <label>제목</label>
        <input
          defaultValue={studyData?.title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
      </div>
      <div className="study-content">
        <label>내용</label>
        <textarea
          defaultValue={studyData?.content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="study-area">
        <label>지역</label>
        <select
          defaultValue={studyData?.section}
          name="area"
          id="area"
          onChange={(e) => {
            setArea(e.target.value);
          }}
        >
          <optgroup label="지역"></optgroup>
          <option value="지역">===지역을 골라주세요===</option>
          <option
            selected={studyData?.area == "없음(비대면 스터디)" && "selected"}
          >
            없음(비대면 스터디)
          </option>
          <option selected={studyData?.area == "서울)" && "selected"}>
            서울
          </option>
          <option selected={studyData?.area == "대전" && "selected"}>
            대전
          </option>
          <option selected={studyData?.area == "세종" && "selected"}>
            세종
          </option>
        </select>
      </div>
      <div className="study-section">
        <label defaultChecked={studyData?.area}>분야</label>
        {defaultSection.map((a, i) => (
          // <Section
          //   key={i}
          //   defaultSection={defaultSection[i]}
          //   setSection={setSection}
          // />

          // TO-DO 라디오 input 수정
          <>
            <input
              type="radio"
              name="genre"
              checked={studyData?.section === defaultSection[i] && "yes"}
              onChange={handleChange}
              onClick={() => {
                const copy = defaultSection[i];
                setSection(copy);
              }}
            ></input>
            <label>{defaultSection[i]}</label>
          </>
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
        <button onClick={editStudy}>스터디 수정</button>
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

export default StudyEdit;
