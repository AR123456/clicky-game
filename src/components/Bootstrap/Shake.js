//this will go in app.js
//need to install and make art of package json

// npm install  react-animations
// npm install  save aphrodite

// need to shake the  main container   when wiggle = true
//can this code be changed to key of of wiggle true

import React, { Component } from "react";
import { headShake } from "react-animations";
import { StyleSheet, css } from "aphrodite";
const styles = StyleSheet.create({
  headShake: {
    animationName: headShake,
    animationDuration: "1s"
  }
});
const shake = Target => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { wiggle: false };
    }

    onClick = () => {
      this.setState({ wiggle: true }, () => {
        const self = this;
        setTimeout(() => self.setState({ wiggle: false }), 1000);
      });
    };

    render() {
      return (
        <Target
          isOpen={true}
          onClick={this.onClick}
          additionalStyles={{ text: {}, frame: {} }}
          frameClass={this.state.shouldShake ? css(styles.headShake) : ""}
        />
      );
    }
  };
};
export default makeValidationErrorAnimation;
