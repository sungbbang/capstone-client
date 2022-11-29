import React from "react";
import { useState } from "react";
import Comment from "./Comment";

const CommentView = () => {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment === "") {
      return;
    }
    setCommentList((list) => [comment, ...list]);
    setComment("");

    // 서버에 전송하는 코드
  };
  return (
    <>
      <form>
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="댓글을 입력해주세요."
        />
        <button onClick={handleSubmit}>작성</button>
      </form>
      <Comment commentList={commentList} />
    </>
  );
};

export default CommentView;
