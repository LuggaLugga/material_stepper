import React from "react";

import {AppBar, Container, Toolbar, Typography} from "@material-ui/core";

import MaterialStepper from "./MaterialStepper";

import steps from "./steps/Steps";

export default function App() {

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5">
                        MaterialStepper
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container style={{marginTop: "3rem", marginBottom: "3rem"}}>
                <MaterialStepper steps={steps()}/>
            </Container>
        </div>
    );
};