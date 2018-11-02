import React, { Component } from 'react';
import DrumKey from './components/DrumKey.jsx';

import BoomSound from "./sounds/boom.wav"
import ClapSound from "./sounds/clap.wav"
import HihatSound from "./sounds/hihat.wav"
import KickSound from "./sounds/kick.wav"
import OpenhatSound from "./sounds/openhat.wav"
import RideSound from "./sounds/ride.wav"
import SnareSound from "./sounds/snare.wav"
import TinkSound from "./sounds/tink.wav"
import TomSound from "./sounds/tom.wav"

import "./App.scss"

class App extends Component {
  state = {
    drumKeys: [
      { keyLabel: "a", effectName: "Boom", soundEffect: BoomSound, isPlaying: false },
      { keyLabel: "s", effectName: "Clap", soundEffect: ClapSound, isPlaying: false },
      { keyLabel: "d", effectName: "Hihat", soundEffect: HihatSound, isPlaying: false },
      { keyLabel: "f", effectName: "Kick", soundEffect: KickSound, isPlaying: false },
      { keyLabel: "g", effectName: "Openhat", soundEffect: OpenhatSound, isPlaying: false },
      { keyLabel: "h", effectName: "Ride", soundEffect: RideSound, isPlaying: false },
      { keyLabel: "j", effectName: "Snare", soundEffect: SnareSound, isPlaying: false },
      { keyLabel: "k", effectName: "Tink", soundEffect: TinkSound, isPlaying: false },
      { keyLabel: "l", effectName: "Tom", soundEffect: TomSound, isPlaying: false }
    ]
  }

  componentDidMount(){
    document.querySelector("html").classList = "Drumkit"

    window.addEventListener("keydown", (keystroke) => {
      this.setState({
        drumKeys: this.state.drumKeys.map((key) => {
          key.isPlaying = (key.keyLabel === keystroke.key)
          return key
        })
      })
    })
  }

  render() {
    return (
      <div className="drumKeys">
        {this.state.drumKeys.map((key, i) => {
          return (
            <DrumKey
              key={i}
              soundEffect={key.soundEffect}
              effectName={key.effectName}
              isPlaying={key.isPlaying}
              keyLabel={key.keyLabel}/>
          )
        })}
      </div>
    );
  }
}

export default App;
