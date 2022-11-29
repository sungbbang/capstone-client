import React, { useState } from "react";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { userDataState } from "../../api/auth";
import { useStudyActions } from "../../api/study";
import MyProfile from "./MyProfile";
import MyStudyList from "./MyStudyList";

const MyPage = () => {
  const userData = useRecoilValue(userDataState);
  const [myStudy, setMyStudy] = useState([]);

  const studyActions = useStudyActions();
  const loadMyStudyList = async () => {
    const res = await studyActions.getStudyList();
    if (res.status === 200) {
      let result = res.data.filter((users) =>
        users.users.includes(userData.nickname)
      );
      setMyStudy(result);
    }
  };

  useEffect(() => {
    loadMyStudyList();
  }, []);

  return (
    <>
      <MyProfile userData={userData} />
      <br />
      <MyStudyList userStudy={myStudy} />
    </>
  );
};

export default MyPage;
