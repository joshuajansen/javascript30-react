import React from "react"

import Container from "./components/Container"
import Game from "./components/Game"

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Game></Game>
      </Container>
    )
  }
}