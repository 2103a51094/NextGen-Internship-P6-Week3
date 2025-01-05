import React, { useState } from 'react';
import '../styles/login.css';
import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
  
    try {
      // Make POST request to backend API for login
      const res = await axios.post('http://localhost:4000/api/v1/auth/login', credentials, {
        withCredentials: true,  // Make sure cookies are included in the request
      });
  
      if (res.data.success) {
        // Successful login, store user data in localStorage
        localStorage.setItem('user', JSON.stringify(res.data.data));  // Store user data in localStorage
  
        // Log user data to the console for debugging
        console.log('Login successful:', res.data);
  
        // Redirect to home page or dashboard (whichever you prefer)
        navigate('/');  // Navigate to the home page ("/")
        // Or if you have a dashboard, use:
        // navigate('/dashboard');  // Navigate to the dashboard page
      } else {
        // Alert user if login failed
        alert('Login failed: ' + res.data.message);
      }
    } catch (err) {
      // Handle any errors that occur during login
      console.error('Login error:', err);
      alert('Login failed. Please try again.');
    }
  };
  

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="login" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="user" />
                </div>
                <h2>Login</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      required
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      id="password"
                      placeholder="Password"
                      required
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button className="btn secondary__btn auth__btn" type="submit">
                    Login
                  </Button>
                </Form>
                <p>
                  Don't have an account? <Link to="/register">Create</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
