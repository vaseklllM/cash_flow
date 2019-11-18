import React from "react"
import InputLine from "./creators/InputLine"
import { StyledTableCell } from "../../../Creators/Table/utils"

// комірка з назвою елемента
function NameLine({ item, onShow }) {
    const { name } = item

    if (onShow) {
        return (
            <InputLine
                onShow={onShow}
                value={name}
                keyName='name'
                width='13%'
                place='Назва'
                ClassNameInputStyle='FullTableNameInput'
            />
        )
    } else
        return (
            <StyledTableCell className={onShow ? "activeTd" : ""} align='left'>
                {name}
            </StyledTableCell>
        )
}

export default NameLine
