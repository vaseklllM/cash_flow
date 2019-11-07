import React, { Component } from "react"
import graph from "../Creators/graph"
// import { Grid, Box, Container } from "@material-ui/core"
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
                    <div className='GraphsContainer-graphs-graph' id='graph1'></div>
                    <div className='GraphsContainer-graphs-graph' id='graph2'></div>
                    <div className='GraphsContainer-graphs-graph' id='graph3'></div>
                    <div className='GraphsContainer-graphs-graph' id='graph4'></div>
                </div>
            </div>
            // <Container maxWidth='xl'>
            //     <Box mt={10}>
            //         <Grid container spacing={3}>
            //             <Grid item md={6} lg={6} xl={4}>
            //                 <div
            //                     style={{ width: "max-content" }}
            //                     id='graph'
            //                 ></Container>
            //             </Grid>
            //             <Grid item md={6} lg={6} xl={4}>
            //                 <div
            //                     style={{ width: "max-content" }}
            //                     id='graph1'
            //                 ></div>
            //             </Grid>
            //             <Grid item md={6} lg={6} xl={4}>
            //                 <div
            //                     style={{ width: "max-content" }}
            //                     id='graph2'
            //                 ></div>
            //             </Grid>
            //             <Grid item md={6} lg={6} xl={4}>
            //                 <div
            //                     style={{ width: "max-content" }}
            //                     id='graph3'
            //                 ></div>
            //             </Grid>
            //         </Grid>
            //     </Box>
            // </Container>
        )
    }
}

export default Graphs
