import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {withRouter} from 'react-router-dom'
export class WidgetLanguageForm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  
  constructor() {
    super();
    this.state = {
      options: [
        'English', 'Deutsch', 'Spanish'
      ]
    };
    this._onSelect = this._onSelect.bind(this)
  }
  _onSelect(option) {
    this.props.handleChangeLanguage(option.value)
    
  }

  cancel = e => {
    console.log('Canceled');
    this.props.history.push("/");
  };

  render() {
    const { values } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter Personal Details" />

            <span className="language">Select Language:</span>
            <br /><br />
            <Dropdown options={this.state.options}
              onChange={this._onSelect}
              defaultValue={values.language}
              value={this.state.options[0]} placeholder="Select an option" />

            <br />
            <br />

            

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
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
export default withRouter( WidgetLanguageForm);
