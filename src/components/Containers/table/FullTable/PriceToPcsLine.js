import React from "react"
import InputLine from "./creators/InputLine"
import { StyledTableCell } from "../../../Creators/Table/utils"
import { Calc } from "../../../utils"

// комірка "Ціна загалом"
const PriceToPcsLine = ({ item, onShow }) => {
    if (onShow) {
        return (
            <InputLine
                onShow={onShow}
                value={item.price}
                keyName='price'
                width='11%'
                place='Ціна за шт.'
                ClassNameInputStyle='FullTableInput'
            />
        )
    } else
        return (
            <StyledTableCell className={onShow ? "activeTd" : ""} align='right'>
                {Calc.showPrice(item)}
            </StyledTableCell>
        )
}

export default PriceToPcsLine
