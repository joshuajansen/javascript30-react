import React, { Component } from 'react';
import './App.css';

let lastChecked;

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

        if (e.shiftKey && e.target.checked) {
          if (checkbox === clickedCheckbox || checkbox === lastChecked) inBetween = !inBetween;
          if (inBetween) checkbox.isChecked = true;
        }

        return checkbox
      })
    })

    lastChecked = clickedCheckbox;
  }

  doNothing() {
    return
  }

  render() {
    return (
      <div className="inbox">
        {this.state.checkboxes.map((checkbox, i) => {
          return (
            <div key={i} className="item">
              <input type="checkbox"
                id={i}
                onChange={ this.doNothing }
                onClick={ (e) => this.handleChecked(e, checkbox) }
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
