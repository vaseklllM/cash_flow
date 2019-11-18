import React from "react"
import { connect } from "react-redux"
import "date-fns"
import { StyledTableCell } from "../../../Creators/Table/utils"
import { Calc } from "../../../utils"
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"
import { setNewCashFlowItem } from "../../../../store/serverMoney/action"

// комірка з датою
const DateLine = ({ item, onShow, setNewCashFlowItem }) => {
    const { dateBuy } = item
    const [selectedDate, setSelectedDate] = React.useState(new Date(dateBuy))

    setNewCashFlowItem({
        dateBuy: Calc.showDate(selectedDate, "-", true) || dateBuy
    })
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

const mapDispatchToProps = dispatch => ({
    setNewCashFlowItem: value => dispatch(setNewCashFlowItem(value))
})

export default connect(null, mapDispatchToProps)(DateLine)
