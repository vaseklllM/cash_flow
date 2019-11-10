import React from "react"
import { InputBase, Select, FormControl, MenuItem } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import { StyledTableCell } from "../../../Creators/Table/utils"

const BootstrapInput = withStyles(theme => ({
    input: {
        borderRadius: 4,
        position: "relative",
        backgroundColor: theme.palette.background.paper,
        border: "1px solid #ced4da",
        fontSize: 14,
        padding: "5px 18px 5px 8px",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(","),
        "&:focus": {
            borderRadius: 4,
            borderColor: "#80bdff",
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
        }
    }
}))(InputBase)

function ValuteLine({ item, onShow }) {
    const [age, setAge] = React.useState("Ten")
    if (onShow) {
        const handleChange = event => {
            setAge(event.target.value)
        }
        console.log(age);
        return (
            <StyledTableCell
                className={onShow ? "activeTd" : ""}
                align='center'
            >
                <FormControl>
                    <Select
                        onMouseDown={event => {
                            event.stopPropagation()
                        }}
                        labelid='demo-customized-select-label'
                        id='demo-customized-select'
                        value={age}
                        onChange={handleChange}
                        input={<BootstrapInput />}
                    >
                        <MenuItem value='Ten'>Ten</MenuItem>
                        <MenuItem value='Twenty'>Twenty</MenuItem>
                        <MenuItem value='Thirty'>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </StyledTableCell>
        )
    } else
        return (
            <StyledTableCell className={onShow ? "activeTd" : ""} align='right'>
                {`${item.rate} "${item.currency}"`}
            </StyledTableCell>
        )
}

export default ValuteLine
