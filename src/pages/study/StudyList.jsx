import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../../api/index";
import { useEffect } from "react";

const StudyList = () => {
  const navigate = useNavigate();

  const searchOption = ["제목", "내용", "분야", "지역", "해시태그"];
  const option = ["title", "content", "section", "area", "hashtag"];

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(null);
  let [result, setResult] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  const getData = async () => {
    const res = await get("/study")
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err;
      });
    setData(res.data);
  };

  const handleSearch = () => {
    if (search === "") {
      alert("검색어를 입력해주세요.");
    } else if (category === null) {
      alert("검색 카테고리를 선택해주세요.");
    } else {
      result = data.filter((data) => {
        switch (category) {
          case "title":
            if (data.title.toUpperCase().includes(search.toUpperCase())) {
              return data;
            }
            break;
          case "content":
            if (data.content.toUpperCase().includes(search.toUpperCase())) {
              return data;
            }
            break;
          case "section":
            if (data.section.toUpperCase().includes(search.toUpperCase())) {
              return data;
            }
            break;
          case "area":
            if (data.area.toUpperCase().includes(search.toUpperCase())) {
              return data;
            }
            break;
          case "hashtag":
            if (data.hashtag.toUpperCase().includes(search.toUpperCase())) {
              return data;
            }
            break;
          default:
        }
      });
      setResult(result);
      setIsSearched(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <button onClick={() => navigate("/")}>메인페이지</button>
      <button onClick={() => navigate("/study_create")}>스터디 생성</button>
      <hr />
      <div>
        <input
          placeholder="검색어를 입력해주세요"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button onClick={handleSearch}>스터디 검색</button>
        {searchOption.map((a, i) => (
          <div key={i}>
            <label>{searchOption[i]}</label>
            <input
              type="radio"
              name="genre"
              onChange={() => {
                setCategory(option[i]);
              }}
            ></input>
          </div>
        ))}
        <hr />
        <h4>스터디 목록</h4>
        <hr />
        {isSearched === false ? (
          <div>
            {data.map((element) => (
              <span
                key={element.id}
                onClick={() => navigate(`/study_detail/${element.id}`)}
              >
                <p>제목: {element.title}</p>
                <p>내용: {element.content}</p>
                <p>분야: {element.section}</p>
                <p>지역: {element.area}</p>
                <p># {element.hashtag}</p>
                <hr />
              </span>
            ))}
          </div>
        ) : (
          <div>
            {result.map((element) => (
              <span
                key={element.id}
                onClick={() => navigate(`/study_detail/${element.id}`)}
              >
                <p>제목: {element.title}</p>
                <p>내용: {element.content}</p>
                <p>분야: {element.section}</p>
                <p>지역: {element.area}</p>
                <p># {element.hashtag}</p>
                <hr />
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default StudyList;
