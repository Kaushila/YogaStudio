import React from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import axios from 'axios';
import './JoinClassForm.css';

const { Option } = Select;

const JoinClassForm = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      await axios.post('http://localhost:5000/api/join-class', values);
      message.success('You have successfully joined the class!');
      form.resetFields();
    } catch (error) {
      message.error('There was an error submitting your details. Please try again.');
    }
  };

  return (
    <div className="join-class-form-container">
      <h2>Join Yoga Class</h2>
      <Form
        form={form}
        name="join_class"
        onFinish={onFinish}
        layout="vertical"
        initialValues={{ remember: true }}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please enter your email' }, { type: 'email', message: 'Please enter a valid email' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone"
          rules={[{ required: true, message: 'Please enter your phone number' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="preferredClass"
          label="Preferred Yoga Class"
          rules={[{ required: true, message: 'Please select your preferred yoga class' }]}
        >
          <Select placeholder="Select a class">
            <Option value="Gentle Hatha Yoga">Gentle Hatha Yoga</Option>
            <Option value="Vinyasa Flow">Vinyasa Flow</Option>
            <Option value="Restorative Yoga">Restorative Yoga</Option>
            <Option value="Pre Natal Yoga">Pre Natal Yoga</Option>
            <Option value="Post Natal Yoga">Post Natal Yoga</Option>
            <Option value="Kids Super Brain Yoga">Kids Super Brain Yoga</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Join Class
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default JoinClassForm;
