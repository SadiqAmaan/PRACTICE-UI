import React from 'react'
import {Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production'

const Header = () => {
  return (
    <div>
      <nav>
        <h1>PRACTICE-UI</h1>
        <main>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact</Link>
            <HashLink to='/#about'>About</HashLink>
            <HashLink to='/#brands'>Brands</HashLink>
            <HashLink to='/services'>Services</HashLink>
        </main>
      </nav>
    </div>
  )
}

export default Header
