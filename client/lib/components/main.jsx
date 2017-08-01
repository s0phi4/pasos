"use strict";

import React from "react";

/*Material-UI */
import {blue500} from 'material-ui/styles/colors';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from "react-tap-event-plugin";

/*Features */
import AppBar from 'material-ui/AppBar';
import Title from "./title";
import OptionsForm from "./options-form";
import AppsCards from "./apps-cards";

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
            <AppBar
              style={{backgroundColor: blue500}}
              className="cs-navBar"
              title="Critical Stack Marketplace"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
            <Title title="Apps to maximize your stack potential" />
            <p>Tools and services for developing, extending, and operating your app.</p>
            <AppsCards />
            {form}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Main;
