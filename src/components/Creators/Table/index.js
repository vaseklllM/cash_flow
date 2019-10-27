import React from "react"
import Title from "./Title"
import Body from "./Body"
import propTypes from "prop-types"

const CreateTable = ({
    rows,
    bodyText,
    fullPrice,
    maxHeignt,
    checked,
    setCheckBox,
    minWidth
}) => {
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
    fullPrice: propTypes.array
    // checked: propTypes.number
}

export default CreateTable
