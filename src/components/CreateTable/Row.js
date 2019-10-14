import React from "react"
import StyledTableCell from "./StyledTableCell"
import StyledTableRow from "./StyledTableRow"

const Row = ({ row }) => (
    <StyledTableRow>
        {row.map((item, index) => {
            if (index === 0)
                return (
                    <StyledTableCell key={index} component='th' scope='row'>
                        {item}
                    </StyledTableCell>
                )
            return (
                <StyledTableCell key={index} align='right'>
                    {item}
                </StyledTableCell>
            )
        })}
    </StyledTableRow>
)

export default Row
