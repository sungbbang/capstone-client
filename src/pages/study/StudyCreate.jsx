// import React, { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { post } from "../../api";

// const StudyEdit = () => {
//   const navigate = useNavigate();

//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [area, setArea] = useState("");

//   const defaultSection = ["어학", "IT", "자격증", "토익"];
//   const [section, setSection] = useState("");

//   const [text, setText] = useState("");
//   const [hashtag, setHashtag] = useState([]);
//   const params = useParams();

//   const createStudy = async () => {
//     await post("/study", {
//       title: title,
//       content: content,
//       section: section,
//       area: area,
//       hashtag: hashtag.toString(),
//     });
//     navigate("/study_list");
//   };
//   const handleHashTag = () => {
//     setText("");
//     if (hashtag.length < 3) {
//       if (text !== "") {
//         if (hashtag.includes(text)) {
//           alert("중복된 해시태그입니다.");
//         } else {
//           hashtag.push(text);
//           setHashtag(hashtag);
//         }
//       } else {
//         alert("빈 해시태그는 입력할 수 없습니다.");
//       }
//     } else {
//       alert("해시태그는 최대 3개까지 입력할 수 있습니다.");
//     }
//   };
//   return (
//     <>
//       <h4>스터디 생성</h4>
//       <div className="study-title">
//         <label>제목</label>
//         <input
//           onChange={(e) => {
//             setTitle(e.target.value);
//           }}
//         ></input>
//       </div>
//       <div className="study-content">
//         <label>내용</label>
//         <textarea
//           onChange={(e) => {
//             setContent(e.target.value);
//           }}
//         ></textarea>
//       </div>
//       <div className="study-area">
//         <label>지역</label>
//         <select
//           name="area"
//           id="area"
//           onChange={(e) => {
//             setArea(e.target.value);
//           }}
//         >
//           <optgroup label="지역"></optgroup>
//           <option value="지역">===지역을 골라주세요===</option>
//           <option>없음(비대면 스터디)</option>
//           <option>서울</option>
//           <option>대전</option>
//           <option>세종</option>
//         </select>
//       </div>
//       <div className="study-section">
//         <label>분야</label>
//         {defaultSection.map((a, i) => (
//           <Section
//             key={i}
//             defaultSection={defaultSection[i]}
//             setSection={setSection}
//           />
//         ))}
//       </div>
//       {hashtag.map((a, i) => (
//         <div className="hashtag" key={i}>
//           <span
//             onClick={() => {
//               const copy = hashtag.filter((tag, index) => index !== i);
//               setHashtag(copy);
//             }}
//           >
//             # {a} ❌
//           </span>
//         </div>
//       ))}
//       <div className="hashtag-input">
//         <input
//           value={text}
//           placeholder="#해시태그"
//           onChange={(e) => setText(e.target.value)}
//         ></input>
//         <button onClick={handleHashTag}>작성</button>
//       </div>
//       <div>
//         <button onClick={createStudy}>스터디 생성</button>
//       </div>
//     </>
//   );
// };

// const Section = ({ defaultSection, setSection }) => {
//   return (
//     <>
//       <input
//         type="radio"
//         name="genre"
//         onClick={() => {
//           const copy = defaultSection;
//           setSection(copy);
//         }}
//       ></input>
//       <label>{defaultSection}</label>
//     </>
//   );
// };

// export default StudyEdit;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStudyActions } from "../../api/study";
import { Button, Form, Input, Space } from "antd";
import Navbar from "../../common/Navbar";

const { TextArea } = Input;

const Regist = () => {
  const navigate = useNavigate();
  const studyActions = useStudyActions();

  const onFinish = async (values) => {
    const res = await studyActions.createStudy(values);

    navigate(`/`);

    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Navbar>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Space direction="vertical">
            <Form.Item
              label="제목"
              name="title"
              rules={[
                {
                  required: true,
                  message: "닉네임을 입력해 주세요.",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="상세 정보"
              name="description"
              rules={[
                {
                  required: true,
                  message: "스터디 그룹을 설명해 주세요.",
                },
              ]}
            >
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item
              label="주제"
              name="section"
              rules={[
                {
                  required: true,
                  message: "주제를 선택해 주세요.",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="태그"
              name="hashtag"
              rules={[
                {
                  required: true,
                  message: "닉네임을 선택해 주세요.",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="지역"
              name="area"
              rules={[
                {
                  required: true,
                  message: "지역을 선택해 주세요.",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="날짜"
              name="date"
              rules={[
                {
                  required: true,
                  message: "날짜를 입력해 주세요.",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Space direction="horizontal">
                <Button type="primary" htmlType="submit">
                  스터디 생성
                </Button>
              </Space>
            </Form.Item>
          </Space>
        </Form>
      </Navbar>
    </>
  );
};

export default Regist;
