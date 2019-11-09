import React, { Component } from "react"
import { Grid, Box } from "@material-ui/core"
import Chart from "chart.js"

class Graphs extends Component {
    componentDidMount() {
        const obj = document.getElementById("graphTest")

        const data = {
            datasets: [
                {
                    label: "My First dataset",
                    data: [10, 30, 25, 16],
                    backgroundColor: ["#8e44ad", "#ff9f43", "#5f27cd", "#10ac84"]
                },
                {}
            ],
            labels: ["Red", "Yellow", "Blue", "green"]
        }
        new Chart(obj, {
            type: "pie",
            data,
            options: {}
        })
    }

    render() {
        return (
            <Box mt={10}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <canvas id='graphTest'></canvas>
                    </Grid>
                    <Grid item xs={6}>
                        <h1
                            style={{
                                border: "2px solid black",
                                textAlign: "center"
                            }}
                        >
                            graph2
                        </h1>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

export default Graphs
