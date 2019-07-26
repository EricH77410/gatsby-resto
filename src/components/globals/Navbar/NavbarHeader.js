import React, { Component } from 'react'
import { Link } from 'gatsby'
import { FaAlignRight } from 'react-icons/fa'
import logo from '../../../images/logo.svg'

export default class NavbarHeader extends Component {
  render() {
    const {handleNavbar} = this.props
    return (
      <div className="nav-header">
        <Link to="/">
          <img src={logo} alt="Logo"/>
        </Link>
        <FaAlignRight className="toggle-icon" onClick={()=>{handleNavbar()}}/>
      </div>
    )
  }
}
