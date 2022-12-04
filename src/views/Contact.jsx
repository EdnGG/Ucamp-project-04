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
  const [showSuccess, setShowSuccess] = useState(false);
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
      userMessage.username,
      userMessage.email,
      userMessage.message,
      userMessage.username
    );
    e.target.reset();
    setUserMessage({
      username: "",
      email: "",
      message: "",
    });
    setShowSuccess(true);
    console.log("userMessage: ", userMessage);
  };

  return (
    <div className="container__contact-form">
      <h1 className="p-4">Estamos felices de escuchar tus comentarios!!</h1>
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

      <Alert
        show={showSuccess}
        variant="primary"
        onClick={() => setShowSuccess(false)}
        className="alert__success"
        dismissible
      >
        <Alert.Heading className="alert__heading">
          Thanks for the feedback! Well get back to you as soon as possible.
        </Alert.Heading>
      </Alert>

      {/* <div>
        <Button variant="primary" type="button">
          Go back
        </Button>
      </div> */}
    </div>
  );
};

export default Contact;
