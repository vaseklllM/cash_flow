import React from "react"
import { Input } from "@material-ui/core"
import { StyledTableCell } from "../../../Creators/Table/utils"

const PcsLine = ({ item, onShow }) => {
    const { pcs } = item
    if (onShow) {
        return (
            <StyledTableCell
                className={onShow ? "activeTd" : ""}
                align='right'
                style={{ maxWidth: "130px" }}
            >
                <Input
                    className='FullTableInput'
                    placeholder='Доход'
                    onClick={event => event.stopPropagation()}
                    value={pcs}
                    inputProps={{
                        "aria-label": "description"
                    }}
                />
            </StyledTableCell>
        )
    } else
        return (
            <StyledTableCell className={onShow ? "activeTd" : ""} align='right'>
                {`${pcs} шт.`}
            </StyledTableCell>
        )
}

export default PcsLine
