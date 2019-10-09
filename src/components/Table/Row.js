import React from "react"
import StyledTableCell from "./StyledTableCell"
import StyledTableRow from './StyledTableRow';


const Row = ({ row }) => {
    return (
        <StyledTableRow>
            <StyledTableCell component='th' scope='row'>
                {row.name}
            </StyledTableCell>
            <StyledTableCell align='right'>{row.pcs} шт.</StyledTableCell>
            <StyledTableCell align='right'>
                {row.price} {row.currency}
            </StyledTableCell>
            <StyledTableCell align='right'>
                {row.price * row.pcs} {row.currency}
            </StyledTableCell>
        </StyledTableRow>
    )
}

export default Row
