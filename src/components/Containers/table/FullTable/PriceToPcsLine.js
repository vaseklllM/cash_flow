import React from "react"
import InputLine from "./creators/InputLine"
import { StyledTableCell } from "../../../Creators/Table/utils"

const PriceToPcsLine = ({ item, onShow }) => {
    const { price, currency } = item
    if (onShow) {
        return (
            <InputLine
                onShow={onShow}
                value={price}
                keyName='price'
                width='11%'
                place='Ціна за шт.'
                ClassNameInputStyle='FullTableInput'
            />
        )
    } else if (price === 0) {
        return (
            <StyledTableCell className={onShow ? "activeTd" : ""} align='right'>
                {`-`}
            </StyledTableCell>
        )
    } else
        return (
            <StyledTableCell className={onShow ? "activeTd" : ""} align='right'>
                {`${price} ${currency}`}
            </StyledTableCell>
        )
}

export default PriceToPcsLine
