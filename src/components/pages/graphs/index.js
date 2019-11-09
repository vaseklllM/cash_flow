import React from "react"
import { Grid, Box, Container, Typography } from "@material-ui/core"
import { ActiveGraph, PasiveGraph } from "../../Containers"

const Graphs = () => {
    return (
        <Container maxWidth='xl'>
            <Box mt={10}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Typography
                            variant='h6'
                            style={{ textAlign: "center" }}
                            gutterBottom
                        >
                            Активи
                        </Typography>
                        <ActiveGraph />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography
                            variant='h6'
                            style={{ textAlign: "center" }}
                            gutterBottom
                        >
                            Пасиви
                        </Typography>
                        <PasiveGraph />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Graphs
