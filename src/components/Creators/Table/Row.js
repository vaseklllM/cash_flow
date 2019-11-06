import React from "react"
import { StyledTableCell, StyledTableRow } from "./utils"
import "./table.scss"

const Row = ({ row, checked, setCheckBox, id }) => {
    return (
        <StyledTableRow
            hover
            style={checked ? { backgroundColor: "rgba(0, 0, 0, 0.15)" } : null}
            onClick={()=>{setCheckBox(id)}}
        >
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
}

export default Row
