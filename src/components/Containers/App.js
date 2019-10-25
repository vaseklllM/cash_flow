import React, { Component } from "react"
import serverMoney from "../../serverMoney"
import { connect } from "react-redux"
import { getCashFlow, getVallet } from "../../store/serverMoney/action"
import { App } from "../pages"

class AppContainer extends Component {
    componentDidMount() {
        const server = new serverMoney()
        server.getCashFlow().then(result => this.props.getCashFlow(result))
        this.getVallet(server)
    }

    getVallet(server) {
        server.GetVallets().then(res => {
            res.forEach(item => {
                if (!item.value) {
                    setTimeout(() => {
                        this.getVallet(server)
                        return 
                    }, 2000)
                }
            })
            this.props.getVallet(res)
        })
    }

    render() {
        return <App />
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCashFlow: cashFlow => dispatch(getCashFlow(cashFlow)),
        getVallet: valletCourse => dispatch(getVallet(valletCourse))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(AppContainer)
