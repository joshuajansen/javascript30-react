import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from "./App"
import Drumkit from "./exercises/01-drumkit/App"
import Clock from "./exercises/02-clock/App"
import Cssvars from "./exercises/03-cssvars/App"
import FlexPanels from "./exercises/05-flex-panels/App"
import CitySearch from "./exercises/06-city-search/App"
import Canvas from "./exercises/08-canvas/App"
import Checkboxes from "./exercises/10-checkboxes/App"
import VideoPlayer from "./exercises/11-video-player/App"
import KeySequences from "./exercises/12-key-sequences/App"
import SlideOnScroll from "./exercises/13-slide-on-scroll/App"
import LocalStorage from "./exercises/15-localstorage/App"
import TextShadow from "./exercises/16-text-shadow/App"
import PhotoBooth from "./exercises/19-photo-booth/App"
import SpeechRecognition from "./exercises/20-speech-recognition/App"
import GeoLocation from "./exercises/21-geo-location/App"
import FollowLinks from "./exercises/22-follow-links/App"
import TextToSpeech from "./exercises/23-text-to-speech/App"
import StickyNav from "./exercises/24-sticky-nav/App"
import StripeNav from "./exercises/26-stripe-nav/App"
import ClickAndDrag from "./exercises/27-click-and-drag/App"
import VideoSpeed from "./exercises/28-video-speed/App"
import Timer from "./exercises/29-timer/App"

const Router = () =>(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/Drumkit" component={Drumkit} />
      <Route exact path="/Clock" component={Clock} />
      <Route exact path="/Cssvars" component={Cssvars} />
      <Route exact path="/FlexPanels" component={FlexPanels} />
      <Route exact path="/CitySearch" component={CitySearch} />
      <Route exact path="/Canvas" component={Canvas} />
      <Route exact path="/Checkboxes" component={Checkboxes} />
      <Route exact path="/VideoPlayer" component={VideoPlayer} />
      <Route exact path="/KeySequences" component={KeySequences} />
      <Route exact path="/SlideOnScroll" component={SlideOnScroll} />
      <Route exact path="/LocalStorage" component={LocalStorage} />
      <Route exact path="/TextShadow" component={TextShadow} />
      <Route exact path="/PhotoBooth" component={PhotoBooth} />
      <Route exact path="/SpeechRecognition" component={SpeechRecognition} />
      <Route exact path="/GeoLocation" component={GeoLocation} />
      <Route exact path="/FollowLinks" component={FollowLinks} />
      <Route exact path="/TextToSpeech" component={TextToSpeech} />
      <Route exact path="/StickyNav" component={StickyNav} />
      <Route exact path="/StripeNav" component={StripeNav} />
      <Route exact path="/ClickAndDrag" component={ClickAndDrag} />
      <Route exact path="/VideoSpeed" component={VideoSpeed} />
      <Route exact path="/Timer" component={Timer} />
    </Switch>
  </BrowserRouter>
)

export default Router