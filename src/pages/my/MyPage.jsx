import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { userDataState } from "../../api/auth";
import { useStudyActions } from "../../api/study";
import MyProfile from "./MyProfile";
import MyStudyList from "./MyStudyList";

const MyPage = () => {
  const userData = useRecoilValue(userDataState);
  const userStudy = userData.study;
  // const [myStudy, setMyStudyList] = useState([]);

  // const studyActions = useStudyActions();
  // const loadStudyList = async () => {
  //   const res = await studyActions.getStudyList();
  //   if (res.status === 200) setMyStudyList(res.data);
  // };

  return (
    <>
      <MyProfile userData={userData} />
      <br />
      <MyStudyList userStudy={userStudy} />
    </>
  );
};

export default MyPage;
