import React from "react";
import { useState } from "react";
import { Navbar, Container, Nav, Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userDataState } from "../api/auth";

const Navigator = () => {
  const navigate = useNavigate();

  const data = useRecoilValue(userDataState);
  const loginedUser = data.nickname;

  const [show, setShow] = useState(false);

  return (
    <>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>스터디셀러</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate("/study_list")}>
                스터디
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/chat")}>
                채팅 & 화상회의
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/mypage")}>
                나의 페이지
              </Nav.Link>
            </Nav>
            <Nav>
              {localStorage.getItem("authToken") ? (
                <Navbar>
                  <Nav.Link eventKey="disabled" disabled>
                    지금 들어오신 분은 {loginedUser}
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => {
                      localStorage.removeItem("authToken");
                      setShow(true);
                      // navigate("/");
                    }}
                  >
                    Log out
                  </Nav.Link>
                </Navbar>
              ) : (
                <Navbar>
                  <Nav.Link onClick={() => navigate("/login")}>
                    Sign in
                  </Nav.Link>
                  <Nav.Link onClick={() => navigate("/regist")}>
                    Sign Up
                  </Nav.Link>
                </Navbar>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>로그아웃</Modal.Title>
        </Modal.Header>
        <Modal.Body>로그아웃되었습니다.</Modal.Body>
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

export default Navigator;
