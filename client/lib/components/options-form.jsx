"use strict";

import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LinearStepper from "./linear-stepper";

class OptionsForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    }

  }

  render() {
  
    return(
      <div>
        <MuiThemeProvider>
          <div>
             <h2 className="subtitle-h2">And here it is</h2>
             <LinearStepper />
           </div>
         </MuiThemeProvider>
      </div>
    );

  }
}

export default OptionsForm;
