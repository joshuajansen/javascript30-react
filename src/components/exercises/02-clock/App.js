import React from 'react';
import './App.scss';
import Hand from "./components/Hand.jsx"

class Clock extends React.Component {
  componentDidMount(){
    document.querySelector("html").classList = "Clock"
  }

  render() {
    return (
      <div className="clock">
        <div className="clock-face">
          <Hand handType="hour" />
          <Hand handType="minute" />
          <Hand handType="second" />
        </div>
      </div>
    )
  }
}

export default Clock;
