import React, { Component } from 'react';
import './App.css';

class App extends Component {
  walk = 500;
  hero = React.createRef()
  state = {
    textShadow: ""
  }

  updateShadow(e) {
    const { offsetWidth: width, offsetHeight: height } = this.hero.current;
    let { offsetX: x, offsetY: y } = e.nativeEvent;

    if (this !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * this.walk) - (this.walk / 2));
    const yWalk = Math.round((y / height * this.walk) - (this.walk / 2));

    this.setState({
      textShadow: `
        ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
        ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
        ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
        ${yWalk * -1}px ${xWalk * -1}px 0 rgba(0,0,255,0.7)
      `
    })
  }

  render() {
    return (
      <div ref={this.hero} onMouseMove={this.updateShadow.bind(this)} className="hero">
        <h1 style={{ textShadow: this.state.textShadow }}>
          <span role="img" aria-label="FIRE">🔥</span>
          WOAH!
        </h1>
      </div>
    );
  }
}

export default App;
