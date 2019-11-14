import React from "react"
import { StyledTableCell } from "../../../Creators/Table/utils"
import { Calc } from "../../../utils"

const DateLine = ({ item, onShow }) => {
    const { dateBuy } = item
    if (!onShow) {
        return (
            <StyledTableCell align='right'>
                {Calc.showDate(dateBuy)}
            </StyledTableCell>
        )
    } else {
        return (
            <StyledTableCell align='right'>
                text
            </StyledTableCell>
        )
    }
}

export default DateLine
