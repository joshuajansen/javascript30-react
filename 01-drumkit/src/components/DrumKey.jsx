import React from 'react'
import PropTypes from 'prop-types'
import "./DrumKey.css"

class DrumKey extends React.Component {
  componentDidUpdate() {
    if(this.props.isPlaying){
      this.audioElement.currentTime = 0;
      this.audioElement.play();
    }

    this.drumKeyElement.addEventListener("transitionend", () => {
      this.drumKeyElement.classList.remove("isPlaying")
    })
  }

  render () {
    return (
      <div ref={ e => this.drumKeyElement = e } className={this.props.isPlaying ? "drumKey isPlaying" : "drumKey"}>
        <kbd>{this.props.keyLabel}</kbd>
        <span className="effectName">{this.props.effectName}</span>
        <audio ref={ e => this.audioElement = e } src={this.props.soundEffect}></audio>
      </div>
    )
  }
}

export default DrumKey;
