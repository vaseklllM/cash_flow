import React from "react"
import {
    ActiveTable,
    PasiveTable,
    CostsTable,
    IncomeTable,
    FullTable,
    ProgressBarCapital,
    IncomeToCosts,
    Capital
} from "../Containers"
import { Grid, Container, Box, Typography } from "@material-ui/core"
import "./main.scss"

const Main = () => {
    return (
        <>
            <Container maxWidth='xl'>
                <Box mt={10}>
                    <Grid item container spacing={3} xl={12}>
                        <Grid item xs={12} md={6} xl={6}>
                            <ProgressBarCapital />
                        </Grid>
                        <Grid item xs={12} md={6} xl={6}>
                            <IncomeToCosts />
                        </Grid>
                    </Grid>
                </Box>
                <div className='separator-horizontal' />
                <Grid container justify='space-between'>
                    <Grid item container spacing={3}>
                        <Grid item xs={12} lg={6} xl={4}>
                            <IncomeTable />
                        </Grid>
                        <Grid item xs={12} lg={6} xl={4}>
                            <CostsTable />
                        </Grid>
                        <Grid item xs={12} lg={12} xl={4}>
                            <Capital />
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

                {/* <Grid container justify='space-between'>
                    <Grid
                        item
                        xs={12}
                        lg={6}
                        xl={6}
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
                        xl={6}
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
                </Grid> */}
            </Container>
        </>
    )
}
export default Main
