import React, { Component } from 'react';
import Panel from './components/Panel.jsx';
import "./App.css"

class App extends Component {
  state = {
    panels: [
      {
        content: ["Hey", "Let's", "Dance"],
        background: "https://source.unsplash.com/gYl-UtwNg_I/1500x1500",
        isActive: false
      },
      {
        content: ["Give", "Take", "Receive"],
        background: "https://source.unsplash.com/rFKUFzjPYiQ/1500x1500",
        isActive: false
      },
      {
        content: ["Experience", "It", "Today"],
        background: "https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d",
        isActive: false
      },
      {
        content: ["Give", "All", "You can"],
        background: "https://source.unsplash.com/ITjiVXcwVng/1500x1500",
        isActive: false
      },
      {
        content: ["Life", "In", "Motion"],
        background: "https://source.unsplash.com/3MNzGlQM7qs/1500x1500",
        isActive: false
      }
    ]
  }

  setActive(clickedPanel) {
    this.setState({
      panels: this.state.panels.map((panel) => {
        panel.isActive = (panel.background === clickedPanel.props.background)
        return panel
      })
    })
  }

  render() {
    return (
      <div className="panels">
        {this.state.panels.map((panel, i) => {
          return (
            <Panel
              key={i}
              setActive={this.setActive.bind(this)}
              isActive={panel.isActive}
              content={panel.content}
              background={panel.background} />
          )
        })}
      </div>
    );
  }
}

export default App;
