import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class WidgetNameForm extends Component {
  continue = e => {
    console.log('values')
    e.preventDefault();
    if(this.props.values.widgetname !== ""){
      this.props.nextStep();
    }
    
  };
  cancel = e => {
    console.log('Canceled')
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
              disabled = {this.props.values.widgetname === ""}
              onClick={this.continue}
            >Next</Button>
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

export default WidgetNameForm;
