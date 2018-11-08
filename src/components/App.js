import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    document.querySelector("html").classList = ""
  }

  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to="/Drumkit">Drumkit</Link></li>
          <li><Link to="/Clock">Clock</Link></li>
          <li><Link to="/Cssvars">Cssvars</Link></li>
          <li><Link to="/FlexPanels">FlexPanels</Link></li>
          <li><Link to="/CitySearch">CitySearch</Link></li>
          <li><Link to="/Canvas">Canvas</Link></li>
          <li><Link to="/Checkboxes">Checkboxes</Link></li>
          <li><Link to="/VideoPlayer">VideoPlayer</Link></li>
          <li><Link to="/KeySequences">KeySequences</Link></li>
          <li><Link to="/SlideOnScroll">SlideOnScroll</Link></li>
          <li><Link to="/LocalStorage">LocalStorage</Link></li>
          <li><Link to="/TextShadow">TextShadow</Link></li>
          <li><Link to="/PhotoBooth">PhotoBooth</Link></li>
          <li><Link to="/SpeechRecognition">SpeechRecognition</Link></li>
          <li><Link to="/GeoLocation">GeoLocation</Link></li>
          <li><Link to="/FollowLinks">FollowLinks</Link></li>
          <li><Link to="/TextToSpeech">TextToSpeech</Link></li>
          <li><Link to="/StickyNav">StickyNav</Link></li>
          <li><Link to="/StripeNav">StripeNav</Link></li>
        </ul>
      </div>
    );
  }
}

export default App;