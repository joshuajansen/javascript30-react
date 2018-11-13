import React, { Component } from 'react'
import styled from 'styled-components'
import VideoFile from "./652333414.mp4"

const Speed = styled.div `
  background: #efefef;
  flex: 1;
  display: flex;
  align-items: flex-start;
  margin: 10px;
  border-radius: 50px;
  box-shadow: 0 0 1px 3px rgba(0,0,0,0.1);
  overflow: hidden;
`

const SpeedBar = styled.div `
  width: 100%;
  background: linear-gradient(-170deg, #2376ae 0%, #c16ecf 100%);
  text-shadow: 1px 1px 0 rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  color: white;
  height: 16.3%;
`


export default class ControllableVideo extends Component {
  video = React.createRef()
  speedBar = React.createRef()

  handleMouseMove(event) {
    const min = 0.4
    const max = 4
    const y = event.nativeEvent.pageY - event.currentTarget.offsetTop;

    const percent = y / event.currentTarget.offsetHeight;
    const height = Math.round(percent * 100) + '%';
    const playbackRate = percent * (max - min) + min;

    this.speedBar.current.style.height = height;
    this.speedBar.current.textContent = playbackRate.toFixed(2) + '×';
    this.video.current.playbackRate = playbackRate;
  }

  render() {
    return (
      <>
        <video ref={ this.video }
          width="765" height="430"
          src={ VideoFile } loop controls></video>
        <Speed onMouseMove={ this.handleMouseMove.bind(this) }>
          <SpeedBar ref={ this.speedBar }>1×</SpeedBar>
        </Speed>
      </>
    )
  }
}
