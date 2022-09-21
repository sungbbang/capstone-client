import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthActions } from "../../api/auth";
import { Button, Checkbox, Form, Input, Space } from "antd";
import Navbar from "../../common/Navbar";

const Login = () => {
  const navigate = useNavigate();

  const authActions = useAuthActions();

  const onFinish = (values) => {
    console.log("Success:", values);
    authActions.login(values).then((res) => {
      navigate(`/`);
    });
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
              label="아이디"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="비밀번호"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Space direction="horizontal">
                <Button type="primary" htmlType="submit">
                  로그인
                </Button>
                <Button
                  htmlType="button"
                  onClick={() => {
                    navigate("/regist");
                  }}
                >
                  회원가입
                </Button>
              </Space>
            </Form.Item>
          </Space>
        </Form>
      </Navbar>
    </>
  );
};

export default Login;
