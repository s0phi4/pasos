import React from 'react';
import TextField from 'material-ui/TextField';
import {purpleA400, blue500} from 'material-ui/styles/colors';

const styles = {
  errorStyle: {
    color: purpleA400,
  },
  underlineStyle: {
    borderColor: purpleA400,
  },
  floatingLabelStyle: {
    color: purpleA400,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
};

const TextFieldStepper = () => (
  <div>
    <TextField
      hintText="Database Name"
      hintStyle={styles.errorStyle}
    /><br />
    <TextField
      hintText="Include extension"
      errorText="This field is required."
      errorStyle={styles.errorStyle}
    /><br />
    <TextField
      hintText="Prefix"
      underlineStyle={styles.underlineStyle}
    /><br />
    <TextField
      hintText="Version"
      underlineFocusStyle={styles.underlineStyle}
    /><br />
  </div>
);

export default TextFieldStepper;
