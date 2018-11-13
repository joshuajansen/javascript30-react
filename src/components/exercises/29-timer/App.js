import React from "react"

import Container from "./components/Container"
import Timer from "./components/Timer"

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Timer></Timer>
      </Container>
    )
  }
}