import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HomeView.css'
import { useState } from 'react'
import { Link } from "react-router-dom";

export const HomeView = (props) => {
  const { email } = props
  const navigate = useNavigate()

  const [loggedIn, setLoggedIn] = useState(false)

  const onButtonClick = () => {
    // You'll update this function later
  }

  return (
    <div className="home-view-body">
      <div className={'titleContainer'}>
        <div>Welcome!</div>
        <div>This is the home page.</div>
      </div>
      <div className={'buttonContainer'}>
        <input
          className={'inputButton'}
          type="button"
          onClick={onButtonClick}
          value={loggedIn ? 'Log out' : 'Log in'}
        />
        {loggedIn ? <div>Your email address is {email}</div> : <div />}
        {!loggedIn && <Link to="/signup"><h3>Sign up</h3></Link>}
      </div>
    </div>
  )
}

