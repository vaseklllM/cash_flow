import React from "react"
import { InputBase } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import { connect } from "react-redux"
import { searchCashFlowAction } from "../../../store/serverMoney/action"

const Search = ({ useStyles, searchCashFlowAction }) => {
    const classes = useStyles()

    const onChangeValue = event => {
        searchCashFlowAction(event.target.value)
    }
    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder='Search…'
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                }}
                onChange={onChangeValue}
                inputProps={{ "aria-label": "search" }}
            />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    searchCashFlowAction: newCashFlow =>
        dispatch(searchCashFlowAction(newCashFlow))
})

export default connect(null, mapDispatchToProps)(Search)
