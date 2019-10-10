import React from "react"
import Loader from "../loader"
import Row from "./Row"
import StyledTableCell from "./StyledTableCell"
import StyledTableRow from "./StyledTableRow"

const rowList = (rows, emptyArray, colSpan) => {
    if (rows === null) {
        return (
            <StyledTableRow>
                <StyledTableCell component='th' scope='row' colSpan={colSpan}>
                    <Loader />
                </StyledTableCell>
            </StyledTableRow>
        )
    } else if (Array.isArray(rows) && rows.length === 0) {
        return (
            <StyledTableRow>
                <StyledTableCell component='th' scope='row' colSpan={colSpan}>
                    {emptyArray}
                </StyledTableCell>
            </StyledTableRow>
        )
    } else if (Array.isArray(rows) && rows.length !== 0) {
        return rows.map((row, index) => <Row row={row} key={index} />)
    }
}

export default rowList
