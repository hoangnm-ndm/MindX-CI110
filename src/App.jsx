import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { TextInput } from "./components/ui/TextInput";

const App = () => {
  const onFinish = (values) => {
    // thực hiện hiển thị các giá trị được cung cấp từ input trong form
    console.log("Success:", values);
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <TextInput />

      <Form onFinish={onFinish}>
        <Form.Item
          label="Username"
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
          label="Password"
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

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default App;
