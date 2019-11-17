import React from "react"
import "date-fns"
import { StyledTableCell } from "../../../Creators/Table/utils"
import { Calc } from "../../../utils"
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"

const DateLine = ({ item, onShow }) => {
    const { dateBuy } = item
    const [selectedDate, setSelectedDate] = React.useState(
        new Date(dateBuy)
    )

    const handleDateChange = date => {
        setSelectedDate(date)
    }

    if (!onShow) {
        return (
            <StyledTableCell align='right'>
                {Calc.showDate(dateBuy)}
            </StyledTableCell>
        )
    } else {
        return (
            <StyledTableCell align='right' style={{ width: "10px" }}>
                <div
                    onMouseDown={event => {
                        event.stopPropagation()
                    }}
                    style={{ width: "150px" }}
                >
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            margin='none'
                            id='date-picker-dialog'
                            format='dd/MM/yyyy'
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                "aria-label": "change date"
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </div>
            </StyledTableCell>
        )
    }
}

export default DateLine
