import React from "react"
import Loader from "../loader"
import { Row, StyledTableCell, StyledTableRow } from "."

const rowList = rows => {
    if (rows === null) {
        return (
            <StyledTableRow>
                <StyledTableCell component='th' scope='row' colSpan='4'>
                    <Loader />
                </StyledTableCell>
            </StyledTableRow>
        )
    } else if (Array.isArray(rows) && rows.length === 0) {
        return (
            <StyledTableRow>
                <StyledTableCell component='th' scope='row' colSpan='4'>
                    Нет активов
                </StyledTableCell>
            </StyledTableRow>
        )
    } else if (Array.isArray(rows) && rows.length !== 0) {
        return rows.map(row => <Row row={row} key={row.name} />)
    }
}

export default rowList
