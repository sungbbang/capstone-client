import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useStudyActions } from "../../api/study";
import ChatRoom from "./ChatRoom";
import VideoChatRoom from "./VideoChatRoom";
import { useRecoilState, useRecoilValue } from "recoil";
import { userDataState } from "../../api/auth";

const chatSocket = io.connect("http://localhost:3002");
const videoSocket = io.connect("http://localhost:3003");

// todo
const Chat = () => {
  const navigate = useNavigate();

  const studyActions = useStudyActions();

  const data = useRecoilValue(userDataState);

  const userName = data.nickname;
  const [myStudy, setMyStudy] = useState([]);
  const [roomName, setRoomName] = useState();

  const [showChat, setShowChat] = useState(false);
  const [showVideoChat, setShowVideoChat] = useState(false);

  const joinChatRoom = () => {
    if (userName !== "" && roomName !== "") {
      chatSocket.emit("join_room", userName, roomName);
      setShowChat(true);
    }
  };
  const joinVideoChatRoom = ({ id, userName, roomName }) => {
    if (userName !== "" && roomName !== "") {
      videoSocket.emit("join_room", userName, roomName);
      navigate(`/chat/video:${id}`);
    }
  };

  useEffect(() => {
    setMyStudy(data.study);
  }, []);

  return (
    <>
      {localStorage.getItem("authToken") ? (
        <div>
          <h2>나의 스터디</h2>
          <hr />
          {myStudy.map((study) => (
            <Card key={study.id}>
              <Card.Header>{study.title}</Card.Header>
              <Card.Body>
                <Card.Title>제목: {study.title}</Card.Title>
                <Card.Text>소개: {study.description}</Card.Text>
                <Button
                  id={study.id}
                  variant="primary"
                  onClick={() => {
                    // setRoomName(study.title);
                    joinChatRoom(study.id);
                  }}
                >
                  채팅하기
                </Button>
                <Button
                  id={study.id}
                  variant="primary"
                  onClick={joinVideoChatRoom}
                >
                  화상회의
                </Button>
              </Card.Body>
            </Card>
          ))}
          {showChat ? (
            <ChatRoom
              socket={chatSocket}
              userName={userName}
              roomName={roomName}
            />
          ) : null}
          {showVideoChat ? (
            <VideoChatRoom
              socket={videoSocket}
              userName={userName}
              roomName={roomName}
            />
          ) : null}
        </div>
      ) : (
        alert("로그인 후 이용해주세요.")
      )}
    </>
  );
};

export default Chat;
