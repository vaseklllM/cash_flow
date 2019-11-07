import React, { Component } from "react"
import Btc from "./Btc"
import Usd from "./Usd"
import "./Graphs.scss"

class Graphs extends Component {
    render() {
        return (
            <div className='GraphsContainer'>
                <div className='GraphsContainer-graphs'>
                    <Btc />
                    {/* <Usd /> */}
                </div>
            </div>
        )
    }
}

export default Graphs
