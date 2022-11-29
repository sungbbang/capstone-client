import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "./chat.css";

const ChatRoom = ({ socket, id, userName, roomName }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        studyId: id,
        author: userName,
        room: roomName,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setCurrentMessage("");
      setMessageList((list) => [...list, messageData]);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  useEffect(() => {
    const chats = JSON.parse(window.localStorage.getItem(`chat_history${id}`));
    if (chats) {
      setMessageList(chats);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      `chat_history${id}`,
      JSON.stringify(messageList)
    );
  }, [messageList]);

  return (
    <>
      <div className="chat-window">
        <div className="chat-header">
          <p>{roomName}</p>
        </div>
        <div className="chat-body">
          <ScrollToBottom className="message-container">
            {messageList.map((messageContent, index) => (
              <div
                className="message"
                id={userName === messageContent.author ? "you" : "other"}
                key={index}
              >
                <div>
                  <div className="message-content">
                    {messageContent.message}
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </ScrollToBottom>
        </div>
        <div className="chat-footer">
          <input
            type="text"
            value={currentMessage}
            placeholder="MESSAGE"
            onChange={(e) => {
              setCurrentMessage(e.target.value);
            }}
            onKeyPress={(e) => {
              e.key === "Enter" && sendMessage();
            }}
          />
          <button
            onClick={() => {
              sendMessage();
            }}
          >
            &#8594;
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatRoom;
