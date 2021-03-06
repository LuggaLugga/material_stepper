import React, {useContext, useEffect} from "react";

import {MaterialStepperContext} from "../../MaterialStepper";

import {Button} from "@material-ui/core";

export default function Step1(props) {

    const {
        activeStep,
        completed,
        configurationData,
        setConfigurationData,
        handleNext,
        handleComplete,
        jumpToStep
    } = useContext(MaterialStepperContext);

    useEffect(() => {
        setConfigurationData("hello from step1")
    }, [])

    return (
        <React.Fragment>
            <h1>{configurationData}</h1>
            <Button variant="contained" onClick={handleNext} style={{margin: "1rem"}} disabled={!completed[activeStep]}>Next</Button>
            <Button variant="contained" onClick={handleComplete} style={{margin: "1rem"}} disabled={completed[activeStep]}>Complete Step</Button>
            <Button variant="contained" onClick={() => jumpToStep(3)} style={{margin: "1rem"}} disabled={!completed[activeStep]}>Jump to 3</Button>
        </React.Fragment>
    );
}