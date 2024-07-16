import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';

const ForgetPassword = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // Replace with your backend API endpoint
      await axios.post('http://localhost:5000/api/forget-password', values);
      message.success('A password reset link has been sent to your email.');
    } catch (error) {
      message.error('Failed to send password reset link. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="forget-password-container">
      <h2>Forget Password</h2>
      <Form
        name="forget_password"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'The input is not valid E-mail!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ForgetPassword;
