import React, { useState } from "react";
import {
  Button,
  Col,
  FloatingLabel,
  Form,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuthActions } from "../../api/auth";

const Regist = () => {
  const navigate = useNavigate();
  const authActions = useAuthActions();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [nickName, setNickName] = useState("");
  const [area, setArea] = useState("");
  const [interests, setInterests] = useState("");
  const [introduce, setIntroduce] = useState("");

  const [show, setShow] = useState(false);

  const [validated, setValidated] = useState(false);

  const handleSubmit = async () => {
    const userInfo = {
      username: id,
      password: password,
      nickname: nickName,
      area: area,
      category: interests,
      introduce: introduce,
    };

    // TODO: 회원가입이 안 되는 경우의 조건문 작성(ex. 아이디 중복)
    const res = await authActions.register(userInfo);
    console.log("Success: ", JSON.parse(res.config.data));
  };

  return (
    <>
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicId">
            <Form.Label>아이디</Form.Label>
            <Form.Control
              onChange={(e) => setId(e.target.value)}
              type="text"
              placeholder="아이디를 입력해주세요."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="비밀번호를 입력해주세요."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
            <Form.Label>비밀번호 확인</Form.Label>
            <Form.Control
              onChange={(e) => setPasswordConfirm(e.target.value)}
              type="password"
              placeholder="비밀번호를 입력해주세요."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNickName">
            <Form.Label>닉네임</Form.Label>
            <Form.Control
              onChange={(e) => setNickName(e.target.value)}
              type="text"
              placeholder="닉네임을 입력해주세요."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicArea">
            <Form.Label>지역</Form.Label>
            <Form.Control
              onChange={(e) => setArea(e.target.value)}
              type="text"
              placeholder="사는 지역을 입력해주세요."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicInterests">
            <Form.Label>관심 분야</Form.Label>
            <Form.Control
              onChange={(e) => setInterests(e.target.value)}
              type="text"
              placeholder="관심 분야를 입력해주세요."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicIntroduce">
            <Form.Label>자기 소개</Form.Label>
            <Form.Control
              onChange={(e) => setIntroduce(e.target.value)}
              as="textarea"
              rows={2}
              placeholder="자기 소개를 입력해주세요."
            />
          </Form.Group>
          <Button variant="primary" onClick={() => setShow(true)}>
            회원가입
          </Button>
        </Form>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>가입 확인</Modal.Title>
          </Modal.Header>
          <Modal.Body>가입하시겠습니까?</Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => {
                handleSubmit();
                setShow(false);
                alert("회원가입을 성공했습니다. (메인페이지로 이동합니다.)");
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
    </>
  );
};

export default Regist;
