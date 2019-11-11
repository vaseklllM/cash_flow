import React from "react"
import { StyledTableCell } from "../../../../Creators/Table/utils"
import Line from "./valuteTogle"

function ValuteLine({ item, onShow }) {
    if (onShow) {
        return (
            <StyledTableCell
                className={onShow ? "activeTd" : ""}
                align='right'
            >
                <Line item={item} /> {/* форма вибару валюти */}
            </StyledTableCell>
        )
    } else
        return (
            <StyledTableCell className={onShow ? "activeTd" : ""} align='right'>
                {`${item.rate} "${item.currency}"`}
            </StyledTableCell>
        )
}

export default ValuteLine
