import React from "react"
import styled from 'styled-components'

import Container from "./components/Container"
import Item from "./components/Item"

const Items = styled.div `
  height: 800px;
  padding: 100px;
  width: 100%;
  border: 1px solid white;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s;
  transform: scale(0.98);
  will-change: transform;
  position: relative;
  background: rgba(255,255,255,0.1);
  font-size: 0;
  perspective: 500px;
  &.active {
    background: rgba(255,255,255,0.3);
    cursor: grabbing;
    cursor: -webkit-grabbing;
    transform: scale(1);
  }
`

export default class App extends React.Component {
  slider = React.createRef()

  isDown = false
  startX
  scrollLeft

  handleMouseDown(event) {
    this.isDown = true;
    this.slider.current.classList.add('active');
    this.startX = event.pageX - this.slider.current.offsetLeft;
    this.scrollLeft = this.slider.current.scrollLeft;
  }

  handleMouseLeave() {
    this.isDown = false;
    this.slider.current.classList.remove('active');
  }

  handleMouseMove(event) {
    if (!this.isDown) return;
    event.preventDefault();

    const x = event.pageX - this.slider.current.offsetLeft;
    const walk = (x - this.startX) * 3;
    this.slider.current.scrollLeft = this.scrollLeft - walk;
  }

  render() {
    return (
      <Container>
        <Items ref={ this.slider }
          onMouseDown={this.handleMouseDown.bind(this)}
          onMouseLeave={this.handleMouseLeave.bind(this)}
          onMouseUp={this.handleMouseLeave.bind(this)}
          onMouseMove={this.handleMouseMove.bind(this)}
        >
          { [...Array(25).keys()].map((_, i) => <Item key={i}></Item>) }
        </Items>
      </Container>
    )
  }
}