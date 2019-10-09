import React from "react"
import Title from "./Title"
import Body from "./Body"

const CreateTable = ({ activeFullPrice, rows, bodyText }) => {
    return (
        <div>
            <Title title={bodyText.title} activeFullPrice={activeFullPrice} />
            <Body rows={rows} text={bodyText} />
        </div>
    )
}

export default CreateTable
