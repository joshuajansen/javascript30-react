import React, { Component } from 'react';
import './Clock.css';
import Hand from "./Hand.jsx"

class Clock extends Component {
  render() {
    return (
      <div className="clock">
        <div className="clock-face">
          <Hand key="hour" handType="hour" />
          <Hand key="minute" handType="minute" />
          <Hand key="second" handType="second" />
        </div>
      </div>
    );
  }
}

export default Clock;
