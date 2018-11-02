import React, { Component } from "react"
import "./App.scss"

class App extends Component {
  state = {
    words: []
  }

  componentDidMount() {
    document.querySelector("html").classList = "SpeechRecognition"

    this.startListening()
  }

  startListening() {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new window.SpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.addEventListener("result", e => {
      const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join("");

      if (e.results[0].isFinal) {
        this.setState({
          words: [...this.state.words, transcript]
        })
      }
    });

    recognition.addEventListener("end", recognition.start);
    recognition.start();
  }

  render() {
    return (
      <div className="words">
        {this.state.words.map((word) => <p>{word}</p>)}
      </div>
    )
  }
}

export default App