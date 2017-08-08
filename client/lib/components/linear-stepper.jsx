"use strict";

import React from "react";
import Form from "react-jsonschema-form";
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from "material-ui/Stepper";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import StepperJsonForm from "./stepper-json-form";
import TextFieldStepper from "./text-field-stepper";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from "material-ui/Card";

//Form schemas
import detailsSchema from "./stepper-schema/details";
import uiSchema from "./stepper-schema/details";

const onSubmit = ({detailsSchema}) =>console.log("I am valid");

class LinearStepper extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
      form: detailsSchema,
      uiSchema: uiSchema,
      finished: false,
      stepIndex: 0,
    };

    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  handleNext() {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  }

  handlePrev() {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }


  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {

    const {finished, stepIndex} = this.state;

    return (
      <div style={{maxWidth: 380, maxHeight: 500, margin: 'auto'}}>
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel>Details</StepLabel>           
            <StepContent>
              <Form className = "nameBlog"
                schema = {this.state.form}
                uiSchema = {this.state.uiSchema}
                onSubmit = {onSubmit} />
              {this.renderStepActions(0)} 
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Services</StepLabel>
            <StepContent>
              <div className="container">
                <div className="row">
                  <div className="col s12 m3">
                    <Card>
                      <CardTitle title="Card title" subtitle="Card subtitle" />
                      <CardText>
                        <CardHeader
                          title="Load Balancer"
                          avatar=""
                        />
                      </CardText>
                    </Card>
                  </div>
                  <div className="col s12 m3">
                    <Card>
                      <CardTitle title="Card title" subtitle="Card subtitle" />
                      <CardText>
                        <CardHeader
                          title="Dyno"
                          avatar=""
                        />
                      </CardText>
                    </Card>
                  </div>
                  <div className="col s12 m3">
                    <Card>
                      <CardTitle title="Card title" subtitle="Card subtitle" />
                      <CardText>
                        <CardHeader 
                          title = "Metrics"
                          avatar = ""
                        />
                      </CardText>
                    </Card>
                  </div>
    </div>
  </div>
    {this.renderStepActions(1)}
  </StepContent>
</Step>
<Step>
  <StepLabel>Confirmation</StepLabel>
  <StepContent>
    <p>
      Try out different ad text to see what brings in the most customers,
      and learn how to enhance your ads using features like ad extensions.
      If you run into any problems with your ads, find out how to tell if
      they're running and how to resolve approval issues.
    </p>
    {this.renderStepActions(2)}
  </StepContent>
</Step>
    </Stepper>
    {finished && (
      <p style={{margin: '20px 0', textAlign: 'center'}}>
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault();
            this.setState({stepIndex: 0, finished: false});
          }}
        >
          Click here
        </a> to reset the example.
      </p>
    )}
  </div>
  );
  }
  }

  export default LinearStepper;
