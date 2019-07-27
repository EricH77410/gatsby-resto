import React, { Component } from 'react'
import styled from 'styled-components'
import { styles } from '../../../utils/index'

import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

export default class NavbarIcons extends Component {
  state = {
    links: [
      { id:0, path: 'https://facebook.com', icon:<FaFacebook className="icon facebook-icon"/>},
      { id:1, path: 'https://twitter.com', icon:<FaTwitter className="icon twitter-icon"/>},
      { id:2, path: 'https://instagram.com', icon:<FaInstagram className="icon instagram-icon"/>}
    ]
  }
  render() {
    return <IconWrapper>
      {
        this.state.links.map((item) => {
          return <a href={item.path} key={item.id} target="_blank" rel="noopener noreferrer">
            {item.icon}
            </a>
        })
      }
    </IconWrapper>
  }
}

const IconWrapper = styled.div`
.icon {
  font-size: 1.3rem;
  cursor: pointer;
  ${styles.transFunction()};
}
.facebook-icon {
  color: #3b579d;
}
.twitter-icon {
  color: #3ab7f0;
}
.instagram-icon {
  color: #da5f53;
}
.icon:hover {
  color: ${styles.colors.mainYellow};
}
display: none;

@media (min-width: 768px) {
  display: flex;
  justify-content: space-around;
  width: 10rem;
}
`
