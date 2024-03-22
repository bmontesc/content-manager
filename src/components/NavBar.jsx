import './NavBar.css'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <div className="navbar">
            <Link to='/parentContent'>
                <img src="rankia-logo.png" alt="Logo rankia" />
            </Link>
            <h1>Content Manager</h1>
        </div>
    )
}