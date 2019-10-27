import React from "react"
import { Loader } from "../../pages"
import Row from "./Row"
import { StyledTableCell, StyledTableRow } from "./utils"

const rowList = (rows, emptyArray, colSpan, checked, setCheckBox) => {
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
        return rows.map((row, index) => {
            return (
                <Row
                    row={row}
                    key={index}
                    checked={index === checked}
                    setCheckBox={setCheckBox}
                    id={index}
                />
            )
        })
    }
}

export default rowList
