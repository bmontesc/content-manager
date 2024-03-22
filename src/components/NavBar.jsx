import './NavBar.css'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <div className="navbar">
            <div className='title'>
                <img src="rankia-logo.png" alt="Logo rankia" />
                <h1>Content Manager</h1>
            </div>
            <div className='links'>
                <Link to='/parentContent'><h3>Parent Content</h3></Link>
                <Link to='/translatedContent'><h3>Translated Content</h3></Link>
            </div>
        </div>
    )
}