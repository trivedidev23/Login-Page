import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [agree, setAgree] = useState(false);

  const handleChangeEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleChangePasswd = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email1 = "samcom@gmail.com";
    const email2 = "samcomTechnobrains@gmail.com";
    const password1 = "123";
    const password2 = "sam123@";

    if (
      (email === email1 && password === password1) ||
      (email === email2 && password === password2)
    ) {
      setIsAuthenticated(true);
    } else {
      alert("Wrong Credentials");
    }
  };

  const checkboxHandler = () => {
    setAgree(!agree);
    if (!agree) {
      alert("You are agreed to the term and policies.");
    }
  };

  if (isAuthenticated) return <Navigate to="/" />;

  return (
    <>
      <form
        className="container"
        autoComplete="off"
        onSubmit={handleSubmit}
        style={{ marginTop: "30px" }}
      >
        <legend>
          <h1>Sign In</h1>
        </legend>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Enter Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Enter Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={handleChangePasswd}
          />
        </div>

        <div>
          <input type="checkbox" id="agree" onChange={checkboxHandler} />
          <label htmlFor="agree">
            {" "}
            I agree to <b>terms and conditions</b>
          </label>
        </div>

        <button type="submit" disabled={!agree} className="btn btn-primary">
          Sign In
        </button>
      </form>
    </>
  );
};

export default Login;
