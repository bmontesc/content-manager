import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HomeView.css'
import { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import { useAuth } from '../hooks/useAuth';
import AuthContext from '../context/AuthProvider';

export const HomeView = () => {

  const { auth } = useAuth();
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate()

  const [loggedIn, setLoggedIn] = useState(false)

  const handleClick = (e) => {

    setAuth({});
    navigate('/');
}


  return (
    <div className="home-view-body">
        Welcome to the content manager home page.
      {!auth.email && <Link to="/login"><h3>Log in</h3></Link>}
        {auth.email && <div>Your email address is <strong>{auth.email}</strong></div>}
        {!auth.email && <Link to="/signup"><h3>Sign up</h3></Link>}
        {auth.email && <button onClick={handleClick}>Log out</button>}
    </div>
  )
}

