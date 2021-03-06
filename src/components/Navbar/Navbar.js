import React from 'react'
import About from '../About/About'
import Discover from '../Discover/Discover'
import Search from '../Search/Search'
import '../Navbar/Navbar.css'

function Navbar() {
    return (
        <div className='container'>
            
            <About />
            <Discover />
            <Search />
           
        </div>
    )
}

export default Navbar
