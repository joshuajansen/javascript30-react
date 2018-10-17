import React from 'react'
import PropTypes from 'prop-types'

class Controller extends React.Component {
  handleUpdate(event){
    document.documentElement.style.setProperty(
      `--${this.props.name}`,
      event.target.value + (this.props.suffix || "")
    );
  }

  render () {
    return (
      <input
        defaultValue={this.props.defaultValue}
        name={this.props.name}
        type={this.props.type}
        onChange={(e) => this.handleUpdate(e)} />
    )
  }
}

export default Controller;
