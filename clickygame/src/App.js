import React, { Component } from 'react';
import ElfCard from "./components/ElfCard";
import images from "./images.json";

class App extends Component {
  state = {
    images,
    score: 0,
    chosen: [],
    newPick: ""
  };

  checkGame = (newPick) => {
    console.log(newPick);
    for (var i=0; i<newPick.length; i++) {
      if (this.state.chosen.includes(newPick[i])) {
        console.log("character has already been added");
      } else {
        console.log("added new character");
      };
    }
  };
  
  chosenElf = id => {
    const newPick = this.state.images.filter(image => image.id === id);
    this.setState({ newPick: newPick });
    console.log(this.state.newPick);
    this.setState(state => {
      const chosen = state.chosen.concat(state.newPick);
      return {
        chosen,
        newPick: ""
      }
    });
    console.log(this.state.chosen);
    this.checkGame(newPick);
  };
  
  
  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
    console.log(this.state.score);
  }

  render() {
    return (
      <div className="container">
        <div className="grid">
          <div className="row">
              {this.state.images.map(image => (
                <ElfCard
                className="col-xs-2 col-sm-3"
                chosenElf={this.chosenElf}
                id={image.id}
                key={image.id}
                name={image.name}
                image={image.image}
                />
              ))}
          </div>
        </div>
        <h1 onClick={this.handleIncrement}>click</h1>
      </div>
    );
  }
}

export default App;
