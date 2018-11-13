import React from "react"
import styled from 'styled-components'

import Container from "./components/Container"
import ControllableVideo from "./components/ControllableVideo"

const Wrapper = styled.div `
  width: 850px;
  display: flex;
`

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <ControllableVideo></ControllableVideo>
        </Wrapper>
      </Container>
    )
  }
}