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

class App extends Component {
  state = {
    drumKeys: [
      { keyLabel: "a", soundEffect: BoomSound, isPlaying: false },
      { keyLabel: "s", soundEffect: ClapSound, isPlaying: false },
      { keyLabel: "d", soundEffect: HihatSound, isPlaying: false },
      { keyLabel: "f", soundEffect: KickSound, isPlaying: false },
      { keyLabel: "g", soundEffect: OpenhatSound, isPlaying: false },
      { keyLabel: "h", soundEffect: RideSound, isPlaying: false },
      { keyLabel: "j", soundEffect: SnareSound, isPlaying: false },
      { keyLabel: "k", soundEffect: TinkSound, isPlaying: false },
      { keyLabel: "l", soundEffect: TomSound, isPlaying: false }
    ]
  }

  componentDidMount(){
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
      <div>
        {this.state.drumKeys.map((key, i) => {
          return (<DrumKey key={i} soundEffect={key.soundEffect} isPlaying={key.isPlaying} keyLabel={key.keyLabel}/>)
        })}
      </div>
    );
  }
}

export default App;
