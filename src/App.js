import React, { Component } from "react";
// import BootStrap from "./components/Bootstrap";
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import characters from "./characters.json";
import "./App.css";

let topScore = 0;
let guessesCorrect = 0;
let message = "";
let wiggle = false;

class App extends Component {
  state = {
    characters,
    topScore,
    guessesCorrect,
    message,
    wiggle
  };
  setClicked = id => {
    const characters = this.state.characters;
    const cardClicked = characters.filter(character => character.id === id);

    if (cardClicked[0].clicked) {
      guessesCorrect = 0;
      wiggle = true;
      message = "Bummer. Start over";

      for (let i = 0; i < characters.length; i++) {
        characters[i].clicked = false;
      }
      this.setState({ message });
      this.setState({ guessesCorrect });
      this.setState({ characters });
    } else {
      cardClicked[0].clicked = true;
      guessesCorrect = guessesCorrect + 1;
      message = "Well Done!";

      if (guessesCorrect > topScore) {
        topScore = guessesCorrect;
        this.setState({ topScore });
      }
      characters.sort((a, b) => {
        return 0.5 - Math.random();
      });
      this.setState({ characters });
      this.setState({ guessesCorrect });
      this.setState({ topScore });
      this.setState({ message });
    }
  };
  render() {
    return (
      <Wrapper>
        <div className="main-container">
          <h1>Clicky Game !</h1>

          <h1>
            Click on an image to earn points, but don't click on any more than
            once!
          </h1>
          <h3 className="message">{this.state.message}</h3>
          <h3 className=" guessesCorrect">
            {" "}
            Number Correct {this.state.guessesCorrect}
          </h3>
          <h3 className="topScore">Top Score {this.state.topScore}</h3>
          <main className="container">
            <div className="row">
              {this.state.characters.map(character => (
                <GameCard
                  setClicked={this.setClicked}
                  id={character.id}
                  key={character.id}
                  image={character.image}
                  className="col-sm-1"
                />
              ))}
            </div>
          </main>
        </div>
      </Wrapper>
    );
  }
}

export default App;
