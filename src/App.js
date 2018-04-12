import React, { Component } from "react";
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import "./App.css";

let topScore = 0;
let guessesCorrect = 0;
let message = "";

class App extends Component {
  state = {
    characters,
    topScore,
    guessesCorrect,
    message
  };
  setClicked = id => {
    const characters = this.state.characters;
    const cardClicked = characters.filter(character => character.id === id);

    if (cardClicked[0].clicked) {
      guessesCorrect = 0;
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
      this.setState({ message });
    }
  };
  render() {
    return (
      <Wrapper>
        <h1>Clicky Game !</h1>
        <h1>
          Click on an image to earn points, but don't click on any more than
          once!
        </h1>
        <h3 className="message">{this.state.message}</h3>
        <div className="row">
          {this.state.characters.map(character => (
            <GameCard
              setClicked={this.setClicked}
              id={character.id}
              key={character.id}
              image={character.image}
              name={character.name}
              className="col-sm-1"
            />
          ))}
        </div>
      </Wrapper>
    );
  }

  // ********old code
  // removeFriend = id => {
  //   const characters = this.state.characters.filter(character => character.id !== id);
  //   this.setState({ characters });
  // };
  // render() {
  //   return (
  //     <Wrapper>
  //       <Title>Game Cards</Title>
  //       {this.state.characters.map(character => (
  //         <FriendCard
  //           removeFriend={this.removeFriend}
  //           id={character.id}
  //           key={character.id}
  //           name={character.name}
  //           image={character.image}
  //           occupation={character.occupation}
  //           location={character.location}
  //         />
  //       ))}
  //     </Wrapper>
  //   );
  // }
}

export default App;
