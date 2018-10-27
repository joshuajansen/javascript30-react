import React, { Component } from 'react';

const history = [];
const secretCode = 'sosecret';

class App extends Component {
  state = {
    hack0r: false
  }

  componentDidMount() {
    window.addEventListener('keyup', (e) => {
      history.push(e.key);
      history.splice(-secretCode.length - 1, history.length - secretCode.length);

      if (history.join('').includes(secretCode)) {
        this.setState({ hack0r: true })
      }
    });
  }

  render() {
    return (
      <div id="confetti" style={{width: "100vw", height: "100vh"}}>
        { this.state.hack0r ? "You hackor" : "No access"}
      </div>
    );
  }
}

export default App;
