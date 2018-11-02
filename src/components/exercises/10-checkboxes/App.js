import React, { Component } from 'react';
import './App.scss';

let lastChecked;
let shiftKeyDown;

class App extends Component {
  state = {
    checkboxes: [
      { isChecked: false, label: "This is an inbox layout." },
      { isChecked: false, label: "Check one item" },
      { isChecked: false, label: "Hold down your Shift key" },
      { isChecked: false, label: "Check a lower item" },
      { isChecked: false, label: "Everything inbetween should also be set to checked" },
      { isChecked: false, label: "Try do it without any libraries" },
      { isChecked: false, label: "Just regular JavaScript" },
      { isChecked: false, label: "Good Luck!" },
      { isChecked: false, label: "Don't forget to tweet your result!" }
    ]
  }

  handleChecked(e, clickedCheckbox) {
    let inBetween = false;

    this.setState({
      checkboxes: this.state.checkboxes.map((checkbox) => {
        if (checkbox === clickedCheckbox) checkbox.isChecked = e.target.checked;

        if (shiftKeyDown && e.target.checked) {
          if (checkbox === clickedCheckbox || checkbox === lastChecked) inBetween = !inBetween;
          if (inBetween) checkbox.isChecked = true;
        }

        return checkbox
      })
    })

    lastChecked = clickedCheckbox;
  }

  componentDidMount() {
    document.querySelector("html").classList = "Checkboxes"

    document.addEventListener("keydown", (event) => {
      if(event.which !== 16) return
      shiftKeyDown = true
    })
    document.addEventListener("keyup", (event) => {
      if(event.which !== 16) return
      shiftKeyDown = false
    })
  }

  render() {
    return (
      <div className="inbox">
        {this.state.checkboxes.map((checkbox, i) => {
          return (
            <div key={i} className="item">
              <input type="checkbox"
                id={i}
                onChange={ (e) => this.handleChecked(e, checkbox) }
                checked={ checkbox.isChecked } />
              <label htmlFor={i}>{ checkbox.label }</label>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
