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
            place,
            ClassNameInputStyle
        } = this.props
        return (
            <StyledTableCell
                className={onShow ? "activeTd" : ""}
                align='right'
                style={{ width }}
            >
                <Input
                style={{textAlign: 'left'}}
                    className={ClassNameInputStyle}
                    placeholder={place}
                    onMouseDown={event => event.stopPropagation()}
                    onChange={e => {
                        setNewCashFlowItem({ [keyName]: e.target.value })
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
