import React, { Component } from "react"
import InputLine from "./creators/InputLine"
import { StyledTableCell } from "../../../Creators/Table/utils"

class IncomeLine extends Component {
    render() {
        const { item, onShow } = this.props
        const { income, currency } = item

        if (onShow) {
            return (
                <InputLine
                    onShow={onShow}
                    value={income}
                    keyName='income'
                    width='10%'
                    place='Доход'
                />
            )
        } else
            return (
                <StyledTableCell
                    className={onShow ? "activeTd" : ""}
                    align='right'
                >
                    {income ? `${income} ${currency}` : "-"}
                </StyledTableCell>
            )
    }
}

export default IncomeLine
