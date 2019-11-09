import React from "react"
import { Grid, Box, Container } from "@material-ui/core"
import { ActiveGraph, PasiveGraph } from "../../Containers"

const Graphs = () => {
    return (
        <Container maxWidth='xl'>
            <Box mt={10}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <ActiveGraph />
                    </Grid>
                    <Grid item xs={4}>
                        <PasiveGraph />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Graphs
