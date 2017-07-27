"use strict";

import React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import LinearStepper from "./linear-stepper";



/**
 *  * A modal dialog can only be closed by selecting one of the actions.
 *   */
class OptionsForm extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
      open: false,
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="App Name" onClick={this.handleOpen} />
        <Dialog
          title="Installation"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          <LinearStepper />
        </Dialog>
      </div>
    );
  }
}

export default OptionsForm;
