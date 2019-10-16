import React, { Component } from "react"
import serverMoney from "../../serverMoney"
import { connect } from "react-redux"
import { getCashFlow, getValletCourse } from "../../store/serverMoney/action"
import { App } from "../pages"

class AppContainer extends Component {
    componentDidMount() {
        const server = new serverMoney()
        server.getCashFlow.then(result => this.props.getCashFlow(result))
        server.getValletCourse.then(result =>
            this.props.getValletCourse(result)
        )
    }
    render() {
        return <App />
    }
}

const mapStateToProps = state => {
    return {
        valletCourse: state.serverMoney.valletCourse
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
)(AppContainer)
