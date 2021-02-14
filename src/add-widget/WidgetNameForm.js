import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { withRouter } from 'react-router-dom'
export class WidgetNameForm extends Component {
  continue = e => {
    console.log('values')
    e.preventDefault();
    if (this.props.values.widgetname !== "") {
      this.props.nextStep();
    }


    this.addWidget(this.props.values)
    this.props.nextStep();
  };
  addWidget = (newWidget) => {
    let data = JSON.parse(localStorage.getItem("widgets") || "[]");
    console.log(data)
    console.log(newWidget);
    data.push({ name: newWidget.widgetname, language: newWidget.language === "" ? 'English' : newWidget.language })
    localStorage.setItem('widgets', JSON.stringify(data));
  };
  cancel = e => {
    console.log('Canceled')
    this.props.history.push("/");
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter User Details" />
            <TextField
              placeholder="Enter Widget Name"
              label="Widget Name"
              onChange={handleChange('widgetname')}
              defaultValue={values.widgetname}
              margin="normal"
              fullWidth
              required
            />

            <br />
            <br />

            <Button
              color="primary"
              variant="contained"
              disabled={this.props.values.widgetname === ""}
              onClick={this.continue}
            >Add Widget</Button>
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.cancel}
            >Cancel</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(WidgetNameForm);
