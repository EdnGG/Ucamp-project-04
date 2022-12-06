import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import { register } from "../services/auth";

const Register = () => {
  const navigate = useNavigate();
  //  States
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  // End States

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [key]: value,
    });
  };
  const sendUser = async (e) => {
    e.preventDefault();
    if (user.email === "" || user.password === "" || user.username === "") {
      setShow(true);
      return;
    }
    await register(user.email, user.password);
    setUser({
      username: "",
      email: "",
      password: "",
    });
    setShowSuccess(true);
    e.target.reset();
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <div className="container__contact-form">
      <h1 className="p-4">Sign up</h1>
      <Form onSubmit={sendUser}>
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Control
            name="username"
            type="text"
            placeholder="Name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Control
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Control
            name="password"
            type="text"
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>

      <Alert
        show={show}
        variant="primary"
        onClick={() => setShow(false)}
        className="alert__error"
        dismissible
      >
        <Alert.Heading className="alert__heading">
          Please fill all the fields to register in the app.
        </Alert.Heading>
      </Alert>

      <Alert
        show={showSuccess}
        variant="primary"
        onClick={() => setShowSuccess(false)}
        className="alert__success"
        dismissible
      >
        <Alert.Heading className="alert__heading">
          You have been registered successfully.
        </Alert.Heading>
      </Alert>
      <div className="mt-4">
        <Link to="/" className="navbar__link" href="#">
          <Button variant="secondary" type="button">
            Go back
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
