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
    </Switch>
  </BrowserRouter>
)

export default Router