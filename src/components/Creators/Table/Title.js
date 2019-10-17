import React from "react"
import Typography from "@material-ui/core/Typography"
import FunctionsRoundedIcon from "@material-ui/icons/FunctionsRounded"
import Box from "@material-ui/core/Box"

const Title = ({ title, fullPrice }) => {
    const fullPriceSpan = fullPrice.map((item, id) => {
        if (id === 0) {
            return <span key={id}>{`${item.summ}${item.rate}`}</span>
        } else {
            return (
                <span key={id}>
                    &nbsp;&nbsp;&nbsp;{`${item.summ}${item.rate}`}
                </span>
            )
        }
    })
    return (
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
                    {fullPriceSpan}
                </Typography>
            </Box>
        </Box>
    )
}

export default Title
