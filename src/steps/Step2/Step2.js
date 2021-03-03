import React, {useContext} from "react";

import {MaterialStepperContext} from "../../MaterialStepper";

export default function Step2(props) {

    const {configurationData, setConfigurationData} = useContext(MaterialStepperContext);

    setConfigurationData("hello from step2")

    return (
        <h1>{configurationData}</h1>
    );
}