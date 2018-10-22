import React, { Component } from 'react';
import './App.css';

let isDrawing = false;
let ctx;
let lastX = 0;
let lastY = 0;
let hue = 0;
let increaseLineSize = true;

class App extends Component {
  canvas = React.createRef();

  componentDidMount() {
    ctx = this.canvas.current.getContext('2d');

    this.canvas.current.width = window.innerWidth;
    this.canvas.current.height = window.innerHeight;

    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 100;

    this.canvas.current.addEventListener('mousedown', (e) => {
      isDrawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    this.canvas.current.addEventListener('mousemove', this.draw);
    this.canvas.current.addEventListener('mouseup', () => isDrawing = false);
    this.canvas.current.addEventListener('mouseout', () => isDrawing = false);
  }

  draw(e) {
    if (!isDrawing) return;

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++;

    if (hue >= 360) {
      hue = 0;
    }

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
      increaseLineSize = !increaseLineSize;
    }

    increaseLineSize ? ctx.lineWidth++ : ctx.lineWidth--
  }

  render() {
    return (
      <canvas ref={this.canvas} width="800" height="800"/>
    );
  }
}

export default App;
