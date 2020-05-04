import React, { Component } from 'react';
import ElfCard from "./components/ElfCard";
import images from "./images.json";
import "./style.css";

function shuffleArray(images) {
  let i = images.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = images[i];
    images[i] = images[j];
    images[j] = temp;
  }
  return images;
}

class App extends Component {
  state = {
    images,
    score: 0,
    topScore: 0,
    chosen: [],
    newPick: ""
  };
  

  newTopScore = () => {
    if (this.state.score < this.state.topScore) {
      console.log("top score is higher");
    } else {
      this.setState({ topScore: this.state.topScore + 1});
    }
  };

  checkGame = (newPick) => {
    console.log(newPick);
    // checks if user has won game yet
    if((this.state.images.length - 1)=== this.state.score) {
      console.log("winner")
      alert("Congratulations! You win!");
      this.setState({ score: 0 });
      this.setState({ chosen: [] });
    } else {
      // if they have not won the game: checks if their chosen pic has been selected already or not
      for (var i=0; i<newPick.length; i++) {
        if (this.state.chosen.includes(newPick[i])) {
          console.log("character has already been added");
          console.log("You already picked " + newPick[i].name + ". Try again!");
          alert(`You already picked ${newPick[i].name}. Try again!`)
          this.setState({ score: 0 });
          this.setState({ chosen: [] });
        } else {
          console.log("added new character");
          this.setState({ score: this.state.score + 1 });
          this.newTopScore();
        };
      }
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

  render() {
    const shuffledPosts = shuffleArray(images);
    return (
      <>
      <div className="jumbotron text-center">
        <h1 id="text">Elf Memory Game</h1>
        <h3 id="text">Click on an image to earn points, but don't click on the same one more than once!</h3>
        <div className="scores" id="text">
          <span>Your Score: {this.state.score}</span>
          <span>High Score: {this.state.topScore}</span>  
        </div>
      </div>
      <div className="container">
        <div className="grid">
          <div className="row">
              {shuffledPosts.map(image => (
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
      </div>
      <footer class="text-center">
          <span>Your Score: {this.state.score}</span>
          <span>High Score: {this.state.topScore}</span>  
      </footer>
      </>
    );
  }
}

export default App;
