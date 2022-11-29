import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PostList from "./PostList";
import WritePost from "./WritePost";

const StudyCommunity = () => {
  const params = useParams();
  const [show, setShow] = useState(false);

  return (
    <>
      <h4>게시판</h4>
      {show ? (
        <WritePost id={params.id} />
      ) : (
        <Button onClick={() => setShow(true)}>게시글 작성하기</Button>
      )}
      <PostList id={params.id} />
    </>
  );
};

export default StudyCommunity;
