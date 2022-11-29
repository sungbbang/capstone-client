import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { get } from "../../../api";

const PostList = ({ id }) => {
  const [postList, setPostList] = useState([]);

  const loadQnaData = async () => {
    await get(`/qna/${id}`)
      .then((res) => {
        setPostList(res.data);
      })
      .catch((err) => {
        return err;
      });
  };

  useEffect(() => {
    loadQnaData();
  }, []);

  return (
    <>
      {postList.map((post) => (
        <div>
          <Card key={post.id}>
            <Card.Header>{post.title}</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>{post.description}</p>
                <footer className="blockquote-footer">{post.user}</footer>
              </blockquote>
            </Card.Body>
          </Card>
          <hr />
        </div>
      ))}
    </>
  );
};

export default PostList;
