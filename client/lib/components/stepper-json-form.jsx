"use strict";

import React from "react";
import Form from "react-jsonschema-form";

import detailsSchema from "./stepper-schema/details";
import servicesSchema from "./stepper-schema/services";


const hello = "world";

class StepperJsonForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: detailsSchema,
      formTwo: servicesSchema,
      log: function(type) {
        console.log.bind(console, type);
      }
    }
  }

  render() {

    return (
      <div>
        <Form schema={this.state.form}
          onChange={this.state.log("changed")}
          onSubmit={this.state.log("submitted")}
          onError={this.state.log("errors")} />
        <Form schema={this.state.formTwo} />
      </div>
    );
  }
}

export default StepperJsonForm;



