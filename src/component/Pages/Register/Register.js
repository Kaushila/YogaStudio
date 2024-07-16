// import React, { useState } from 'react';
// import { Form, Input, Button, message } from 'antd';
// import axios from 'axios';
// import './Register.css'; // Import CSS file

// const Register = () => {
//   const [loading, setLoading] = useState(false);

//   const onFinish = async (values) => {
//     setLoading(true);
//     try {
//       const response = await axios.post('http://localhost:5000/api/register', values);
//       console.log('Response:', response.data);
//       if (response.data.success) {
//         message.success(response.data.message);
//         // Redirect to login or handle as needed
//       } else {
//         message.error(response.data.error || 'Registration failed');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       message.error('Registration failed');
//     }
//     setLoading(false);
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };

//   return (
//     <div className="register-container">
//       <Form
//         name="register"
//         initialValues={{ remember: true }}
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//       >
//         <h2>Register</h2>
//         <Form.Item
//           className="form-item"
//           name="fname"
//           rules={[{ required: true, message: 'Please input your first name!' }]}
//         >
//           <Input placeholder="First Name" />
//         </Form.Item>

//         <Form.Item
//           className="form-item"
//           name="lname"
//           rules={[{ required: true, message: 'Please input your last name!' }]}
//         >
//           <Input placeholder="Last Name" />
//         </Form.Item>

//         <Form.Item
//           className="form-item"
//           name="username"
//           rules={[{ required: true, message: 'Please input your username!' }]}
//         >
//           <Input placeholder="Username" />
//         </Form.Item>

//         <Form.Item
//           className="form-item"
//           name="email"
//           rules={[
//             { required: true, message: 'Please input your email!' },
//             { type: 'email', message: 'Please enter a valid email!' },
//           ]}
//         >
//           <Input placeholder="Email" />
//         </Form.Item>

//         <Form.Item
//           className="form-item"
//           name="password"
//           rules={[{ required: true, message: 'Please input your password!' }]}
//         >
//           <Input.Password placeholder="Password" />
//         </Form.Item>

//         <Form.Item className="form-item">
//           <Button type="primary" htmlType="submit" loading={loading}>
//             {loading ? 'Registering...' : 'REGISTER'}
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Register.css'; // Import CSS file

const Register = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/register', values);
      console.log('Response:', response.data);
      if (response.data.success) {
        message.success(response.data.message);
        navigate('/'); // Redirect to login page
      } else {
        message.error(response.data.error || 'Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      message.error('Registration failed');
    }
    setLoading(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="register-container">
      <Form
        name="register"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <h2>Register</h2>
        <Form.Item
          className="form-item"
          name="fname"
          rules={[{ required: true, message: 'Please input your first name!' }]}
        >
          <Input placeholder="First Name" />
        </Form.Item>

        <Form.Item
          className="form-item"
          name="lname"
          rules={[{ required: true, message: 'Please input your last name!' }]}
        >
          <Input placeholder="Last Name" />
        </Form.Item>

        <Form.Item
          className="form-item"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          className="form-item"
          name="email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email!' },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          className="form-item"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item className="form-item">
          <Button type="primary" htmlType="submit" loading={loading}>
            {loading ? 'Registering...' : 'REGISTER'}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
