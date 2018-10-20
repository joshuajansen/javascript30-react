import React from 'react'

const reactStringReplace = require('react-string-replace')

class City extends React.Component {
  numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  render () {
    return (
      <li>
        <span className="name">
          {reactStringReplace(this.props.cityName, this.props.searchQuery, (match, i) => {
            return (<span key={i} className="hl">{match}</span>)
          })},
          {reactStringReplace(this.props.stateName, this.props.searchQuery, (match, i) => {
            return (<span key={i} className="hl">{match}</span>)
          })}
        </span>
        <span className="population">{this.numberWithCommas(this.props.population)}</span>
      </li>
    )
  }
}

export default City;
