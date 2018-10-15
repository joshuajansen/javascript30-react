import React from 'react'
import PropTypes from 'prop-types'
import "./DrumKey.css"

class DrumKey extends React.Component {

  componentDidUpdate() {
    if(this.props.isPlaying){
      this.audioElement.currentTime = 0;
      this.audioElement.play();
    }
  }

  render () {
    return (
      <div className="drumKey">
        {this.props.keyLabel}
        <audio ref={ e => this.audioElement = e } src={this.props.soundEffect}></audio>
      </div>
    )
  }
}

export default DrumKey;
