import React, { Component } from 'react';
import './App.css';
import City from "./components/City.jsx"

const citiesEndpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

class App extends Component {
  searchField = React.createRef()
  state = {
    cities: [],
    searchResults: []
  }

  componentDidMount() {
    fetch(citiesEndpoint)
      .then(response => response.json())
      .then(json => this.setState({cities: json}))
  }

  search() {
    const searchQuery = this.searchField.current.value

    this.setState({
      searchResults: searchQuery.length < 3 ? [] : this.state.cities.filter(place => {
        const regex = new RegExp(searchQuery, 'gi');
        return place.city.match(regex) || place.state.match(regex)
      })
    })
  }

  render() {
    return (
      <form className="search-form">
        <input className="search" ref={this.searchField} onChange={this.search.bind(this)}></input>
        <ul className="suggestions">
          {
            this.state.searchResults.length === 0 ?
            <React.Fragment><li>Filter for a city</li><li>or a state</li></React.Fragment> :
            this.state.searchResults.map((city, i) => {
            return <City key={i}
              searchQuery={this.searchField.current.value}
              cityName={city.city}
              stateName={city.state}
              population={city.population}></City>
            })
          }
        </ul>
      </form>
    );
  }
}

export default App;
