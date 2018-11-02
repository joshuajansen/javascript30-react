import React from 'react'
import "./Panel.css"

class Panel extends React.Component {
  render () {
    return (
      <div
        onClick={ () => this.props.setActive(this) }
        className={`panel ${this.props.isActive ? "open" : ""}`}
        style={ { backgroundImage: `url(${this.props.background})` } }>
        {this.props.content.map((word, i) => {
          return (<p key={i}>{word}</p>)
        })}
      </div>
    )
  }
}

export default Panel;
