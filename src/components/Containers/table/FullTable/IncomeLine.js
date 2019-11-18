import React from "react"
import InputLine from "./creators/InputLine"
import { StyledTableCell } from "../../../Creators/Table/utils"

// комірка з Доходом
function IncomeLine({ item, onShow }) {
    const { income, currency } = item

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
                {income ? `${income} ${currency}` : "-"}
            </StyledTableCell>
        )
}

export default IncomeLine
