import React from "react"
import Title from "./Title"
import Body from "./Body"

const CreateTable = ({ title, activeFullPrice, rows, bodyText }) => {
    return (
        <div>
            <Title title={title} activeFullPrice={activeFullPrice} />
            <Body rows={rows} text={bodyText} />
        </div>
    )
}

export default CreateTable
