import React from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuthActions, userDataState } from "../../api/auth";
import { useRecoilValue } from "recoil";

const Login = () => {
  const navigate = useNavigate();
  const authActions = useAuthActions();

  const data = useRecoilValue(userDataState);

  const loginedUser = data.nickname;

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = useState(false);

  const handleLogin = async () => {
    const userInput = {
      username: id,
      password: password,
    };

    await authActions.login(userInput).then((res) => {
      setShow(true);
    });
  };

  return (
    <>
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
        <Button variant="primary" onClick={handleLogin}>
          로그인
        </Button>
        <Button variant="warning" onClick={() => navigate("/regist")}>
          회원가입
        </Button>
      </Form>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>로그인 성공</Modal.Title>
        </Modal.Header>
        <Modal.Body>{loginedUser}님, 안녕하세요.</Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              setShow(false);
              navigate("/");
            }}
          >
            확인
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
