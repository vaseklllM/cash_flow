import React, { Component } from "react"
import { StyledTableCell, StyledTableRow } from "./utils"
import "./table.scss"
import { Calc } from "../../utils"

class Row extends Component {
    // Компонент обновляється при зміні checked або row
    shouldComponentUpdate(nextProps) {
        const { checked, row } = this.props
        if (checked !== nextProps.checked) return true
        if (!Calc.deepEqual(row, nextProps.row)) return true
        return false
    }

    render() {
        const { row, checked, setCheckBox, id } = this.props
        return (
            <StyledTableRow
                hover
                style={
                    checked ? { backgroundColor: "rgba(0, 0, 0, 0.15)" } : null
                }
                onClick={() => {
                    setCheckBox(id)
                }}
            >
                {row.map((item, index) => {
                    if (index === 0)
                        return (
                            <StyledTableCell
                                key={index}
                                component='th'
                                scope='row'
                            >
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
}

export default Row
