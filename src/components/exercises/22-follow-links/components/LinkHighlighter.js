import React, { Component } from "react"
import styled from 'styled-components'

const Highlight = styled.span `
  transition: all 0.2s;
  border-bottom: 2px solid white;
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  background: white;
  z-index: -1;
  border-radius: 20px;
  display: block;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
`

class App extends Component {
  state = {
    styleProperties: { width: 0, height: 0, top: 0, left: 0 }
  }

  componentDidMount() {
    document.querySelectorAll("a").forEach((e) => {
      e.addEventListener('mouseenter', this.moveHighlight.bind(this))
    })
  }

  moveHighlight(event) {
    const linkCoords = event.target.getBoundingClientRect()

    this.setState({
      styleProperties: {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
      }
    })
  }

  render() {
    return (
      <Highlight style={ this.state.styleProperties }></Highlight>
    )
  }
}

export default App