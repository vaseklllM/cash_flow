import React, { Component } from "react"
import { Input } from "@material-ui/core"
import { connect } from "react-redux"
import { setNewCashFlowItem } from "../../../../../store/serverMoney/action"
import { StyledTableCell } from "../../../../Creators/Table/utils"

export class InputLine extends Component {
    componentDidMount() {
        this.props.setNewCashFlowItem({
            [this.props.keyName]: this.props.value
        })
    }
    render() {
        const {
            onShow,
            newCashFlowItem,
            setNewCashFlowItem,
            width,
            keyName,
            place
        } = this.props
        return (
            <StyledTableCell
                className={onShow ? "activeTd" : ""}
                align='right'
                style={{ width }}
            >
                <Input
                    className='FullTableInput'
                    placeholder={place}
                    onMouseDown={event => event.stopPropagation()}
                    onChange={e => {
                        setNewCashFlowItem({ [keyName]: e.target.value })
                        // this.setState({
                        //     value: e.target.value.replace(/[^\d\.]/g, "")
                        // })
                    }}
                    value={newCashFlowItem[keyName] || ""}
                    inputProps={{
                        "aria-label": "description"
                    }}
                />
            </StyledTableCell>
        )
    }
}
const mapStateToProps = ({ serverMoney }) => {
    return {
        newCashFlowItem: serverMoney.newCashFlowItem
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setNewCashFlowItem: value => dispatch(setNewCashFlowItem(value))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InputLine)
