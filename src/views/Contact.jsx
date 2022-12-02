import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import { register } from "../services/auth";

const Contact = () => {
  //  States
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);
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
  };

  return (
    <div>
      <Form onSubmit={sendUser}>
        <Form.Group className="mb-3" controlId="formGroupName">
          {/* <Form.Label>Name</Form.Label> */}
          <Form.Control
            name="username"
            type="text"
            placeholder="Your name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          {/* <Form.Label>Email</Form.Label> */}
          <Form.Control
            name="email"
            type="email"
            placeholder="Your email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control
            name="phone"
            type="text"
            placeholder="Your phone"
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
    </div>
  );
};

export default Contact;
