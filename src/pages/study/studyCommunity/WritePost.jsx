import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useRecoilValue } from "recoil";
import { post } from "../../../api";
import { userDataState } from "../../../api/auth";
import { useQnaActions } from "../../../api/qna";

const WritePost = ({ id }) => {
  const qnaActions = useQnaActions();
  const data = useRecoilValue(userDataState);
  const userName = data.nickname;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [show, setShow] = useState(false);

  const date =
    new Date(Date.now()).getFullYear() +
    "/" +
    (new Date(Date.now()).getMonth() + 1) +
    "/" +
    new Date(Date.now()).getDate();

  const handleSubmit = async () => {
    const qnaData = {
      title: title,
      description: description,
      date: date,
      user: userName,
      StudyId: Number(id),
    };
    console.log(qnaData);

    await qnaActions.createQna(qnaData);
  };

  return (
    <>
      {!show ? (
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>제목</Form.Label>
            <Form.Control
              type="text"
              placeholder="제목"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>내용</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="내용"
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleSubmit} type="submit">
            작성하기
          </Button>
        </Form>
      ) : null}
    </>
  );
};

export default WritePost;
