import React from 'react';
import Navbar from './navbar';

import './layout.scss';


const Layout = (props) => {
  return (
    <div className="container">
      <div className="content">
        <Navbar />
        {props.children}
      </div>
    </div>
  )
}

export default Layout;