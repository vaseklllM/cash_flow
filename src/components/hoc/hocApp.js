import React, { Component } from "react";
import serverMoney from "../../serverMoney";

const hocApp = Wraper => {
    return class extends Component {
        componentDidMount() {
            const cashFlow = new serverMoney();
            cashFlow.getCashFlow.then(result => this.props.getCashFlow(result));
        }
        render() {
            return <Wraper />;
        }
    };
};

export default hocApp;
