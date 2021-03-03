import React, {createContext, useState} from "react";

import {Grid, Step, StepButton, Stepper} from "@material-ui/core";

import {MaterialStepperStyles} from "./MaterialStepperStyles";

import PropTypes from "prop-types";

export const MaterialStepperContext = createContext(null);

export default function MaterialStepper(props) {

    const {steps} = props;

    const materialStepperClasses = MaterialStepperStyles();

    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});
    const [configurationData, setConfigurationData] = useState("works");

    const handleNext = () => {
        setActiveStep(prevState => prevState + 1);
    }

    const handleComplete = () => {
        const newCompletedSteps = completed;
        newCompletedSteps[activeStep] = true;
        setCompleted({...newCompletedSteps});
    }

    const handleBack = () => {
        setActiveStep(prevState => prevState - 1);
    }

    const jumpToStep = (step) => {
        if (step && typeof step === "number") {
            setActiveStep(step - 1)
        }
    }

    const getStep = () => {
        const Step = steps[activeStep];
        return <Step.Component/>;
    }

    const processBar = () => {
        return (
            <Grid item className={materialStepperClasses.fullWidthGridItem}>
                <Stepper activeStep={activeStep}>
                    {steps.map((step, index) => (
                        <Step key={("step" + index)} className={materialStepperClasses.processBarStepElement}>
                            <StepButton onClick={() => setActiveStep(index)} completed={completed[index]}>
                                {step.name}
                            </StepButton>
                        </Step>
                    ))}
                </Stepper>
            </Grid>
        );
    };

    const content = () => {
        return (
            <MaterialStepperContext.Provider value={{
                activeStep,
                completed,
                configurationData,
                setConfigurationData,
                handleNext,
                handleComplete,
                handleBack,
                jumpToStep
            }}>
                <Grid item>
                    {getStep()}
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