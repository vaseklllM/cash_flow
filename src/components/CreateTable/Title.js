import React from "react"
import Typography from "@material-ui/core/Typography"
import FunctionsRoundedIcon from "@material-ui/icons/FunctionsRounded"
import Box from "@material-ui/core/Box"

const Title = ({ title, fullPrice }) => (
    <Box display='flex' justifyContent='space-between' p={1} pb={0}>
        <Box p={0}>
            <Typography variant='h5' gutterBottom>
                {title}
            </Typography>
        </Box>
        <Box p={0}>
            <Typography
                style={{ display: "flex", alignItems: "center" }}
                variant='h5'
                gutterBottom
            >
                <FunctionsRoundedIcon />
                <span>{fullPrice}</span>
            </Typography>
        </Box>
    </Box>
)

export default Title
