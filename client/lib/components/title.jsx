"use strict";

// Use stateless component when rendering only HTML content

import React from "react";

const Title = (props) =>  {

    return(
      <h1 className="title-h1">{props.title}</h1>
    )

  }

export default Title;
