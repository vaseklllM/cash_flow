import React from "react"
import { Input } from "@material-ui/core"
import { StyledTableCell } from "../../../Creators/Table/utils"

const IncomeLine = ({ item, onShow }) => {
    const { income, currency } = item
    if (onShow) {
        return (
            <StyledTableCell
                className={onShow ? "activeTd" : ""}
                align='right'
                style={{ width: "10%" }}
            >
                <Input
                    className='FullTableInput'
                    placeholder='Доход'
                    onClick={event => event.stopPropagation()}
                    value={income}
                    inputProps={{
                        "aria-label": "description"
                    }}
                />
            </StyledTableCell>
        )
    } else
        return (
            <StyledTableCell className={onShow ? "activeTd" : ""} align='right'>
                {income ? `${income} ${currency}` : "-"}
            </StyledTableCell>
        )
}

export default IncomeLine
