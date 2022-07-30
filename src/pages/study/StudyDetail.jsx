import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { get, del } from "../../api";

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

  const deleteStudy = async () => {
    const res = await del(`/study/${params.id}`);

    if (res.status === 200) {
      console.log("삭제 요청 성공");
      alert("삭제되었습니다.");
    }

    navigate("/study_list");
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
          <button
            onClick={() => {
              navigate(`/study_edit/${params.id}`);
            }}
          >
            수정
          </button>
          <button onClick={deleteStudy}>삭제</button>
        </div>
      </div>
    </>
  );
};

export default StudyDetail;
