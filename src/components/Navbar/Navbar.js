import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    const navStyle = {
        color: 'white',
    }

    return (
        <navbar>
            <ul className='nav-links'>
                <li>Puppster</li>
                <Link to='/about' style={navStyle}><li>About</li></Link>
                <Link to='/discover' style={navStyle}><li>Discover</li></Link>
                <Link to='/search' style={navStyle}><li>Search</li></Link>
            </ul>
        </navbar>
    )
}

export default Navbar
