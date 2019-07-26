import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class NavbarLinks extends Component {
  state = {
    links: [
      { id: 0, path: '/', text: 'home' },
      { id: 1, path: '/about', text: 'about' },
      { id: 2, path: '/menu', text: 'menu' },
      { id: 3, path: '/contact', text: 'contact' },
    ]
  }
  render() {
    return (
      <div>
        <ul className="links-list">
          { this.state.links.map((link) => {
            return (
              <li key={link.id}>
                <Link to={link.path} className="nav-link">
                  {link.text}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
