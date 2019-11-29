import React from "react"
import { StyledTableCell } from "../../../../Creators/Table/utils"
import Line from "./valuteTogle"

const ValuteLine = React.memo(({ item, onShow }) => {
    if (onShow) {
        return (
            <StyledTableCell className={onShow ? "activeTd" : ""} align='right'>
                <Line item={item} /> {/* форма вибoру валюти */}
            </StyledTableCell>
        )
    } else
        return (
            <StyledTableCell className={onShow ? "activeTd" : ""} align='right'>
                {`${item.rate} "${item.currency}"`}
            </StyledTableCell>
        )
})

export default ValuteLine
