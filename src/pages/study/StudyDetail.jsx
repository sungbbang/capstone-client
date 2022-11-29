import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { del, get } from "../../api";
import { userDataState } from "../../api/auth";
import { useStudyActions } from "../../api/study";

const StudyDetail = () => {
  const navigate = useNavigate("");
  const params = useParams();
  const studyActions = useStudyActions();
  const [studyData, setStudyData] = useState([]);

  const data = useRecoilValue(userDataState);

  const loadStudyDetail = async () => {
    await get(`/Studys/${params.id}`)
      .then((res) => {
        setStudyData(res.data);
      })
      .catch((err) => {
        return err;
      });
  };

  const delStudy = async () => {
    await studyActions
      .deleteStudy(params.id)
      .then(() => {
        alert("삭제되었습니다.");
        navigate("/study_list");
      })
      .catch((err) => {
        return err;
      });
  };

  const enterStudy = async () => {
    const user = data.nickname;
    await studyActions
      .joinStudy(params.id, { users: `,${user}` })
      .then(() => alert("참여되었습니다."))
      .catch((err) => {
        return err;
      });
  };

  useEffect(() => {
    loadStudyDetail();
  }, []);

  return (
    <>
      <div className="study-detail">
        <Link to="/study_list">뒤로 가기</Link>
        <h4>제목: {studyData.title}</h4>
        <h4>소개: {studyData.description}</h4>
        <h4>분야: {studyData.section}</h4>
        <h4>지역: {studyData.area}</h4>
        <h4>#{studyData.title}</h4>
        <Button variant="primary" onClick={enterStudy}>
          참여
        </Button>
        <Button variant="danger" onClick={delStudy}>
          삭제
        </Button>
        {}
        <Button
          variant="warning"
          onClick={() => navigate(`/study_community/${params.id}`)}
        >
          게시판
        </Button>
      </div>
    </>
  );
};

export default StudyDetail;
