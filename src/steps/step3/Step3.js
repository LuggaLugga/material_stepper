import React, {useContext, useEffect} from "react";

import {MaterialStepperContext} from "../../MaterialStepper";

export default function Step3(props) {

    const {configurationData, setConfigurationData} = useContext(MaterialStepperContext);

    useEffect(() => {
        setConfigurationData("hello from step3")
    }, [])

    return (
        <h1>{configurationData}</h1>
    );
}