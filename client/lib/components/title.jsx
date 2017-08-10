"use strict";

// Use stateless functional component when rendering only HTML content to the DOM
// and when only using a render method.

import React from "react";

const Title = (props) =>  {

    return(
      <h1 className="title-h1">{props.title}</h1>
    )

  }

export default Title;
