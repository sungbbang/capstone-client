import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthActions } from "../../api/auth";
import { Button, Checkbox, Form, Input, Space } from "antd";
import Navbar from "../../common/Navbar";

const Regist = () => {
  const navigate = useNavigate();
  const authActions = useAuthActions();

  const onFinish = async (values) => {
    const res = await authActions.register(values);

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
              label="비밀번호 확인"
              name="password-check"
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
              label="닉네임"
              name="nickname"
              rules={[
                {
                  required: true,
                  message: "닉네임",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="소개"
              name="introduce"
              rules={[
                {
                  required: true,
                  message: "자기 소개",
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
                  message: "지역",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="카테고리"
              name="category"
              rules={[
                {
                  required: true,
                  message: "카테고리",
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

export default Regist;
