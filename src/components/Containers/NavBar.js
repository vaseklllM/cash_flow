import React from "react"
import { fade, makeStyles } from "@material-ui/core/styles"
import { connect } from "react-redux"
import { NavBar } from "../pages"
import propTypes from "prop-types"

const NavBarContainer = ({ valletCourse, btc_uah }) => {
    return (
        <NavBar
            valletCourse={valletCourse}
            useStyles={useStyles}
            btc_uah={btc_uah}
        />
    )
}

NavBar.propTypes = {
    valletCourse: propTypes.oneOfType([propTypes.symbol, propTypes.object])
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto"
        }
    },
    title: {
        flexGrow: 1,
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    searchIcon: {
        width: theme.spacing(7),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    inputRoot: {
        color: "inherit"
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: 120,
            "&:focus": {
                width: 200
            }
        }
    }
}))

const mapStateToProps = ({ serverMoney }) => ({
    valletCourse: serverMoney.valletCourse,
    btc_uah: serverMoney.btc_uah
})

export default connect(mapStateToProps)(NavBarContainer)
