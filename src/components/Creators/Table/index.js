import React, { Component } from "react"
import Title from "./Title"
import Body from "./Body"
import propTypes from "prop-types"
import { Calc } from "../../utils"

class CreateTable extends Component {
    // Компонент обновляється при зміні checked, rows
    shouldComponentUpdate(nextProps) {
        if (this.props.checked !== nextProps.checked) return true
        if (!Calc.deepEqual(this.props.rows, nextProps.rows)) return true
        return false
    }

    render() {
        const {
            rows,
            bodyText,
            fullPrice,
            maxHeignt,
            checked,
            setCheckBox,
            minWidth
        } = this.props

        return (
            <>
                <Title title={bodyText.title} fullPrice={fullPrice} />
                <Body
                    rows={rows}
                    text={bodyText}
                    maxHeignt={maxHeignt}
                    checked={checked}
                    setCheckBox={setCheckBox}
                    minWidth={minWidth}
                />
            </>
        )
    }
}

CreateTable.propTypes = {
    rows: propTypes.oneOfType([
        propTypes.arrayOf([propTypes.array]),
        propTypes.array,
        propTypes.symbol
    ]),
    bodyText: propTypes.shape({
        title: propTypes.string,
        collumn: propTypes.array,
        emptyArray: propTypes.string
    }).isRequired,
    fullPrice: propTypes.array,
    checked: propTypes.number
}

export default CreateTable
