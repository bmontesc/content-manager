import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HomeView.css'

export const HomeView = (props) => {
  const { loggedIn, email } = props
  const navigate = useNavigate()

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
      </div>
    </div>
  )
}

