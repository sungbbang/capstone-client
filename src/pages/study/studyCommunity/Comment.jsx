import React from "react";

const Comment = ({ commentList }) => {
  return (
    <>
      <ul>
        {commentList.map((comment, index) => (
          <li key={index}>
            <span>username: {comment}</span>
            <button>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Comment;
