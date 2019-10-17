import React, { Component } from "react"
import serverMoney from "../../serverMoney"
import { connect } from "react-redux"
import { getCashFlow, getValletCourse, getBtcCourse } from "../../store/serverMoney/action"
import { App } from "../pages"

class AppContainer extends Component {
    componentDidMount() {
        const server = new serverMoney()
        server.getCashFlow().then(result => this.props.getCashFlow(result))
        server.getValletCourse().then(result =>
            this.props.getValletCourse(result)
        )
        server.getBtcVallet().then(res=>{
            this.props.getBtcCourse(res);
        })
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
        getValletCourse: valletCourse =>
            dispatch(getValletCourse(valletCourse)),
        getBtcCourse: btcCourse => dispatch(getBtcCourse(btcCourse))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer)
