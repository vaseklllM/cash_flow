import React from "react"
import { Grid, Box, Container, Typography } from "@material-ui/core"
import { connect } from "react-redux"
import CreateGraph from "../Creators/graph/CreateGraph"

const Graphs = ({ cashFlow }) => {
    const incomeData = cashFlow ? cashFlow.filter(i => i.income > 0) : null
    const activeGraph = cashFlow ? cashFlow.filter(i => i.income >= 0) : null
    const costsGraph = cashFlow
        ? cashFlow.filter(i => i.income < 0 && i.price !== 0)
        : null
    return (
        <Container maxWidth='xl'>
            <Box mt={10}>
                <Grid container spacing={3}>
                    <Grid item xl={4} md={6} xs={12}>
                        <Typography
                            variant='h6'
                            style={{ textAlign: "center" }}
                            gutterBottom
                        >
                            Доход
                        </Typography>
                        <CreateGraph cashFlow={incomeData} name='incomeGraph' />
                    </Grid>
                    <Grid item xl={4} md={6} xs={12}>
                        <Typography
                            variant='h6'
                            style={{ textAlign: "center" }}
                            gutterBottom
                        >
                            Витрати
                        </Typography>
                        <CreateGraph cashFlow={costsGraph} name='costsGraph' />
                    </Grid>
                    <Grid item xl={4} md={6} xs={12}>
                        <Typography
                            variant='h6'
                            style={{ textAlign: "center" }}
                            gutterBottom
                        >
                            Активи
                        </Typography>
                        <CreateGraph
                            cashFlow={activeGraph}
                            name='activeGraph'
                        />
                    </Grid>
                </Grid>
            </Box>
            <div className='separator-horizontal' />
        </Container>
    )
}
const mapStateToProps = ({ serverMoney }) => ({
    cashFlow: serverMoney.cashFlow
})

export default connect(mapStateToProps)(Graphs)
