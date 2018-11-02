import React from 'react'
import "./Hand.css"

class Hand extends React.Component {
  handElement = React.createRef()
  rotationInverval

  setRotation() {
    const now = new Date();

    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hour = now.getHours();

    let degrees = 0

    switch(this.props.handType) {
      case "hour":
        degrees = ((hour / 12) * 360) + 90;
        break;
      case "minute":
        degrees = ((mins / 60) * 360) + 90;
        break;
      case "second":
        degrees = ((seconds / 60) * 360) + 90;
        break;
      default:
        degrees = 0
      break;
    }

    this.handElement.current.style.transform = `rotate(${degrees}deg)`;
  }

  componentDidMount() {
    this.rotationInverval = setInterval(() => {
      this.setRotation()
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.rotationInverval)
  }

  render () {
    return (
      <div ref={ this.handElement } className={`hand hand-${this.props.handType}`}></div>
    )
  }
}

export default Hand;
