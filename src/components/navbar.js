import React from 'react';
import {Link, graphql} from 'gatsby';


import './navbar.scss';



const navbar = () => {

  return (
    <div className="navWrapper">
      <div className="navbar">
        <Link activeClassName="active" to="/">Home</Link>
        <Link activeClassName="active" to="/about">About</Link>
        <Link activeClassName="active" to="/projects">Projects</Link>
      </div>
    </div>
  )
}

export default navbar;