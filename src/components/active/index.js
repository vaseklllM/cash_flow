import React from "react"
import { connect } from "react-redux"
import { hocActive } from "../hoc"
import propTypes from "prop-types"
import CreateTable from "../CreateTable"
import "./style.scss"

function Active({ rows, activeFullPrice, bodyText }) {
    return (
        <CreateTable
            activeFullPrice={activeFullPrice}
            rows={rows}
            bodyText={bodyText}
        />
    )
}

Active.propTypes = {
    rows: propTypes.oneOfType([
        propTypes.symbol,
        propTypes.array,
        propTypes.arrayOf(propTypes.object)
    ]),
    activeFullPrice: propTypes.oneOfType([propTypes.number, propTypes.string])
}

const mapStateToProps = cashFlow => cashFlow

export default connect(mapStateToProps)(hocActive(Active))
