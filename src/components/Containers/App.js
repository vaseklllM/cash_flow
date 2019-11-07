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

    async getVallet(server) {
        try {
            const res = await server.GetVallets()
            res.forEach(item => {
                if (!item.value) {
                    throw new Error("error loading vallets")
                }
            })
            this.props.getVallet(res)
        } catch {
            setTimeout(() => {
                this.getVallet(server)
                console.log("reload vallet")
            }, 2000)
        }
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
