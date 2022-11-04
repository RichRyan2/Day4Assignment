import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../Css/NavigationBar.css'

const NavigationBar = () => {
    return(
        <nav class="deep-purple darken-3">
        <div class="nav-wrapper">
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li><Link to={'/home'}>Home</Link></li>
            <li><Link to={'/contact'}>Contact Us</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/signup'}>Signup</Link></li>
          </ul>
        </div>
      </nav>
    )
}
export default NavigationBar
