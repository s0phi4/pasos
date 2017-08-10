"use strict"

import React from "react";


class TestComponent extends React.Component {
  constructor(props) {
  super(props);
  }

  showP() {
    showProp === true ? Yes : No;
  } 

  showTest() {
  
  }

  render() {
    return(
      <div>
        <h1 className = "showProper">{this.props.showProp}</h1>
        <p>Yes, it is showing!</p>
      </div>
    )
  }
}


export default TestComponent;
