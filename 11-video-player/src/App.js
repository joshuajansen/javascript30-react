import React, { Component } from 'react';

let mousedown = false;

class App extends Component {
  video = React.createRef()
  playButton = React.createRef()
  progressBar = React.createRef()
  progress = React.createRef()

  togglePlay() {
    this.video.current.paused ? this.video.current.play() : this.video.current.pause()
  }

  updateButton() {
    this.playButton.current.textContent = (this.video.current.paused ? '►' : '❚❚');
  }

  handleProgress () {
    const percent = (this.video.current.currentTime / this.video.current.duration) * 100;
    this.progress.current.style.flexBasis = `${percent}%`;
  }

  handleRangeUpdate(parameter, element) {
    this.video.current[parameter] = element.target.value;
  }

  skip(seconds) {
   this.video.current.currentTime += parseFloat(seconds);
  }

  scrub(event) {
    const scrubTime = (
      event.nativeEvent.offsetX / this.progressBar.current.offsetWidth
    ) * this.video.current.duration;

    this.video.current.currentTime = scrubTime;
  }

  render() {
    return (
      <div className="player">
        <video
          onClick={ this.togglePlay.bind(this) }
          onPlay={ this.updateButton.bind(this) }
          onPause={ this.updateButton.bind(this) }
          onTimeUpdate={ this.handleProgress.bind(this) }
          ref={ this.video }
          className="player__video viewer"
          src="/652333414.mp4"></video>

        <div className="player__controls">
          <div
            onClick={ this.scrub.bind(this) }
            onMouseDown={() => mousedown = true}
            onMouseUp={() => mousedown = false}
            onMouseMove={(event) => mousedown && this.scrub(event)}
            ref={ this.progressBar } className="progress">
            <div ref={ this.progress } className="progress__filled"></div>
          </div>

          <button onClick={this.togglePlay.bind(this)}
            ref={this.playButton}
            className="player__button toggle"
            title="Toggle Play">►</button>

          <input type="range"
            name="volume"
            onChange={ (element) => this.handleRangeUpdate("volume", element)}
            onMouseMove={ (element) => this.handleRangeUpdate("volume", element)}
            className="player__slider"
            min="0"
            max="1"
            step="0.05"
            defaultValue="1" />
          <input type="range"
            name="playbackRate"
            onChange={ (element) => this.handleRangeUpdate("playbackRate", element)}
            onMouseMove={ (element) => this.handleRangeUpdate("playbackRate", element)}
            className="player__slider"
            min="0.5"
            max="2"
            step="0.1"
            defaultValue="1" />

          <button onClick={ this.skip.bind(this, -10) } className="player__button">« 10s</button>
          <button onClick={ this.skip.bind(this, 25) } className="player__button">25s »</button>
        </div>
      </div>
    );
  }
}

export default App;
