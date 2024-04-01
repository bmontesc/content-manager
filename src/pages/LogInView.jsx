import React from "react";
import "./LogInView.css";
import { useState, useEffect, useRef} from "react";
import { apiURL } from "../data/getData";
import { useAuth } from "../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


export const LogInView = (props) => {

  const { setAuth } = useAuth();
  const emailRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [validEmail, setValidEmail] = useState(false)

  useEffect(() => {
    emailRef.current.focus()
  }, [])

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email))
  },[email])

  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Recopila los datos de tu estado aquí
    const formData = new FormData();
      formData.append('username', email);
      formData.append('password', pwd);
    console.log(formData)
    console.log(JSON.stringify(formData))

    try {
      const response = await fetch(apiURL+"/token", {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      const data = await response.json();
      const accessToken = data.access_token
      // Almacenar el token en localStorage
      localStorage.setItem('accessToken', accessToken);
      setAuth({ email, pwd, accessToken });
      navigate(from, { replace: true });
      // Maneja la respuesta. Por ejemplo, podrías redirigir al usuario o mostrar un mensaje de éxito
      console.log(data);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <div className="login-view-body">
      <form className="login-form" onSubmit={handleSubmit}>
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
        <label>
          Password:
          <input
            type="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
        </label>
        {!validEmail && email && <p className="validation-message">Not valid email</p>}
        <button type="submit" disabled={!validEmail && !pwd}>Submit</button>
      </form>
    </div>
  );
};
