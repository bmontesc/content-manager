import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpView.css";
import { useState, useEffect, useRef } from "react";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


export const SignUpView = (props) => {
  const emailRef = useRef();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false)

  useEffect(() => {
    emailRef.current.focus()
  }, [])

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email))
  },[email])

  const handleSubmit = async (e) => {

  }

  return (
    <div className="signup-view-body">
      <p>
        This application is only accesible for people related to Rankia, so you
        only will be able to sign up if your email is in the Users database.{" "}
        <strong>
          If you are not in the database and think that it is an error send a
          mail to{" "}
          <a href="mailto:samuelpunzon@rankia.com">samuelpunzon@rankia.com</a>
        </strong>
      </p>
      <form className="email-form" onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            ref={emailRef}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </label>
        {!validEmail && email && <p className="validation-message">Not valid email</p>}
        <button type="submit" disabled={!validEmail}>Submit</button>
      </form>
    </div>
  );
};
