import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function LogReg() {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleRegisterClick = () => {
    setShowLoginForm(false);
  };

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };
  return (
    <Container>
      <Row className="mt-5">
        {showLoginForm ? (
          <Col md={6}>
            {/* <h2>Login</h2> */}
            <LoginForm onRegisterClick={handleRegisterClick} />
          </Col>
        ) : (
          <Col md={6}>
            {/* <h2>Register</h2> */}
            <RegisterForm onLoginClick={handleLoginClick} />
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default LogReg;
