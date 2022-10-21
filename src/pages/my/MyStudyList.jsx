import React from "react";
import StudyCardView from "../study/StudyCardView";

const MyStudyList = ({ userStudy }) => {
  return (
    <>
      {localStorage.getItem("authToken") ? (
        <>
          <h4>나의 스터디</h4>
          <div className="cardList">
            {userStudy.map((study) => (
              <StudyCardView key={study.id} study={study} />
            ))}
          </div>
        </>
      ) : (
        alert("로그인 후 이용해주세요.")
      )}
    </>
  );
};

export default MyStudyList;
