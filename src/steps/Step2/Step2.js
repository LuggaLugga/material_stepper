import React, {useContext, useEffect} from "react";

import {MaterialStepperContext} from "../../MaterialStepper";

export default function Step2(props) {

    const {configurationData, setConfigurationData} = useContext(MaterialStepperContext);

    useEffect(() => {
        setConfigurationData("hello from step2")
    }, [])

    return (
        <h1>{configurationData}</h1>
    );
}