"use strict";

import React from "react";
import Title from "./title";
import Option from "./option";

class Main extends React.Component {
  constructor(props) {
      super(props);
    }
  render() {
    return (
      <div>
        <Title title="Pasos to the best component ever!!!" />
        <Option />
      </div>
          );
    }
}

export default Main;
