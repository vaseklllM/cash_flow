import React from "react"
import { connect } from "react-redux"
import { hocActive } from "../hoc"
import propTypes from "prop-types"
import CreateTable from "../CreateTable"
import "./style.scss"

function Active({ rows, activeFullPrice }) {
    const bodyText = {
        name: "Назва",
        col1: "Кількість/шт.",
        col2: "Ціна за шт.",
        col3: "Ціна загалом"
    }
    return (
        <CreateTable
            title='Активи'
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
