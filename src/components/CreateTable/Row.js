import React from "react"
import StyledTableCell from "./StyledTableCell"
import StyledTableRow from "./StyledTableRow"

const Row = ({ row }) => {
    const { name, pcs, price, currency } = row
    return (
        <StyledTableRow>
            <StyledTableCell component='th' scope='row'>
                {name}
            </StyledTableCell>
            <StyledTableCell align='right'>{pcs} шт.</StyledTableCell>
            <StyledTableCell align='right'>
                {price} {currency}
            </StyledTableCell>
            <StyledTableCell align='right'>
                {price * pcs} {currency}
            </StyledTableCell>
        </StyledTableRow>
    )
}

export default Row
