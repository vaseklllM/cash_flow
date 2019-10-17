import React from "react"
import { ActiveTable, PasiveTable, CostsTable, IncomeTable } from "./Containers"
import { NavBar } from "./Containers"
import { Box, Grid, Container } from "@material-ui/core"
import "./App.scss"

const App = () => {
    return (
        <>
            <NavBar />
            <Container maxWidth='xl'>
                <Box mt={2}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} xl={4}>
                            <IncomeTable />
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                            <CostsTable />
                        </Grid>
                        <Grid item xs={12} md={12} lg={6} xl={4}>
                            <ActiveTable />
                        </Grid>
                        <Grid item xs={12} md={12} lg={6} xl={4}>
                            <PasiveTable />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}
export default App
