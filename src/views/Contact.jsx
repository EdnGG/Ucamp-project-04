import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import { sendUserMessage } from "../services/user";

const Contact = () => {
  //  States
  const [userMessage, setUserMessage] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [show, setShow] = useState(false);
  // End States

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setUserMessage({
      ...userMessage,
      [key]: value,
    });
  };
  const sendMessage = async (e) => {
    e.preventDefault();
    if (
      userMessage.email === "" ||
      userMessage.message === "" ||
      userMessage.username === ""
    ) {
      setShow(true);
      return;
    }
    await sendUserMessage(
      userMessage.email,
      userMessage.username,
      userMessage.message
    );
    setUserMessage({
      username: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <Form onSubmit={sendMessage}>
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

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={3}
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
