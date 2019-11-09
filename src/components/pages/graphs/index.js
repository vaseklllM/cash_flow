import React from "react"
import { Grid, Box } from "@material-ui/core"
import { ActiveGraph } from "../../Containers"

const Graphs = () => {
    return (
        <Box mt={10}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <ActiveGraph />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Graphs
