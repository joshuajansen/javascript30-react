import React from "react"
import LinkHighlighter from "./components/LinkHighlighter"
import styled from 'styled-components'

const GradientBackground = styled.div `
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -2;
  background:
    linear-gradient(45deg, hsla(340, 100%, 55%, 1) 0%, hsla(340, 100%, 55%, 0) 70%),
    linear-gradient(135deg, hsla(225, 95%, 50%, 1) 10%, hsla(225, 95%, 50%, 0) 80%),
    linear-gradient(225deg, hsla(140, 90%, 50%, 1) 10%, hsla(140, 90%, 50%, 0) 80%),
    linear-gradient(315deg, hsla(35, 95%, 55%, 1) 100%, hsla(35, 95%, 55%, 0) 70%);
`

const NavBar = styled.nav `
  padding: 0;
  display: flex;
  list-style: none;
  justify-content: center;
  margin: 100px 0;
  a {
    display: inline-block;
    padding: 5px;
    margin: 0 20px;
    color: black;
  }
`

const ContentWrapper = styled.div `
  margin: 0 auto;
  max-width: 500px;
  font-size: 20px;
  line-height: 2;
  position: relative;
  a {
    text-decoration: none;
    color: black;
    background: rgba(0,0,0,0.05);
    border-radius: 20px;
  }
`

export default () => (
  <React.Fragment>
    <NavBar>
      <a href="#foo">Home</a>
      <a href="#foo">Order Status</a>
      <a href="#foo">Tweets</a>
      <a href="#foo">Read Our History</a>
      <a href="#foo">Contact Us</a>
    </NavBar>

    <ContentWrapper>
      <p>Lorem ipsum dolor sit amet, <a href="#foo">consectetur</a> adipisicing elit. Est <a href="#foo">explicabo</a> unde natus necessitatibus esse obcaecati distinctio, aut itaque, qui vitae!</p>
      <p>Aspernatur sapiente quae sint <a href="#foo">soluta</a> modi, atque praesentium laborum pariatur earum <a href="#foo">quaerat</a> cupiditate consequuntur facilis ullam dignissimos, aperiam quam veniam.</p>
      <p>Cum ipsam quod, incidunt sit ex <a href="#foo">tempore</a> placeat maxime <a href="#foo">corrupti</a> possimus <a href="#foo">veritatis</a> ipsum fugit recusandae est doloremque? Hic, <a href="#foo">quibusdam</a>, nulla.</p>
      <p>Esse quibusdam, ad, ducimus cupiditate <a href="#foo">nulla</a>, quae magni odit <a href="#foo">totam</a> ut consequatur eveniet sunt quam provident sapiente dicta neque quod.</p>
      <p>Aliquam <a href="#foo">dicta</a> sequi culpa fugiat <a href="#foo">consequuntur</a> pariatur optio ad minima, maxime <a href="#foo">odio</a>, distinctio magni impedit tempore enim repellendus <a href="#foo">repudiandae</a> quas!</p>
    </ContentWrapper>

    <LinkHighlighter></LinkHighlighter>
    <GradientBackground></GradientBackground>
  </React.Fragment>
)