import React from "react"
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core"
import { StyledTableCell } from "../../../Creators/Table/utils"

const ValuteLine = () => {
        const { item, onShow } = this.props
    const { income, currency } = item

    if (onShow) {
        return (
            <FormControl>
                <InputLabel htmlFor='age-simple'>Age</InputLabel>
                <Select
                    value={10}
                    // onChange={handleChange}
                    inputProps={{
                        name: "age",
                        id: "age-simple"
                    }}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        )
    } else
        return (
            <StyledTableCell className={onShow ? "activeTd" : ""} align='right'>
                {income ? `${income} ${currency}` : "-"}
            </StyledTableCell>
        )
}

export default ValuteLine
