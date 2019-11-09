import React from "react"
import { Typography, Box } from "@material-ui/core"
import FunctionsRoundedIcon from "@material-ui/icons/FunctionsRounded"
import { connect } from "react-redux"

const Title = ({ title, fullPrice, vallets }) => {
    let fullPriceUAH = 0
    if (vallets.length !== 0 && fullPrice.length !== 0) {
        fullPrice.forEach(item => {
            const vallet = vallets.filter(i => i.sumbol === item.rate)
            fullPriceUAH += vallet[0].value * item.summ
        })
    }
    const fullPriceSpan = fullPrice.map((item, id) => {
        return (
            <span key={id}>
                {`${Math.abs(item.summ).toLocaleString("en-IN")}${item.rate}`}
                &nbsp;&nbsp;
            </span>
        )
    })
    fullPriceSpan.push(
        `( ${parseFloat(Math.abs(fullPriceUAH).toFixed(0)).toLocaleString(
            "ru-RU"
        )} ₴ )`
    )
    return (
        <Box
            display='flex'
            justifyContent='space-between'
            className='tableTitle'
            p={1}
            pb={0}
        >
            <Box p={0}>
                <Typography variant='h5' gutterBottom>
                    {title}
                </Typography>
            </Box>
            <Box p={0} className='tableTitle-content'>
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

const mapStateToProps = ({ serverMoney }) => {
    return {
        vallets: serverMoney.vallets
    }
}

export default connect(mapStateToProps)(Title)
