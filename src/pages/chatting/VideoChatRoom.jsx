import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import {
  Button,
  Col,
  FloatingLabel,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";

const VideoChatRoom = () => {
  const [cameraList, setCameraList] = useState([
    "노트북 캠",
    "그냥 캠",
    "여캠",
  ]);
  const [micList, setMicList] = useState([
    "노트북 마이크",
    "노래방 마이크",
    "그냥 마이크",
  ]);

  const [play, setPlay] = useState(false);
  const [mute, setMute] = useState(false);

  const videoRef = useRef(null);

  const getMedia = (callback) => {
    try {
      const constraints = {
        video: true,
        audio: false,
      };
      navigator.mediaDevices.getUserMedia(constraints).then(callback);
    } catch (err) {
      console.log(err);
      return undefined;
    }
  };

  const showVideo = () => {
    if (play) {
      const s = videoRef.current.srcObject;
      s.getTracks().forEach((track) => {
        track.stop();
      });
    } else {
      getMedia((stream) => {
        setPlay(true);
        videoRef.current.srcObject = stream;
      });
    }
    setPlay(!play);
  };

  const muteAudio = () => {
    if (mute) {
    }
    setMute(true);
  };

  useEffect(() => {
    getMedia((stream) => {
      setPlay(true);
      videoRef.current.srcObject = stream;
    });
  }, []);

  return (
    <>
      <div>
        <ListGroup>
          <ListGroup.Item>
            <h3>화상(들이 하는)회의</h3>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              width="400"
              height="300"
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <Row className="g-2">
              <Col>
                <FloatingLabel
                  controlId="floatingSelect"
                  label="카메라를 골라주세요."
                >
                  <Form.Select
                    aria-label="Floating label select example"
                    onChange={(e) => console.log(e.target.value)}
                  >
                    <option disabled>너의 카메라 종류</option>
                    {cameraList.map((camera, index) => (
                      <option key={index} value={camera}>
                        {camera}
                      </option>
                    ))}
                  </Form.Select>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingSelect"
                  label="마이크를 골라주세요."
                >
                  <Form.Select
                    aria-label="Floating label select example"
                    onChange={(e) => console.log(e.target.value)}
                  >
                    <option disabled>너의 마이크 종류</option>
                    {micList.map((mic, index) => (
                      <option key={index} value={mic}>
                        {mic}
                      </option>
                    ))}
                  </Form.Select>
                </FloatingLabel>
              </Col>
            </Row>
            <Button variant="primary" onClick={showVideo}>
              {play ? "비디오 중지" : "비디오 시작"}
            </Button>
            <Button variant="primary" onClick={muteAudio}>
              {!mute ? "음소거" : "음소거 해제"}
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <h4>다른 사람들 비디오가 보여야할 곳</h4>
        <video></video>
      </div>
    </>
  );
};

const VideoChat = () => {
  return (
    <div>
      <div id="rooms">
        <form>
          <input type="text" placeholder="room name" required />
          <button>Enter</button>
        </form>
      </div>
      <div id="setting">
        <h2>Select Your Camera and Audio</h2>
        <div>
          <video
            id="myVideo"
            autoPlay
            playsInline
            width="600"
            height="500"
          ></video>
          <div>
            <h3>Camera Lists</h3>
            <select id="cameraList"></select>
            <h3>Mic Lists</h3>
            <select id="micList"></select>
            <button id="mute">Audio Mute</button>
            <button id="turnoff">Video Turn Off</button>
          </div>
        </div>
        <button id="next">Next</button>
      </div>
      <div id="videos">
        <video
          id="myVideo2"
          autoPlay
          playsInline
          width="600"
          height="500"
        ></video>
      </div>
    </div>
  );
};

export default VideoChatRoom;
