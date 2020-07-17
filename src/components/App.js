import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from './HogContainer'
import FilterContainerComponent from './FilterContainerComponent'


class App extends Component {
  state = {
      greased: false,
      sortByName: false 
  }

  handleGreased = () => {
      this.setState({
          greased: !this.state.greased
      })
  }

  handleSortName = () => {
    this.setState({
        sortByName: !this.state.sortByName
    })
}



  render() {
    // console.log(hogs)
    return (
      <div className="App">
        <Nav />
        <FilterContainerComponent 
          greased={this.state.greased} 
          handleGreased={this.handleGreased}
          sortByName={this.state.sortByName} 
          handleSortName={this.handleSortName}

        />
        <HogContainer 
          greased={this.state.greased}
          sortByName={this.state.sortByName} 
          hogs={hogs}
        />
      </div>
    );
  }
}

export default App;
