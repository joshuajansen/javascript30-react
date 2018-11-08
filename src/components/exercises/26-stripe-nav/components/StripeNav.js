import React, { Component } from 'react'
import styled from 'styled-components'

const Nav = styled.div `
  position: relative;
  perspective: 600px;

  .cool > li > a {
    color: yellow;
    text-decoration: none;
    font-size: 20px;
    background: rgba(0,0,0,0.2);
    padding: 10px 20px;
    display: inline-block;
    margin: 20px;
    border-radius: 5px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }

  .cool > li {
    position: relative;
    display: flex;
    justify-content: center;
  }

  .dropdown {
    opacity: 0;
    position: absolute;
    overflow: hidden;
    padding: 20px;
    top: -20px;
    border-radius: 2px;
    transition: all 0.5s;
    transform: translateY(100px);
    will-change: opacity;
    display: none;
  }

  .trigger-enter .dropdown {
    display: block;
  }

  .trigger-enter-active .dropdown {
    opacity: 1;
  }

  .dropdownBackground {
    width: 100px;
    height: 100px;
    position: absolute;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 50px 100px rgba(50,50,93,.1), 0 15px 35px rgba(50,50,93,.15), 0 5px 15px rgba(0,0,0,.1);
    transition: all 0.3s, opacity 0.1s, transform 0.2s;
    transform-origin: 50% 0;
    display: flex;
    justify-content: center;
    opacity: 0;
  }

  .dropdownBackground.open {
    opacity: 1;
  }

  .arrow {
    position: absolute;
    width: 20px;
    height: 20px;
    display: block;
    background: white;
    transform: translateY(-50%) rotate(45deg);
  }

  .bio {
    min-width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1.7;
  }

  .bio img {
    float: left;
    margin-right: 20px;
  }

  .courses {
    min-width: 300px;
  }

  .courses li {
    padding: 10px 0;
    display: block;
    border-bottom: 1px solid rgba(0,0,0,0.2);
  }

  .dropdown a {
    text-decoration: none;
    color: #ffc600;
  }

  a.button {
    background: black;
    display: block;
    padding: 10px;
    color: white;
    margin-bottom: 10px;
  }

  .button[href*=twitter] { background: #019FE9; }
  .button[href*=facebook] { background: #3B5998; }
  .button[href*=courses] { background: #ffc600; }
`


export default class StripeNav extends Component {
  navbar = React.createRef()
  background = React.createRef()

  handleEnter(event) {
    event.persist()
    event.target.classList.add('trigger-enter');

    setTimeout(() => event.target.classList.contains('trigger-enter') && event.target.classList.add('trigger-enter-active'), 150);
    this.background.current.classList.add('open');

    const dropdown = event.target.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = this.navbar.current.getBoundingClientRect();
    const coords = {
      height: dropdownCoords.height,
      width: dropdownCoords.width,
      top: dropdownCoords.top - navCoords.top,
      left: dropdownCoords.left - navCoords.left
    };
    this.background.current.style.setProperty('width', `${coords.width}px`);
    this.background.current.style.setProperty('height', `${coords.height}px`);
    this.background.current.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
  }

  handleLeave(event) {
    event.target.classList.remove('trigger-enter', 'trigger-enter-active');
    this.background.current.classList.remove('open');
  }

  render() {
    return (
      <Nav ref={ this.navbar }>
        <div ref={ this.background } className="dropdownBackground">
          <span className="arrow"></span>
        </div>

        <ul className="cool">
          <li onMouseEnter={ this.handleEnter.bind(this) } onMouseLeave={ this.handleLeave.bind(this) }>
            <a href="#foo">About Me</a>
            <div className="dropdown dropdown1">
              <div className="bio">
                <img alt="Wes" src="https://logo.clearbit.com/wesbos.com" />
                <p>Wes Bos sure does love web development. He teaches things like JavaScript, CSS and BBQ. Wait. BBQ isn't part of web development. It should be though!</p>
              </div>
            </div>
          </li>
          <li onMouseEnter={ this.handleEnter.bind(this) } onMouseLeave={ this.handleLeave.bind(this) }>
            <a href="#foo">Courses</a>
            <ul className="dropdown courses">
              <li><span className="code">RFB</span> <a href="https://ReactForBeginners.com">React For Beginners</a></li>
              <li><span className="code">ES6</span> <a href="https://ES6.io">ES6 For Everyone</a></li>
              <li><span className="code">NODE</span> <a href="https://LearnNode.com">Learn Node</a></li>
              <li><span className="code">STPU</span> <a href="https://SublimeTextBook.com">Sublime Text Power User</a></li>
              <li><span className="code">WTF</span> <a href="http://Flexbox.io">What The Flexbox?!</a></li>
              <li><span className="code">GRID</span> <a href="https://CSSGrid.io">CSS Grid</a></li>
              <li><span className="code">LRX</span> <a href="http://LearnRedux.com">Learn Redux</a></li>
              <li><span className="code">CLPU</span> <a href="http://CommandLinePowerUser.com">Command Line Power User</a></li>
              <li><span className="code">MMD</span> <a href="http://MasteringMarkdown.com">Mastering Markdown</a></li>
            </ul>
          </li>
          <li onMouseEnter={ this.handleEnter.bind(this) } onMouseLeave={ this.handleLeave.bind(this) }>
            <a href="#foo">Other Links</a>
            <ul className="dropdown dropdown3">
              <li><a className="button" href="http://twitter.com/wesbos">Twitter</a></li>
              <li><a className="button" href="http://facebook.com/wesbos.developer">Facebook</a></li>
              <li><a className="button" href="http://wesbos.com">Blog</a></li>
              <li><a className="button" href="http://wesbos.com/courses">Course Catalog</a></li>
            </ul>
          </li>
        </ul>
      </Nav>
    )
  }
}
