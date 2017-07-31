"use strict";

import React from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import OptionsForm from "./options-form";

class  AppsCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col s6">
            <Card>
              <CardTitle title="Card title" subtitle="Card subtitle" />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                pellentesque lobortis odio.
              </CardText>
              <OptionsForm />
            </Card>
          </div>
          <div className="col s6">
            <Card>
              <CardTitle title="Card title" subtitle="Card subtitle" />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                pellentesque lobortis odio.
              </CardText>
              <OptionsForm />
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default AppsCards;
