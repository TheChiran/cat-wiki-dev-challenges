import { Grid } from "@mui/material";
import React from "react"
import Button from "../../components/Button/Index";

export default function Buttons() {
    return (
        <React.Fragment>
            <div className="title-section">
                <h2 className="section-title">Buttons</h2>
            </div>
            <div className="contents">
                <Grid container rowGap={2}>
                    <Grid xs={12}>
                        <Button text="Default Button" />
                    </Grid>

                    <Grid xs={12}>
                        <Button text="Variant Outline" variant="outline" />
                    </Grid>

                    <Grid xs={12}>
                        <Button text="Variant Text" variant="text" />
                    </Grid>

                    <Grid xs={12}>
                        <Button text="Disabled" isDisabled={true} />
                    </Grid>

                    <Grid xs={12}>
                        <Button text="Variant Text disabled" variant="text" isDisabled={true} />
                    </Grid>

                    <Grid xs={12}>
                        <Button text="Disable shadow" disableShadow={true} />
                    </Grid>

                    <Grid xs={12}>
                        <Button text="Button with start icon" startIcon="local_grocery_store" color="primary"/>
                    </Grid>

                    <Grid xs={12}>
                        <Button text="Button with end icon" endIcon="local_grocery_store" color="primary"/>
                    </Grid>

                    <Grid xs={12}>
                        <Button text="Sm btn" size="sm" color="primary"/>
                    </Grid>

                    <Grid xs={12}>
                        <Button text="Md btn" size="md" color="primary"/>
                    </Grid>

                    <Grid xs={12}>
                        <Button text="Lg btn" size="lg" color="primary"/>
                    </Grid>

                    <Grid xs={12}>
                        <Button text="Color default" size="lg" color="default" />
                    </Grid>

                    <Grid xs={12}>
                        <Button text="Color primary" size="lg" color="primary" />
                    </Grid>
                    <Grid xs={12}>
                        <Button text="Color secondary" size="lg" color="secondary" />
                    </Grid>
                    <Grid xs={12}>
                        <Button text="Color danger" size="lg" color="danger" />
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
};