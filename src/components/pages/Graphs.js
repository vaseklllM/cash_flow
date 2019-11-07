import React, { Component } from "react"
import graph from "../Creators/graph"
import "./Graphs.scss"

class Graphs extends Component {
    componentDidMount() {
        graph(document.getElementById("graph1"))
        graph(document.getElementById("graph2"))
        graph(document.getElementById("graph3"))
        graph(document.getElementById("graph4"))
    }

    render() {
        return (
            <div className='GraphsContainer'>
                <div className='GraphsContainer-graphs'>
                    <div
                        className='GraphsContainer-graphs-graph'
                        id='graph1'
                    ></div>
                    <div
                        className='GraphsContainer-graphs-graph'
                        id='graph2'
                    ></div>
                    <div
                        className='GraphsContainer-graphs-graph'
                        id='graph3'
                    ></div>
                    <div
                        className='GraphsContainer-graphs-graph'
                        id='graph4'
                    ></div>
                </div>
            </div>
        )
    }
}

export default Graphs
