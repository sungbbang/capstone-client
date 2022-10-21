import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useStudyActions } from "../../api/study";

const StudyCreate = () => {
  const navigate = useNavigate();

  const studyActions = useStudyActions();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [section, setSection] = useState("");
  const [hashtag, setHashtag] = useState("");
  const [area, setArea] = useState("");
  const [show, setShow] = useState(false);
  const date =
    new Date(Date.now()).getFullYear() +
    "/" +
    (new Date(Date.now()).getMonth() + 1) +
    "/" +
    new Date(Date.now()).getDate();

  const handleSubmit = async () => {
    const studyData = {
      title: title,
      description: description,
      section: section,
      hashtag: hashtag,
      area: area,
      date: date,
    };
    await studyActions.createStudy(studyData);
  };

  return (
    <>
      {localStorage.getItem("authToken") ? (
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicId">
              <Form.Label>스터디 제목</Form.Label>
              <Form.Control
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="스터디 제목을 입력해주세요."
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicIntroduce">
              <Form.Label>스터디 소개</Form.Label>
              <Form.Control
                onChange={(e) => setDescription(e.target.value)}
                as="textarea"
                rows={2}
                placeholder="스터디를 소개해주세요."
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
              <Form.Label>분야</Form.Label>
              <Form.Control
                onChange={(e) => setSection(e.target.value)}
                type="text"
                placeholder="분야를 입력해주세요."
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNickName">
              <Form.Label>해시태그</Form.Label>
              <Form.Control
                onChange={(e) => setHashtag(e.target.value)}
                type="text"
                placeholder="해시태그를 입력해주세요."
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicArea">
              <Form.Label>지역</Form.Label>
              <Form.Control
                onChange={(e) => setArea(e.target.value)}
                type="text"
                placeholder="지역을 입력해주세요."
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>생성일자</Form.Label>
              <Form.Control value={date} disabled />
            </Form.Group>
            <Button variant="primary" onClick={() => setShow(true)}>
              스터디 생성
            </Button>
          </Form>
          <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>스터디 생성</Modal.Title>
            </Modal.Header>
            <Modal.Body>스터디를 생성하시겠습니까?</Modal.Body>
            <Modal.Footer>
              <Button
                variant="primary"
                onClick={() => {
                  handleSubmit();
                  setShow(false);
                  alert("스터디를 생성했습니다. (메인페이지로 이동합니다.)");
                  navigate("/");
                }}
              >
                네
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  setShow(false);
                }}
              >
                아니요
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ) : (
        alert("로그인 후 이용해주세요.")
      )}
    </>
  );
};

export default StudyCreate;
