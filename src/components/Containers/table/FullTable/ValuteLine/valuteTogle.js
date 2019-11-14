import React from "react"
import { InputBase, Select, FormControl, MenuItem } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import { connect } from "react-redux"
import { setNewCashFlowItem } from "../../../../../store/serverMoney/action"

const BootstrapInput = withStyles(theme => ({
    input: {
        borderRadius: 4,
        position: "relative",
        backgroundColor: theme.palette.background.paper,
        border: "1px solid #ced4da",
        fontSize: 14,
        padding: "5px 18px 5px 8px",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
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

class Line extends React.Component {
    state = {
        rate: "",
        currency: ""
    }
    componentDidMount() {
        const { item } = this.props
        this.setState({ rate: item.rate, currency: item.currency })
    }

    componentDidUpdate() {
        const { rate } = this.state
        const { setNewCashFlowItem, vallets } = this.props

        if (rate !== "") {
            const valut = vallets.filter(item => item.cc === rate)
            setNewCashFlowItem({
                currency: valut[0].sumbol,
                rate: valut[0].cc
            })
        }
    }

    render() {
        const { rate } = this.state
        const { vallets } = this.props

        const handleChange = event => {
            this.setState({ rate: event.target.value })
        }

        return (
            <FormControl>
                <Select
                    onMouseDown={event => {
                        event.stopPropagation()
                    }}
                    labelid='demo-customized-select-label'
                    id='demo-customized-select'
                    value={rate}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                >
                    {vallets.map(item => {
                        return (
                            <MenuItem key={item.cc} value={item.cc}>
                                {item.sumbol
                                    ? `${item.cc} "${item.sumbol}"`
                                    : item.cc}
                            </MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        )
    }
}
const MapStateToProps = ({ serverMoney }) => ({
    vallets: serverMoney.vallets
})

const MapDospatchToProps = dispatch => ({
    setNewCashFlowItem: value => dispatch(setNewCashFlowItem(value))
})

export default connect(
    MapStateToProps,
    MapDospatchToProps
)(Line)
