import React from "react"
import {
    ActiveTable,
    PasiveTable,
    CostsTable,
    IncomeTable,
    NavBar,
    FullTable,
    ProgressBarCapital,
    IncomeToCosts
} from "./Containers"
import { Grid, Container, Box, Typography } from "@material-ui/core"
import "./App.scss"

const App = () => {
    return (
        <>
            <NavBar />
            <Container maxWidth='xl'>
                <Box mt={2}>
                    <Grid item container spacing={3} xl={12}>
                        <Grid item xs={12} md={6} xl={4}>
                            <ProgressBarCapital />
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                            <IncomeToCosts />
                        </Grid>
                    </Grid>
                </Box>
                <div className='separator-horizontal' />
                <Grid container justify='space-between'>
                    <Grid item container spacing={3}>
                        <Grid item xs={12} lg={6} xl={3}>
                            <IncomeTable />
                        </Grid>
                        <Grid item xs={12} lg={6} xl={3}>
                            <CostsTable />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            lg={6}
                            xl={3}
                            direction='row'
                            justify='center'
                            alignItems='center'
                            container
                        >
                            <Typography
                                variant='h4'
                                style={{ margin: 0 }}
                                gutterBottom
                            >
                                графік капиталу
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            lg={6}
                            xl={3}
                            direction='row'
                            justify='center'
                            alignItems='center'
                            container
                        >
                            <Typography
                                variant='h4'
                                style={{ margin: 0 }}
                                gutterBottom
                            >
                                графік доходу
                            </Typography>
                        </Grid>
                        <Grid item xs={12} lg={12} xl={6}>
                            <ActiveTable />
                        </Grid>
                        <Grid item xs={12} lg={12} xl={6}>
                            <PasiveTable />
                        </Grid>
                        <Grid item xs={12} lg={12} xl={12}>
                            <FullTable />
                        </Grid>
                    </Grid>
                </Grid>
                <div className='separator-horizontal' />
            </Container>
        </>
    )
}
export default App
