import React, { Component } from 'react';

class App extends Component {
  itemInput = React.createRef()
  state = {
    items: JSON.parse(localStorage.getItem('items')) || []
  }

  addItem(event) {
    event.preventDefault()

    this.setState({
      items: [...this.state.items, { value: this.itemInput.current.value, done: false }]
    })

    this.itemInput.current.value = ""
  }

  handleChecked(e, clickedItem) {
    this.setState({
      items: this.state.items.map((item) => {
        if (item === clickedItem) item.done = e.target.checked;
        return item
      })
    })
  }

  componentDidUpdate() {
    localStorage.setItem('items', JSON.stringify(this.state.items));
  }

  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <h2>LOCAL TAPAS</h2>

          <ul className="plates">
            {this.state.items.map((item, i) => {
              return (
                <li key={i}>
                  <input
                    type="checkbox"
                    id={`item${i}`}
                    onChange={ (e) => this.handleChecked(e, item) }
                    defaultChecked={item.done} />
                  <label htmlFor={`item${i}`}>{item.value}</label>
                </li>
              )
            })}
          </ul>

          <form className="add-items" onSubmit={this.addItem.bind(this)}>
            <input type="text" name="item" placeholder="Item Name" ref={this.itemInput} required />
            <input type="submit" value="+ Add Item" />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
