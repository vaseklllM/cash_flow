import React from "react"
import InputLine from "./creators/InputLine"
import { StyledTableCell } from "../../../Creators/Table/utils"

const PcsLine = ({ item, onShow }) => {
    const { pcs } = item
    if (onShow) {
        return (
            <InputLine
                onShow={onShow}
                value={pcs}
                keyName='pcs'
                width='11%'
                place='Кількість'
            />
        )
    } else
        return (
            <StyledTableCell className={onShow ? "activeTd" : ""} align='right'>
                {`${pcs} шт.`}
            </StyledTableCell>
        )
}

export default PcsLine
