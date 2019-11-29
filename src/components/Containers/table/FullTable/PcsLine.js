import React from "react"
import InputLine from "./creators/InputLine"
import { StyledTableCell } from "../../../Creators/Table/utils"
import { Calc } from "../../../utils"

// комірка з кількістю шт.
const PcsLine = React.memo(({ item, onShow }) => {
    const { pcs } = item
    if (onShow) {
        return (
            <InputLine
                value={pcs}
                keyName='pcs'
                width='11%'
                place='Кількість'
                ClassNameInputStyle='FullTableInput'
            />
        )
    } else
        return (
            <StyledTableCell className={onShow ? "activeTd" : ""} align='right'>
                {Calc.showPcs(item)}
            </StyledTableCell>
        )
})

export default PcsLine
