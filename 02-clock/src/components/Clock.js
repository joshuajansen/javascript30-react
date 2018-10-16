import React, { Component } from 'react';
import './Clock.css';
import Hand from "./Hand.jsx"

const Clock = () => {
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

export default Clock;
