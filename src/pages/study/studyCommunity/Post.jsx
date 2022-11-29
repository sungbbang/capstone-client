import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CommentView from "./CommentView";

const Post = () => {
  const navigate = useNavigate();
  const getPostData = async () => {
    // 게시글 데이터 불러오는 코드
  };
  return (
    <>
      <Button onClick={() => navigate(-1)}>뒤로 가기</Button>
      <h4>제목: </h4>
      <h4>내용: </h4>
      <CommentView />
    </>
  );
};

export default Post;
