import React, {useContext, useEffect} from "react";

import {MaterialStepperContext} from "../../MaterialStepper";
import {Button} from "@material-ui/core";

export default function Step3(props) {

    const {configurationData, setConfigurationData, handleBack, jumpToStep} = useContext(MaterialStepperContext);

    useEffect(() => {
        setConfigurationData("hello from step3")
    }, [])

    return (
        <React.Fragment>
            <h1>{configurationData}</h1>
            <Button variant="contained" onClick={handleBack} style={{margin: "1rem"}}>Back</Button>
            <Button variant="contained" onClick={() => jumpToStep(1)} style={{margin: "1rem"}}>Finish</Button>
        </React.Fragment>
    );
}