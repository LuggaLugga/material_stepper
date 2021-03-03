import React, {useContext, useEffect} from "react";

import {MaterialStepperContext} from "../../MaterialStepper";
import {Button} from "@material-ui/core";

export default function Step1(props) {

    const {configurationData, setConfigurationData, handleNext, handleBack, jumpToStep} = useContext(MaterialStepperContext);

    useEffect(() => {
        setConfigurationData("hello from step1")
    }, [])

    return (
        <React.Fragment>
            <h1>{configurationData}</h1>
            <Button onClick={() => jumpToStep(3)}>Next</Button>
        </React.Fragment>
    );
}