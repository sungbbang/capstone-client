import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../../api";

const StudyDetail = () => {
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
    console.log(studyData);
  }, []);
  return (
    <>
      <div className="study-detail">
        <div>
          <h4>제목: {studyData.title}</h4>
          <h4>내용: {studyData.content}</h4>
          <h4>분야:{studyData.section} </h4>
          <h4>지역:{studyData.area} </h4>
          <h4># {studyData.hashtag} </h4>
        </div>
      </div>
    </>
  );
};

export default StudyDetail;
