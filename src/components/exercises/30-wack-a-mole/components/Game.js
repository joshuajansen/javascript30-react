import React, { Component } from 'react'
import "./Game.scss"

var _ = require('lodash');

export default class Game extends Component {
  state = {
    score: 0,
    timeUp: false,
    holes: [
      { name: "hole1", active: false },
      { name: "hole2", active: false },
      { name: "hole3", active: false },
      { name: "hole4", active: false },
      { name: "hole5", active: false },
      { name: "hole6", active: false }
    ]
  }

  startGame() {
    this.setState({
      timeUp: false,
      score: 0
    })

    this.peep()

    setTimeout(
      () => this.setState({ timeUp: true }),
      10000
    )
  }

  peep() {
    const time = _.random(200, 1000)
    const randomHole = _.sample(this.state.holes)

    const holes = this.state.holes.map((hole) => {
      hole.active = (randomHole.name === hole.name)
      return hole
    })
    this.setState({ holes })

    setTimeout(() => {
      const holes = this.state.holes.map((hole) => {
        hole.active = false
        return hole
      })
      this.setState({ holes })

      if (!this.state.timeUp) this.peep();
    }, time);
  }

  bonk(event) {
    if(!event.isTrusted) return;

    const holes = this.state.holes.map((hole) => {
      hole.active = false
      return hole
    })

    const score = this.state.score + 1

    this.setState({holes, score})
  }

  render() {
    return (
      <div className="wack-a-mole">
        <h1>Whack-a-mole! <span className="score">{this.state.score}</span></h1>
        <button onClick={ this.startGame.bind(this) }>Start!</button>

        <div className="game">
          { this.state.holes.map((hole) => {
            return (
              <div key={hole.name} className={`hole ${hole} ${hole.active ? 'up' : ''}`}>
                <div className="mole" onClick={ this.bonk.bind(this) }></div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
