import React from "react"
import {
    ActiveTable,
    PasiveTable,
    CostsTable,
    IncomeTable,
    ValletCourse
} from "./Containers"
import { NavBar } from "./Containers"
import { Grid, Container, Hidden } from "@material-ui/core"
import "./App.scss"

const App = () => {
    return (
        <>
            <NavBar />
            <ValletCourse />
            <Container maxWidth='xl'>
                <Grid container justify='space-between'>
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
                    <Hidden lgDown>
                        <div className='separator-vertical'></div>
                    </Hidden>
                    <Grid item xs={12} xl={4}>
                        <Grid>
                            <ActiveTable /> {/* вся таблиця */}
                        </Grid>
                    </Grid>
                </Grid>
                <Hidden lgDown>
                    <div className='separator-horizontal'></div>
                </Hidden>
            </Container>
        </>
    )
}
export default App
