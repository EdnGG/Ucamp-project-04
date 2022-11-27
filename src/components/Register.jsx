import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { register } from "../services/auth";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

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
    await register(user.email, user.password);
    // const newUser = {
    //   user: user.username,
    //   email: user.email,
    //   password: user.password,
    // };
    // console.log(`New user: ${newUser}`);

    // console.log(`User: ${user.username}`);
    // console.log(`Email: ${user.email}`);
    // console.log(`Password: ${user.password}`);
    return user;
  };

  return (
    <Form onSubmit={sendUser}>
      <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="username"
          type="text"
          placeholder="Name"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>
  );
};

export default Register;
