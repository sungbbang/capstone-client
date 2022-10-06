import {
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Breadcrumb,
  Button,
  Card,
  Layout,
  Menu,
  Skeleton,
  Image,
} from "antd";
import Meta from "antd/lib/card/Meta";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStudyActions } from "../api/study";
import Navbar from "../common/Navbar";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Option 1", "1", <UserOutlined />),
  getItem("내 그룹", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("채팅", "9", <FileOutlined />),
];

const App = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState();

  const studyActions = useStudyActions();

  const [studyGroupList, setStudyGroupList] = useState([]);

  const loadStudyList = async () => {
    setLoading(true);
    const res = await studyActions.getStudyList();
    if (res.status === 200) setStudyGroupList(res.data);
    setLoading(false);
  };

  useEffect(() => {
    loadStudyList();
  }, []);

  return (
    <Navbar>
      {/* <Card
        style={{ width: 400 }}
        loading={loading}
        cover={
          loading ? (
            <Skeleton.Image style={{ width: 400 }} />
          ) : (
            <Image
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              loading={loading}
            />
          )
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="스터디 제목"
          description="This is the description"
        />
      </Card> */}
      {studyGroupList.map((studyGroup) => (
        <Card
          key={studyGroup.id}
          style={{ width: 400 }}
          loading={loading}
          cover={
            <Image
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              loading={loading}
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={studyGroup.title}
            description={studyGroup.description}
          />
        </Card>
      ))}
      <Card
        style={{ width: 400 }}
        loading={loading}
        cover={
          <Image
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            loading={loading}
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="스터디 제목"
          description="This is the description"
        />
      </Card>
    </Navbar>
  );
};

export default App;
