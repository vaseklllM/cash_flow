import React, { Component } from "react"
import serverMoney from "../../serverMoney"

const hocApp = Wraper => {
    return class extends Component {
        componentDidMount() {
            const server = new serverMoney()
            server.getCashFlow.then(result => this.props.getCashFlow(result))
            server.getValletCourse.then(result =>
                this.props.getValletCourse(result)
            )
        }
        render() {
            // console.log(this.props.valletCourse)
            return <Wraper />
        }
    }
}

export default hocApp
