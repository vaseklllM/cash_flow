import React from "react"
import { ActiveTable, PasiveTable, CostsTable, IncomeTable } from "./Containers"
import { NavBar } from "./pages"
import { Box, Grid, Container } from "@material-ui/core"
import "./App.scss"

const App = () => {
    return (
        <>
            <NavBar />
            <Container fixed>
                <Box mt={2}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <CostsTable />
                        </Grid>
                        <Grid item xs={6}>
                            <IncomeTable />
                        </Grid>
                    </Grid>
                    <ActiveTable />
                    <PasiveTable />
                </Box>
            </Container>
        </>
    )
}
export default App
