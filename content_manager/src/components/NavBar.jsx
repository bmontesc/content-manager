import './NavBar.css'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <div className="navbar">
            <Link to='/parentContent'><h1>Rankia Content Manager</h1></Link>
        </div>
    )
}