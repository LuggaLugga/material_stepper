import React, {useContext, useEffect} from "react";

import {MaterialStepperContext} from "../../MaterialStepper";
import {Button} from "@material-ui/core";

export default function Step2(props) {

    const {configurationData, setConfigurationData, handleNext, handleBack, jumpToStep} = useContext(MaterialStepperContext);

    useEffect(() => {
        setConfigurationData("hello from step2")
    }, [])

    return (
        <React.Fragment>
            <h1>{configurationData}</h1>
            <Button variant="contained" onClick={handleBack} style={{margin: "1rem"}}>Back</Button>
            <Button variant="contained" onClick={handleNext} style={{margin: "1rem"}}>Next</Button>
            <Button variant="contained" onClick={() => jumpToStep(3)} style={{margin: "1rem"}}>Jump to 3</Button>
        </React.Fragment>
    );
}