import React from "react"
import { Typography, Box } from "@material-ui/core"
import { connect } from "react-redux"
import { Calc } from "../../utils"

const Title = ({ title, fullPrice, vallets }) => {
    const fullPriceSpan = fullPrice.map(item => {
        return (
            <span key={item.rate}>
                {Calc.showPrice(item)}
                &nbsp;&nbsp;
            </span>
        )
    })

    let fullPriceUAH = 0
    if (vallets.length !== 0 && fullPrice.length !== 0) {
        fullPrice.forEach(item => {
            const vallet = vallets.filter(i => i.sumbol === item.currency)
            fullPriceUAH += vallet[0].value * item.price
        })
    }
    fullPriceSpan.push(
        `( ${parseInt(Math.abs(fullPriceUAH)).toLocaleString("ru-RU")} ₴ )`
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
                    variant='subtitle1'
                    gutterBottom
                >
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
