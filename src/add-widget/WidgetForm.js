import React, { Component } from 'react';
import WidgetNameForm from './WidgetNameForm';
import WidgetLanguageForm from './WidgetLanguageForm';
import Success from './Success';

export class WidgetForm extends Component {
  state = {
    step: 1,
    widgetname: '',
    language: ''
   
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { widgetname, language } = this.state;
    const values = { widgetname, language };

    switch (step) {
      case 1:
        return (
          <WidgetNameForm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <WidgetLanguageForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
     
      case 3:
        return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default WidgetForm;
