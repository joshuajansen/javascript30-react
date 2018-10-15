import React from 'react'
import "./DrumKey.css"

class DrumKey extends React.Component {
  audioElement = React.createRef()
  drumKeyElement = React.createRef()

  componentDidUpdate() {
    if(this.props.isPlaying){
      this.audioElement.current.currentTime = 0;
      this.audioElement.current.play();
    }

    this.drumKeyElement.current.addEventListener("transitionend", () => {
      this.drumKeyElement.current.classList.remove("isPlaying")
    })
  }

  render () {
    return (
      <div ref={this.drumKeyElement} className={this.props.isPlaying ? "drumKey isPlaying" : "drumKey"}>
        <kbd>{this.props.keyLabel}</kbd>
        <span className="effectName">{this.props.effectName}</span>
        <audio ref={this.audioElement} src={this.props.soundEffect}></audio>
      </div>
    )
  }
}

export default DrumKey;
