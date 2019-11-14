import React from "react"
import { IconButton } from "@material-ui/core"
import CheckIcon from "@material-ui/icons/Check"
import CloseIcon from "@material-ui/icons/Close"
import { connect } from "react-redux"
import { changeParametersCashFlow } from "../../../../../store/serverMoney/action"

const Edit = ({ item, changeParametersCashFlow, onClickEditelementId }) => {
    return (
        <>
            <IconButton
                style={{ padding: "5px" }}
                onMouseDown={event => {
                    event.stopPropagation()
                }}
                onClick={() => {
                    changeParametersCashFlow(item.id)
                    onClickEditelementId(item.id)
                }}
            >
                <CheckIcon fontSize='small' />
            </IconButton>
            <IconButton
                style={{ padding: "5px" }}
                onMouseDown={event => {
                    event.stopPropagation()
                }}
                onClick={() => {
                    onClickEditelementId(item.id)
                }}
            >
                <CloseIcon fontSize='small' />
            </IconButton>
        </>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        changeParametersCashFlow: itemId =>
            dispatch(changeParametersCashFlow(itemId))
    }
}

export default connect(null, mapDispatchToProps)(Edit)
