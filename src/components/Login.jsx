import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useHistory, Redirect } from "react-router-dom";
import { register } from "../services/auth";

const Login = () => {
  let history = useHistory();
  //  States
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  const [sesion, setSesion] = useState(false);
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
      return history.push("/about");
    }
    await register(user.email, user.password);
    setSesion(true);
    setUser({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      {sesion ? (
        <Redirect to="/about" />
      ) : (
        <div>
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
        </div>
      )}
    </div>
  );
};

export default Login;
