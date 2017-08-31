"use strict"

import React from "react";


class TestComponent extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div>
        <h1 className="showProper">Show details here</h1>
        <p>{this.props.formData.domain}</p>
      </div>
    )
  }
}


export default TestComponent;
