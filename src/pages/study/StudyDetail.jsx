import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { get } from "../../api";

const StudyDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [studyData, setStudyData] = useState({
    title: "",
    content: "",
    section: "",
    area: "",
    hashtag: "",
  });

  const getStudyDetail = async () => {
    const res = await get(`/study/${params.id}`)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
    setStudyData(res.data);
  };

  useEffect(() => {
    getStudyDetail();
  }, []);

  return (
    <>
      <div className="study-detail">
        <div>
          <h4>제목: {studyData.title}</h4>
          <h4>내용: {studyData.content}</h4>
          <h4>분야: {studyData.section} </h4>
          <h4>지역: {studyData.area} </h4>
          <h4># {studyData.hashtag} </h4>
        </div>
        <div>
          <button>수정</button>
          <button
            onClick={() => {
              axios
                .delete(`/study/${params.id}`)
                .then(() => {
                  alert("삭제되었습니다.");
                  navigate("/study_list");
                })
                .catch(() => console.log("error"));
            }}
          >
            삭제
          </button>
        </div>
      </div>
    </>
  );
};

export default StudyDetail;
