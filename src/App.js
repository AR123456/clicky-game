import React, { Component } from "react";
import FriendCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./characters.json";
import "./App.css";

let topScore = 0;
let guessesCorrect = 0;
let message = "";

class App extends Component {
  state = {
    friends,
    topScore,
    guessesCorrect,
    message
  };
  setClicked = id => {
    const friends = this.state.friends;
    const cardClicked = friends.filter(friend => friend.id === id);

    if (cardClicked[0].clicked) {
      guessesCorrect = 0;
      message = "Bummer. Start over";

      for (let i = 0; i < friends.length; i++) {
        friends[i].clicked = false;
      }
      this.setState({ message });
      this.setState({ guessesCorrect });
      this.setState({ friends });
    } else {
      cardClicked[0].clicked = true;
      guessesCorrect = guessesCorrect + 1;
      message = "Well Done!";

      if (guessesCorrect > topScore) {
        topScore = guessesCorrect;
        this.setState({ topScore });
      }
      friends.sort((a, b) => {
        return 0.5 - Math.random();
      });
      this.setState({ friends });
      this.setState({ guessesCorrect });
      this.setState({ message });
    }
  };
  render() {
    return (
      <Wrapper>
        <Title>Game Cards</Title>
        <h3 className="message">{this.state.message}</h3>
        <div className="row">
          {this.state.friends.map(friend => (
            <FriendCard
              setClicked={this.setClicked}
              id={friend.id}
              key={friend.id}
              image={friend.image}
              name={friend.name}
              className="col-sm-1"
            />
          ))}
        </div>
      </Wrapper>
    );
  }

  // ********old code
  // removeFriend = id => {
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   this.setState({ friends });
  // };
  // render() {
  //   return (
  //     <Wrapper>
  //       <Title>Game Cards</Title>
  //       {this.state.friends.map(friend => (
  //         <FriendCard
  //           removeFriend={this.removeFriend}
  //           id={friend.id}
  //           key={friend.id}
  //           name={friend.name}
  //           image={friend.image}
  //           occupation={friend.occupation}
  //           location={friend.location}
  //         />
  //       ))}
  //     </Wrapper>
  //   );
  // }
}

export default App;
