import React, { Component } from 'react';
import './App.css';
import Slider from "./components/Slider.js"
import Snap from "./audio/snap.mp3";

class App extends Component {
  video = React.createRef()
  canvas = React.createRef()
  snapSound = React.createRef()

  state = {
    photoStrip: [],
    rmin: 0, rmax: 0, gmin: 0, gmax: 0, bmin: 0, bmax: 0,
  }

  componentDidMount() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      .then(localMediaStream => {
        this.video.current.srcObject = localMediaStream;
        this.video.current.play();
      })
      .catch(err => {
        console.error(`OH NO!!!`, err);
      });
  }

  paintToCanvas() {
    const width = this.video.current.videoWidth;
    const height = this.video.current.videoHeight;

    this.canvas.current.width = width;
    this.canvas.current.height = height;

    let ctx = this.canvas.current.getContext("2d")

    return setInterval(() => {
      ctx.drawImage(this.video.current, 0, 0, width, height);
      let pixels = ctx.getImageData(0, 0, width, height);
      pixels = this.greenScreen(pixels);
      ctx.putImageData(pixels, 0, 0);
    }, 16);
  }

  takePhoto() {
    this.snapSound.current.currentTime = 0;
    this.snapSound.current.play();

    const data = this.canvas.current.toDataURL('image/jpeg');

    this.setState({ photoStrip: [...this.state.photoStrip, data] })
  }

  handleRgbChange(attribute, event) {
    let newState = {}
    newState[attribute] = event.target.value
    this.setState(newState)
  }

  greenScreen(pixels) {
    const { rmin, rmax, gmin, gmax, bmin, bmax } = this.state

    for (let i = 0; i < pixels.data.length; i = i + 4) {
      const red = pixels.data[i + 0];
      const green = pixels.data[i + 1];
      const blue = pixels.data[i + 2];;

      if (red >= rmin && green >= gmin && blue >= bmin
        && red <= rmax && green <= gmax && blue <= bmax) {
        pixels.data[i + 3] = 0;
      }
    }

    return pixels;
  }

  render() {
    return (
      <div className="photobooth">
        <div className="controls">
          <button onClick={ this.takePhoto.bind(this) }>Take Photo</button>
          <div className="rgb">
            <Slider name="rmin" label="Red min" onChange= { this.handleRgbChange.bind(this, "rmin") } />
            <Slider name="rmax" label="Red max" onChange= { this.handleRgbChange.bind(this, "rmax") } />
            <br/>
            <Slider name="gmin" label="Green min" onChange= { this.handleRgbChange.bind(this, "gmin") } />
            <Slider name="gmax" label="Green max" onChange= { this.handleRgbChange.bind(this, "gmax") } />
            <br/>
            <Slider name="bmin" label="Blue min" onChange= { this.handleRgbChange.bind(this, "bmin") } />
            <Slider name="bmax" label="Blue max" onChange= { this.handleRgbChange.bind(this, "bmax") } />
          </div>
        </div>

        <canvas ref={ this.canvas } className="photo"></canvas>
        <video onCanPlay={ this.paintToCanvas.bind(this) } ref={ this.video } className="player"></video>
        
        <div className="strip">
          { this.state.photoStrip.map((photo, i) => {
            return <img key={i} src={photo} />
          })}
        </div>

        <audio ref={ this.snapSound } src={ Snap } hidden></audio>
      </div>
    );
  }
}

export default App;
