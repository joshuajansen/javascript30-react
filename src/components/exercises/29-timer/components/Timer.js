import React, { Component } from 'react'
import "./Timer.scss"

export default class Timer extends Component {
  countdown
  minuteInput = React.createRef()

  state = {
    secondsLeft: 0,
    endTime: 0,
  }

  startTimer(seconds) {
    clearInterval(this.countdown);

    const now = Date.now();
    const endTime = now + seconds * 1000;

    let secondsLeft = seconds

    this.setState({ endTime, secondsLeft })

    this.countdown = setInterval(() => {
      secondsLeft = Math.round((endTime - Date.now()) / 1000);

      this.setState({ secondsLeft })

      if(secondsLeft < 0) {
        clearInterval(this.countdown);
        return;
      }
    }, 1000)
  }

  displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
    document.title = display;
    return display
  }

  displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    const minutes = end.getMinutes();
    return `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
  }

  handleSubmit(event) {
    event.preventDefault()
    this.startTimer(this.minuteInput.current.value * 60)
  }

  render() {
    return (
      <div className="timer">
        <div className="timer__controls">
          <button onClick={this.startTimer.bind(this, 20)} className="timer__button">20 Secs</button>
          <button onClick={this.startTimer.bind(this, 300)} className="timer__button">Work 5</button>
          <button onClick={this.startTimer.bind(this, 900)} className="timer__button">Quick 15</button>
          <button onClick={this.startTimer.bind(this, 1200)} className="timer__button">Snack 20</button>
          <button onClick={this.startTimer.bind(this, 3600)} className="timer__button">Lunch Break</button>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input ref={ this.minuteInput } type="number" name="minutes" placeholder="Enter Minutes" />
          </form>
        </div>
        <div className="display">
          <h1 className="display__time-left">{ this.displayTimeLeft(this.state.secondsLeft) }</h1>
          <p className="display__end-time">{ this.displayEndTime(this.state.endTime) }</p>
        </div>
      </div>
    )
  }
}
