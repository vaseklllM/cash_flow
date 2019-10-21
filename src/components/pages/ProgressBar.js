import React from "react"
import { Box, Typography } from "@material-ui/core"

const ProgressBar = ({ width, title }) => {
    return (
        <div className='ProgressBar'>
            <Box display='flex' justifyContent='space-between' p={1} pb={0}>
                <Box p={0}>
                    <Typography variant='subtitle2' gutterBottom>
                        {title.left}
                    </Typography>
                </Box>
                <Box p={0}>
                    <Typography variant='subtitle2' gutterBottom>
                        {title.right}
                    </Typography>
                </Box>
            </Box>
            <div className='ProgressBar-body'>
                <div className='ProgressBar-body-whitebg'></div>
                <div
                    className='ProgressBar-body-blackbg'
                    style={{ width: width ? `${width}%` : "0%" }}
                ></div>
                <div
                    className='ProgressBar-body-makered'
                    style={{ width: width ? `${width}%` : "0%" }}
                ></div>
                <span>{width ? `${width}%` : "0%"}</span>
            </div>
        </div>
    )
}

export default ProgressBar
