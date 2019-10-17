import React from "react"
import { ActiveTable, PasiveTable, CostsTable, IncomeTable } from "./Containers"
import { NavBar } from "./Containers"
import { Box, Grid, Container, Hidden } from "@material-ui/core"
import "./App.scss"

const App = () => {
    console.log(window)
    return (
        <>
            <NavBar />
            <Container maxWidth='xl'>
                <Box mt={2}>
                    <Grid container spacing={3}>
                        <Grid item container spacing={3} xl={8}>
                            <Grid item xs={12} md={6}>
                                <IncomeTable />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <CostsTable />
                            </Grid>
                            <Grid item xs={12} md={12} lg={6}>
                                <ActiveTable />
                            </Grid>
                            <Grid item xs={12} md={12} lg={6}>
                                <PasiveTable />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} xl={4}>
                            <Grid>
                                <ActiveTable /> {/* вся таблиця */}
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}
export default App
