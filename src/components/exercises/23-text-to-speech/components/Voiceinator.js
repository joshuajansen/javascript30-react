import React, { Component } from 'react'
import styled from 'styled-components'

const Voiceinator = styled.div `
  padding: 2rem;
  width: 50rem;
  margin: 0 auto;
  border-radius: 1rem;
  position: relative;
  background: white;
  overflow: hidden;
  z-index: 1;
  box-shadow: 0 0 5px 5px rgba(0,0,0,0.1);

  h1 {
    width: calc(100% + 4rem);
    margin: -2rem 0 2rem -2rem;
    padding: .5rem;
    background: #ffc600;
    border-bottom: 5px solid #F3C010;
    text-align: center;
    font-size: 5rem;
    font-weight: 100;
    font-family: 'Pacifico', cursive;
    text-shadow: 3px 3px 0 #F3C010;
  }

  input,
  button,
  select,
  textarea {
    width: 100%;
    display: block;
    margin: 10px 0;
    padding: 10px;
    border: 0;
    font-size: 2rem;
    background: #F7F7F7;
    outline: 0;
  }

  textarea {
    height: 20rem;
  }

  button {
    background: #ffc600;
    border: 0;
    width: 49%;
    float: left;
    font-family: 'Pacifico', cursive;
    margin-bottom: 0;
    font-size: 2rem;
    border-bottom: 5px solid #F3C010;
    cursor: pointer;
    position: relative;
  }

  button:active {
    top: 2px;
  }

  button:nth-of-type(1) {
    margin-right: 2%;
  }
`

class VoiceinatorComponent extends Component {
  defaultMessage = "Hello! I love JavaScript 👍"
  message = new SpeechSynthesisUtterance()

  state = {
    voices: []
  }

  componentDidMount() {
    this.message.text = this.defaultMessage

    speechSynthesis.addEventListener('voiceschanged', () => {
      this.setState({ voices: speechSynthesis.getVoices() })
    })
  }

  setVoice(event) {
    this.message.voice = this.state.voices.find(voice => voice.name === event.target.value);
    this.toggle()
  }

  setOption(event) {
    this.message[event.target.name] = event.target.value;
    this.toggle()
  }

  toggle(startOver = true) {
    speechSynthesis.cancel()
    if (startOver) speechSynthesis.speak(this.message)
  }

  render() {
    return (
      <Voiceinator>
        <h1>The Voiceinator 5000</h1>

        <select onChange={this.setVoice.bind(this)}>
          { this.state.voices.map((voice, i) => (
            <option key={i} value={ voice.name }>
              { voice.name } ({ voice.lang })
            </option>
          ))}
        </select>

        <label htmlFor="rate">Rate:</label>
        <input onChange={this.setOption.bind(this)} name="rate" type="range" min="0" max="3" defaultValue="1" step="0.1" />

        <label htmlFor="pitch">Pitch:</label>
        <input onChange={this.setOption.bind(this)} name="pitch" type="range" min="0" max="2" step="0.1" />

        <textarea onChange={this.setOption.bind(this)} name="text" defaultValue={this.defaultMessage}></textarea>

        <button onClick={this.toggle.bind(this, false)} id="stop">Stop!</button>
        <button onClick={this.toggle.bind(this)} id="speak">Speak</button>
      </Voiceinator>
    )
  }
}

export default VoiceinatorComponent