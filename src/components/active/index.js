import React from "react"
import { connect } from "react-redux"
import { hocActive } from "../hoc"
import propTypes from "prop-types"
import { Title, Body } from "../Table"
import "./style.scss"

function Active({ rows, activeFullPrice }) {
    const bodyText = {
        name: "Назва",
        col1: "Кількість/шт.",
        col2: "Ціна за шт.",
        col3: "Ціна загалом"
    }
    return (
        <>
            <Title title='Активи' activeFullPrice={activeFullPrice} />
            <Body rows={rows} text={bodyText} />
        </>
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
