import React, {useContext} from "react";

import {MaterialStepperContext} from "../../MaterialStepper";

export default function Step3(props) {

    const {configurationData, setConfigurationData} = useContext(MaterialStepperContext);

    setConfigurationData("hello from step 3")

    return (
        <h1>{configurationData}</h1>
    );
}