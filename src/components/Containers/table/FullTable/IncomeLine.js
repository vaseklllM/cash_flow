import React from "react"
import InputLine from "./creators/InputLine"
import { StyledTableCell } from "../../../Creators/Table/utils"
import { Calc } from "../../../utils"

// комірка з Доходом
function IncomeLine({ item, onShow }) {
    const { income } = item

    if (onShow) {
        return (
            <InputLine
                onShow={onShow}
                value={income}
                keyName='income'
                width='10%'
                place='Доход'
                ClassNameInputStyle='FullTableInput'
            />
        )
    } else
        return (
            <StyledTableCell className={onShow ? "activeTd" : ""} align='right'>
                {Calc.showIncome(item)}
            </StyledTableCell>
        )
}

export default IncomeLine
