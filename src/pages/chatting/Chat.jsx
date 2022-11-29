import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { Button, Card } from "react-bootstrap";
import { useStudyActions } from "../../api/study";
import ChatRoom from "./ChatRoom";
import { useRecoilValue } from "recoil";
import { userDataState } from "../../api/auth";

const chatSocket = io.connect("http://localhost:3002");

const Chat = () => {
  const studyActions = useStudyActions();

  const data = useRecoilValue(userDataState);

  const userName = data.nickname;
  let roomName;

  const [myStudy, setMyStudy] = useState([]);

  const [showChat, setShowChat] = useState(null);

  const joinChatRoom = (id) => {
    let room = myStudy.filter((study) => study.id === id);
    roomName = room[0].title;
    if (userName !== "" && roomName !== "") {
      chatSocket.emit("join_room", userName, roomName);
      setShowChat(id);
    }
  };

  const loadMyStudyList = async () => {
    const res = await studyActions.getStudyList();
    if (res.status === 200) {
      let result = res.data.filter((users) => users.users.includes(userName));
      setMyStudy(result);
    }
  };

  useEffect(() => {
    loadMyStudyList();
  }, []);

  return (
    <>
      {localStorage.getItem("authToken") ? (
        <div>
          <h2>나의 스터디</h2>
          <hr />
          {myStudy.map((study) => (
            <div key={study.id}>
              <Card>
                <Card.Header>{study.title}</Card.Header>
                <Card.Body>
                  <Card.Title>제목: {study.title}</Card.Title>
                  <Card.Text>소개: {study.description}</Card.Text>
                  <Button
                    id={study.id}
                    variant="primary"
                    onClick={(e) =>
                      Number(e.target.id) === study.id
                        ? joinChatRoom(study.id)
                        : null
                    }
                  >
                    채팅하기
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() =>
                      window.open("http://localhost:3003/", "_self")
                    }
                  >
                    화상회의
                  </Button>
                </Card.Body>
              </Card>
              {showChat === study.id ? (
                <ChatRoom
                  socket={chatSocket}
                  id={study.id}
                  userName={userName}
                  roomName={study.title}
                />
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        alert("로그인 후 이용해주세요.")
      )}
    </>
  );
};
export default Chat;
