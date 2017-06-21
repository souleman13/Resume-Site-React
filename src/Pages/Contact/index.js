/**
 * Created by Douglas on 6/13/2017.
 */

import React, {Component} from 'react';
import './Contact.css';

import {
    Step,
    Stepper,
    StepButton,
    StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import {white} from 'material-ui/styles/colors';


export default class extends Component {

    state = {
        stepIndex: 0,
    };

    handleNext = () => {
        const {stepIndex} = this.state;
        if (stepIndex < 2) {
            this.setState({stepIndex: stepIndex + 1});
        }
    };

    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };

    renderStepActions(step) {
        return (
            <div style={{margin: '12px 0'}}>
                {step < 2 &&
                <RaisedButton
                    label="Next"
                    disableTouchRipple={true}
                    disableFocusRipple={true}
                    primary={true}
                    onTouchTap={this.handleNext}
                    style={{marginRight: 12}}
                />
                }
                {step === 2 &&
                <RaisedButton
                    label="Send"
                    disableTouchRipple={true}
                    disableFocusRipple={true}
                    primary={true}
                    onTouchTap={this.handleNext}
                    style={{marginRight: 12}}
                />
                }
                {step > 0 && (
                    <FlatButton
                        label="Back"
                        disableTouchRipple={true}
                        disableFocusRipple={true}
                        onTouchTap={this.handlePrev}
                    />
                )}
            </div>
        );
    }

    render() {

        const {stepIndex} = this.state;

        return (
            <main className="mainContact">
                    <form className="formStepper">
                        <Stepper
                            activeStep={stepIndex}
                            linear={false}
                            orientation="vertical"
                        >
                            <Step>
                                <StepButton style={{textColor: white}} onTouchTap={() => this.setState({stepIndex: 0})} >
                                    <h3 style={{color: white}}>Name and Company</h3>
                                </StepButton>
                                <StepContent>
                                    <fieldset>
                                        <TextField type="text" floatingLabelText="Full Name"/>
                                        <TextField type="text" floatingLabelText="Company Name"/>
                                    </fieldset>
                                    {this.renderStepActions(0)}
                                </StepContent>
                            </Step>
                            <Step>
                                <StepButton onTouchTap={() => this.setState({stepIndex: 1})}>
                                    <h3 style={{color: white}}>Contact Information</h3>
                                </StepButton>
                                <StepContent>
                                    <fieldset>
                                        <TextField type="text" floatingLabelText="E-mail Address"
                                                   hintText="example@gmail.com"/>
                                        <TextField type="text" floatingLabelText="Phone Number"
                                                   hintText="123-456-7890"/>
                                    </fieldset>
                                    {this.renderStepActions(1)}
                                </StepContent>
                            </Step>
                            <Step>
                                <StepButton onTouchTap={() => this.setState({stepIndex: 2})}>
                                    <h3 style={{color: white}}>Message</h3>
                                </StepButton>
                                <StepContent>
                                    <fieldset>
                                        <TextField floatingLabelText="Text" hintText="Type your message here!"
                                                   multiLine={true} rows={1} rowsMax={8}/>
                                    </fieldset>
                                    {this.renderStepActions(2)}
                                </StepContent>
                            </Step>
                        </Stepper>
                    </form>
            </main>
        );
    }

}