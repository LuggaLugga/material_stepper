import React, {createContext, useState} from "react";

import {Grid, Step, StepLabel, Stepper} from "@material-ui/core";

import {MaterialStepperStyles} from "./MaterialStepperStyles";

import PropTypes from "prop-types";

export const MaterialStepperContext = createContext(null);

export default function MaterialStepper(props) {

    const {steps} = props;

    const materialStepperClasses = MaterialStepperStyles();

    const [activeStep, setActiveStep] = useState(0);
    const [configurationData, setConfigurationData] = useState("works");

    const handleNext = (skip) => {
        if(skip && typeof skip === "number") {
            setActiveStep(skip - 1)
        } else {
            setActiveStep(prevState => prevState + 1);
        }
    }

    const handleBack = (skip) => {
        if(skip && typeof skip === "number") {
            setActiveStep(skip - 1)
        } else {
            setActiveStep(prevState => prevState - 1);
        }
    }

    const jumpToStep = (step) => {
        if(step && typeof step === "number") {
            setActiveStep(step - 1)
        }
    }

    const stepProps = {
        handleNext: handleNext,
        handleBack: handleBack,
        jumpToStep: jumpToStep
    };

    const getStep = (steps, activeStep, stepProps) => {
        const step = steps[activeStep];
        return <step.component {...stepProps}/>;
    }

    const processBar = () => {
        return (
            <Grid item className={materialStepperClasses.fullWidthGridItem}>
                <Stepper activeStep={activeStep}>
                    {steps.map((step, index) => (
                        <Step key={("step" + index)} className={materialStepperClasses.processBarStepElement}>
                            <StepLabel>{step.name}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Grid>
        );
    };

    const content = () => {
        return (
            <MaterialStepperContext.Provider value={{configurationData, setConfigurationData}}>
                <Grid item>
                    {getStep(steps, activeStep, stepProps)}
                </Grid>
            </MaterialStepperContext.Provider>
        );
    }

    return (
        <Grid container direction="column" justify="center" alignItems="center" spacing={4}>
            {processBar()}
            {content()}
        </Grid>
    );
}

MaterialStepper.propTypes = {
    steps: PropTypes.array.isRequired
};