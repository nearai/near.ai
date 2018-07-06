import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle, location }) => (
  <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">NEAR</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className='nav-item'>
          <a href='https://medium.com/near-ai' className="nav-link">Blog</a>
        </li>
        <li className={location && location.pathname.startsWith('/research') ? 'nav-item active' : 'nav-item'}>
          <Link to={'/research'} className="nav-link">Research</Link>
        </li>
        <li className={location && location.pathname === '/about' ? 'nav-item active' : 'nav-item'}>
          <Link to={'/about'} className="nav-link">About</Link>
        </li>
        <li className={location && location.pathname.startsWith('/careers') ? 'nav-item active' : 'nav-item'}>
          <Link to={'/careers'} className="nav-link">Careers</Link>
        </li>
      </ul>
    </div>
  </nav>  
)

export default Header
