import React from "react"
import { connect } from "react-redux"
import { getCashFlow, getValletCourse } from "../../action"
import { hocApp } from "../hoc"
import ActiveTable from "../ActiveTable"
import PasiveTable from "../PasiveTable"
import IncomeTable from "../incomeTable"
import CostsTable from "../costsTable"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"

function App() {
    return (
        <Container fixed>
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
        </Container>
    )
}

const mapStateToProps = ({valletCourse})=>{
    return {
        valletCourse
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCashFlow: cashFlow => dispatch(getCashFlow(cashFlow)),
        getValletCourse: valletCourse => dispatch(getValletCourse(valletCourse))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(hocApp(App))
