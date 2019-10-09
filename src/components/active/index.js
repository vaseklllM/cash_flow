import React from "react"
import { connect } from "react-redux"
import { hocActive } from "../hoc"
import propTypes from "prop-types"
import { Title, Body } from "../Table"
import "./style.scss"

function Active({ rows, activeFullPrice }) {
    return (
        <>
            <Title title='Активи' activeFullPrice={activeFullPrice} />
            <Body rows={rows} />
        </>
    )
}

Active.propTypes = {
    rows: propTypes.arrayOf(propTypes.object),
    activeFullPrice: propTypes.oneOfType([propTypes.number, propTypes.string])
}

const mapStateToProps = cashFlow => cashFlow

export default connect(mapStateToProps)(hocActive(Active))
