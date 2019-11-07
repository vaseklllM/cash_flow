import React, { Component } from "react"
import graph from "../../Creators/graph"

export class Btc extends Component {
    data = [
        { time: '2018-10-19', open: 54.62, high: 55.50, low: 54.52, close: 54.90 },
        { time: '2018-10-22', open: 55.08, high: 55.27, low: 54.61, close: 54.98 },
        { time: '2018-10-23', open: 56.09, high: 57.47, low: 56.09, close: 57.21 },
        { time: '2018-10-24', open: 57.00, high: 58.44, low: 56.41, close: 57.42 },
    ];
    componentDidMount() {
        graph(document.getElementById("graphBtc"), this.data)
    }


    render() {
        return (
            <div className='GraphsContainer-graphs-graph' id='graphBtc'></div>
        )
    }
}

export default Btc
