"use strict";

import React from "react";
import Title from "./title";
import OptionsForm from "./options-form";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();


class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false
    }

    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    this.setState({
      showForm: !this.state.showForm
    }); 
  }

  render() {

    let form = this.state.showForm ? <OptionsForm /> : null;

    return (
      <div>
        <MuiThemeProvider>
          <div>
            <Title title="Critical Stack Marketplace" />
            <OptionsForm />

            {form}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Main;
