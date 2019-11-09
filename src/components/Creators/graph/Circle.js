import React, { Component } from "react"
import propTypes, { number } from "prop-types"
import Chart from "chart.js"

class Graphs extends Component {
    componentDidMount() {
        const { names, colors, circleName, value } = this.props
        const obj = document.getElementById(circleName)
        const data = {
            datasets: [
                {
                    label: "My First dataset",
                    data: value,
                    backgroundColor: colors,
                    options: {
                        cutoutPercentage: 0
                    }
                },
                {}
            ],
            labels: names
        }
        new Chart(obj, {
            type: "pie",
            data,
            options: {}
        })
    }

    render() {
        const { circleName } = this.props
        return <canvas id={circleName}></canvas>
    }
}

Graphs.propTypes = {
    names: propTypes.arrayOf(propTypes.string).isRequired,
    colors: propTypes.arrayOf(propTypes.string).isRequired,
    circleName: propTypes.string.isRequired,
    value: propTypes.arrayOf(number).isRequired
}

export default Graphs
