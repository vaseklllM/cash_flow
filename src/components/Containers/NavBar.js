import React from "react"
import { connect } from "react-redux"
import { NavBar } from "../pages"
import propTypes from "prop-types"

const NavBarContainer = ({ vallets }) => {
    return <NavBar vallets={vallets} />
}

NavBar.propTypes = {
    vallets: propTypes.arrayOf(propTypes.object).isRequired
}

const mapStateToProps = ({ serverMoney }) => ({
    vallets: serverMoney.vallets,
    btc_uah: serverMoney.btc_uah
})

export default connect(mapStateToProps)(NavBarContainer)
