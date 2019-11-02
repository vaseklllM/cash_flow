import React, { Component } from "react"
import { Input } from "@material-ui/core"
import { StyledTableCell } from "../../../Creators/Table/utils"

class IncomeLine extends Component {
    state = {
        value: 0
    }

    componentDidMount() {
        this.setState({ value: this.props.item.income })
    }

    render() {
        const { item, onShow } = this.props
        const { income, currency } = item

        if (onShow) {
            return (
                <StyledTableCell
                    className={onShow ? "activeTd" : ""}
                    align='right'
                    style={{ width: "10%" }}
                >
                    <Input
                        className='FullTableInput'
                        placeholder='Доход'
                        onClick={event => event.stopPropagation()}
                        onChange={e => {
                            console.log(e.target.value)
                            this.setState({
                                value: e.target.value
                            })
                            // this.setState({
                            //     value: e.target.value.replace(/[^\d\.]/g, "")
                            // })
                        }}
                        value={this.state.value}
                        inputProps={{
                            "aria-label": "description"
                        }}
                    />
                </StyledTableCell>
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
