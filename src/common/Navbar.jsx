import {
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Avatar, Breadcrumb, Button, Layout, Menu, Space } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  getItem("찾아보기", "1", <MenuOutlined />),
  getItem("내 그룹", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("채팅", "9", <FileOutlined />),
];

const Navbar = ({ children }) => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div>
          <div>
            <Space
              direction="horizontal"
              style={{
                margin: "5px",
              }}
            >
              <Avatar size="large" icon={<UserOutlined />} />
              {localStorage.getItem("studyCapstone") ? (
                <Button
                  size="small"
                  style={{
                    margin: "0 2px",
                    verticalAlign: "middle",
                  }}
                  onClick={() => {
                    localStorage.removeItem("studyCapstone");
                    navigate("/login");
                  }}
                >
                  로그아웃
                </Button>
              ) : (
                <Button
                  size="small"
                  style={{
                    margin: "0 2px",
                    verticalAlign: "middle",
                  }}
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  로그인하기
                </Button>
              )}

              <Button
                size="small"
                style={{
                  margin: "0 2px",
                  verticalAlign: "middle",
                }}
                onClick={() => {
                  navigate("/regist");
                }}
              >
                회원가입
              </Button>
            </Space>
          </div>
        </div>
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          {children}
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Navbar;
