import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import {withRouter} from 'react-router-dom'

export class WidgetLanguageForm extends Component {
  continue = e => {
    e.preventDefault();
    this.addWidget(this.props.values)
    this.props.nextStep();
  };
  addWidget = (newWidget) => {
    let data = JSON.parse(localStorage.getItem("widgets") || "[]");
    console.log(data)
    console.log(newWidget);
    data.push({ name: newWidget.widgetname, language: newWidget.language === "" ? 'English' : newWidget.language })
    localStorage.setItem('widgets', JSON.stringify(data));
  }
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
    this.props.values.language = option.value;
  }
  handleChangeLanguage = input => e => {
    debugger;
    this.setState({ [input]: e.target.value });
  };

  cancel = e => {
    console.log('Canceled');
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
            <AppBar title="Enter Personal Details" />

            Select Language:
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
export default withRouter( WidgetLanguageForm);
