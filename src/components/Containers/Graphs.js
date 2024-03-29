import React from "react"
import { Grid, Box, Container, Typography } from "@material-ui/core"
import { connect } from "react-redux"
import CreateGraph from "../Creators/graph/CreateGraph"

const Graphs = ({ cashFlow }) => {
    const incomeData = cashFlow ? cashFlow.filter(i => i.income > 0) : null
    const activeGraph = cashFlow ? cashFlow.filter(i => i.income > 0) : null
    const costsGraph = cashFlow ? cashFlow.filter(i => i.income < 0) : null
    const capitalGraph = cashFlow ? cashFlow.filter(i => i.income === 0) : null
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
                            Доходи
                        </Typography>
                        <CreateGraph
                            cashFlow={incomeData}
                            type='income'
                            name='incomeGraph'
                        />
                    </Grid>
                    <Grid item xl={4} md={6} xs={12}>
                        <Typography
                            variant='h6'
                            style={{ textAlign: "center" }}
                            gutterBottom
                        >
                            Витрати
                        </Typography>
                        <CreateGraph
                            cashFlow={costsGraph}
                            type='income'
                            name='costsGraph'
                        />
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
                            type='price'
                            name='activeGraph'
                        />
                    </Grid>
                </Grid>
            </Box>
            <div className='separator-horizontal' />
            <Box mt={1}>
                <Grid container spacing={3}>
                    <Grid item xl={4} md={6} xs={12}>
                        <Typography
                            variant='h6'
                            style={{ textAlign: "center" }}
                            gutterBottom
                        >
                            Капитал
                        </Typography>
                        <CreateGraph
                            cashFlow={capitalGraph}
                            type='price'
                            name='capitalGraph'
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
const mapStateToProps = ({ serverMoney }) => ({
    cashFlow: serverMoney.cashFlow
})

export default connect(mapStateToProps)(Graphs)
