// // // import React from 'react';
// // // import { Form, Input, Button, Checkbox, message } from 'antd';
// // // import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
// // // import { useNavigate } from 'react-router-dom';
// // // import axios from 'axios';
// // // import './Login.css';
// // // import loginImage from '../../../assets/login.jpg';

// // // const Login = () => {
// // //   const navigate = useNavigate();

// // //   const onFinish = async (values) => {
// // //     try {
// // //       const response = await axios.post('http://localhost:5000/api/login', values);
// // //       console.log('Response:', response.data); // Log the response
// // //       if (response.data.success) {
// // //         localStorage.setItem('isAuthenticated', 'true');
// // //         navigate(response.data.redirectUrl); // Navigate to '/' after successful login
// // //       } else {
// // //         message.error(response.data.message);
// // //       }
// // //     } catch (error) {
// // //       console.error('Error:', error.response ? error.response.data.message : 'Login failed');
// // //       message.error(error.response ? error.response.data.message : 'Login failed');
// // //     }
// // //   };

// // //   const onFinishFailed = (errorInfo) => {
// // //     console.log('Failed:', errorInfo);
// // //   };

// // //   return (
// // //     <div className="login-container">
// // //       <div className="login-form-container">
// // //         <Form
// // //           name="login"
// // //           initialValues={{ remember: true }}
// // //           onFinish={onFinish}
// // //           onFinishFailed={onFinishFailed}
// // //         >
// // //           <h2>Login</h2>
// // //           <p>
// // //             Don't have an account yet? <a href="/Register">Sign Up</a>
// // //           </p>
// // //           <Form.Item
// // //             name="username"
// // //             rules={[{ required: true, message: 'Please input your username!' }]}
// // //           >
// // //             <Input placeholder="User Name" />
// // //           </Form.Item>

// // //           <Form.Item
// // //             name="password"
// // //             rules={[{ required: true, message: 'Please input your password!' }]}
// // //           >
// // //             <Input.Password placeholder="Password" />
// // //           </Form.Item>

// // //           <Form.Item>
// // //             <a href="/ResetPassword" className="forgot-password-link">
// // //               Forgot Password?
// // //             </a>
// // //           </Form.Item>

// // //           {/* <Form.Item name="remember" valuePropName="checked">
// // //             <Checkbox>Remember me</Checkbox>
// // //           </Form.Item> */}

// // //           <Form.Item>
// // //             <Button type="primary" htmlType="submit" className="login-button">
// // //               LOGIN
// // //             </Button>
// // //           </Form.Item>

// // //           <div className="or-login-with">or login with</div>

// // //           <div className="social-login-buttons">
// // //             <Button icon={<GoogleOutlined />} className="social-button google-button">
// // //               Google
// // //             </Button>
// // //             <Button icon={<FacebookOutlined />} className="social-button facebook-button">
// // //               Facebook
// // //             </Button>
// // //           </div>
// // //         </Form>
// // //       </div>
// // //       <div className="login-image-container">
// // //         <img src={loginImage} alt="Login Illustration" />
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Login;


// // import React, { useState } from 'react';
// // import { Form, Input, Button, Checkbox, message, Modal } from 'antd';
// // import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import './Login.css';
// // import loginImage from '../../../assets/login.jpg';

// // const Login = () => {
// //   const navigate = useNavigate();
// //   const [showResetModal, setShowResetModal] = useState(false); // State for showing password reset modal

// //   const onFinish = async (values) => {
// //     try {
// //       const response = await axios.post('http://localhost:5000/api/login', values);
// //       console.log('Response:', response.data); // Log the response
// //       if (response.data.success) {
// //         localStorage.setItem('isAuthenticated', 'true');
// //         navigate(response.data.redirectUrl); // Navigate to '/' after successful login
// //       } else {
// //         message.error(response.data.message);
// //       }
// //     } catch (error) {
// //       console.error('Error:', error.response ? error.response.data.message : 'Login failed');
// //       message.error(error.response ? error.response.data.message : 'Login failed');
// //     }
// //   };

// //   const onFinishFailed = (errorInfo) => {
// //     console.log('Failed:', errorInfo);
// //   };

// //   // Handler to open password reset modal
// //   const handleOpenResetModal = () => {
// //     setShowResetModal(true);
// //   };

// //   // Handler to close password reset modal
// //   const handleCloseResetModal = () => {
// //     setShowResetModal(false);
// //   };

// //   return (
// //     <div className="login-container">
// //       <div className="login-form-container">
// //         <Form
// //           name="login"
// //           initialValues={{ remember: true }}
// //           onFinish={onFinish}
// //           onFinishFailed={onFinishFailed}
// //         >
// //           <h2>Login</h2>
// //           <p>
// //             Don't have an account yet? <a href="/Register">Sign Up</a>
// //           </p>
// //           <Form.Item
// //             name="username"
// //             rules={[{ required: true, message: 'Please input your username!' }]}
// //           >
// //             <Input placeholder="User Name" />
// //           </Form.Item>

// //           <Form.Item
// //             name="password"
// //             rules={[{ required: true, message: 'Please input your password!' }]}
// //           >
// //             <Input.Password placeholder="Password" />
// //           </Form.Item>

// //           <Form.Item>
// //             <a href="#" className="forgot-password-link" onClick={handleOpenResetModal}>
// //               Forgot Password?
// //             </a>
// //           </Form.Item>

// //           <Form.Item>
// //             <Button type="primary" htmlType="submit" className="login-button">
// //               LOGIN
// //             </Button>
// //           </Form.Item>

// //           <div className="or-login-with">or login with</div>

// //           <div className="social-login-buttons">
// //             <Button icon={<GoogleOutlined />} className="social-button google-button">
// //               Google
// //             </Button>
// //             <Button icon={<FacebookOutlined />} className="social-button facebook-button">
// //               Facebook
// //             </Button>
// //           </div>
// //         </Form>
// //       </div>
// //       <div className="login-image-container">
// //         <img src={loginImage} alt="Login Illustration" />
// //       </div>

// //       {/* Password Reset Modal */}
// //       <Modal
// //         title="Password Reset"
// //         visible={showResetModal}
// //         onCancel={handleCloseResetModal}
// //         footer={null}
// //       >
// //         {/* Password reset form goes here */}
// //         <Form>
// //           <Form.Item
// //             label="Email"
// //             name="email"
// //             rules={[{ required: true, message: 'Please input your email!' }]}
// //           >
// //             <Input />
// //           </Form.Item>

// //           <Form.Item>
// //             <Button type="primary" htmlType="submit">
// //               Reset Password
// //             </Button>
// //           </Form.Item>
// //         </Form>
// //       </Modal>
// //     </div>
// //   );
// // };

// // export default Login;

// import React, { useState } from 'react';
// import { Form, Input, Button, message, Modal } from 'antd';
// import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Login.css';
// import loginImage from '../../../assets/login.jpg';

// const Login = () => {
//   const navigate = useNavigate();
//   const [showResetModal, setShowResetModal] = useState(false); // State for showing password reset modal
//   const [resetLoading, setResetLoading] = useState(false); // State for reset password loading

//   const onFinish = async (values) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/login', values);
//       console.log('Response:', response.data); // Log the response
//       if (response.data.success) {
//         localStorage.setItem('isAuthenticated', 'true');
//         navigate(response.data.redirectUrl); // Navigate to '/' after successful login
//       } else {
//         message.error(response.data.message);
//       }
//     } catch (error) {
//       console.error('Error:', error.response ? error.response.data.message : 'Login failed');
//       message.error(error.response ? error.response.data.message : 'Login failed');
//     }
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };

//   // Handler to open password reset modal
//   const handleOpenResetModal = () => {
//     setShowResetModal(true);
//   };

//   // Handler to close password reset modal
//   const handleCloseResetModal = () => {
//     setShowResetModal(false);
//   };

//   // Handle submit for password reset form
//   const handleResetPassword = async (values) => {
//     try {
//       setResetLoading(true);
//       const response = await axios.post('http://localhost:5000/api/reset-password/request', values);
//       console.log('Reset Password Response:', response.data);
//       message.success(response.data.message);
//       setShowResetModal(false); // Close modal after successful reset
//     } catch (error) {
//       console.error('Error:', error.response ? error.response.data.message : 'Password reset failed');
//       message.error(error.response ? error.response.data.message : 'Password reset failed');
//     } finally {
//       setResetLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-form-container">
//         <Form
//           name="login"
//           initialValues={{ remember: true }}
//           onFinish={onFinish}
//           onFinishFailed={onFinishFailed}
//         >
//           <h2>Login</h2>
//           <p>
//             Don't have an account yet? <a href="/Register">Sign Up</a>
//           </p>
//           <Form.Item
//             name="username"
//             rules={[{ required: true, message: 'Please input your username!' }]}
//           >
//             <Input placeholder="User Name" />
//           </Form.Item>

//           <Form.Item
//             name="password"
//             rules={[{ required: true, message: 'Please input your password!' }]}
//           >
//             <Input.Password placeholder="Password" />
//           </Form.Item>

//           <Form.Item>
//             <a href="#" className="forgot-password-link" onClick={handleOpenResetModal}>
//               Forgot Password?
//             </a>
//           </Form.Item>

//           <Form.Item>
//             <Button type="primary" htmlType="submit" className="login-button">
//               LOGIN
//             </Button>
//           </Form.Item>

//           <div className="or-login-with">or login with</div>

//           <div className="social-login-buttons">
//             <Button icon={<GoogleOutlined />} className="social-button google-button">
//               Google
//             </Button>
//             <Button icon={<FacebookOutlined />} className="social-button facebook-button">
//               Facebook
//             </Button>
//           </div>
//         </Form>
//       </div>
//       <div className="login-image-container">
//         <img src={loginImage} alt="Login Illustration" />
//       </div>

//       {/* Password Reset Modal */}
//       <Modal
//         title="Password Reset"
//         visible={showResetModal}
//         onCancel={handleCloseResetModal}
//         footer={null}
//       >
//         {/* Password reset form */}
//         <Form name="resetPassword" onFinish={handleResetPassword}>
//           <Form.Item
//             label="Email"
//             name="email"
//             rules={[{ required: true, message: 'Please input your email!' }]}
//           >
//             <Input />
//           </Form.Item>

//           <Form.Item>
//             <Button type="primary" htmlType="submit" loading={resetLoading}>
//               Reset Password
//             </Button>
//           </Form.Item>
//         </Form>
//       </Modal>
//     </div>
//   );
// };

// export default Login;

