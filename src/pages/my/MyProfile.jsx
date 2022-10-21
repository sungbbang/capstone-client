import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const MyProfile = ({ userData }) => {
  return (
    <>
      {localStorage.getItem("authToken") ? (
        <div>
          <h4>나의 프로필</h4>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>닉네임: {userData.nickname}</Card.Title>
              <Card.Text>자기소개: {userData.introduce}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>관심분야: {userData.category}</ListGroup.Item>
              <ListGroup.Item>지역: {userData.area}</ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      ) : (
        alert("로그인 후 이용해주세요.")
      )}
    </>
  );
};

export default MyProfile;
