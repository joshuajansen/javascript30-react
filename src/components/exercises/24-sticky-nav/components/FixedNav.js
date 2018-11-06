import React, { Component } from 'react'
import styled from 'styled-components'

const Nav = styled.nav `
  background: black;
  top: 0;
  width: 100%;
  transition:all 0.5s;
  position: relative;
  z-index: 1;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
  }

  li {
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
    padding: 20px;
    display: inline-block;
    color: white;
    transition: all 0.2s;
    text-transform: uppercase;
  }

  .logo {
    max-width: 0;
    overflow: hidden;
    background: white;
    transition: all 0.5s;
    font-weight: 600;
    font-size: 30px;
    a {
      color: black;
    }
  }

  &.fixed {
    position: fixed;
    box-shadow: 0 5px 0 rgba(0,0,0,0.1);
    .logo {
      max-width: 500px;
    }
  }
`

export default class FixedNav extends Component {
  navbar = React.createRef()
  offsetTop = 0

  componentDidMount(){
    this.offsetTop = this.navbar.current.offsetTop
    window.addEventListener('scroll', this.fixNav.bind(this));
  }

  fixNav() {
    let navbar = this.navbar.current

    if (window.scrollY >= this.offsetTop) {
      document.body.style.paddingTop =  navbar.offsetHeight + 'px';
      navbar.classList.add('fixed');
      this.props.onFix(true)
    } else {
      navbar.classList.remove('fixed');
      document.body.style.paddingTop = 0;
      this.props.onFix(false)
    }
  }

  render() {
    return (
      <Nav ref={ this.navbar }>
        <ul>
          <li className="logo"><a href="#">LOST.</a></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Images</a></li>
          <li><a href="#">Locations</a></li>
          <li><a href="#">Maps</a></li>
        </ul>
      </Nav>
    )
  }
}
