import React from "react"

const upadtePrice = rows => {
    let price = 0
    rows.forEach(element => {
        price += element.price * element.pcs
    })
    return `${price}$`
}

const bodyText = {
    name: "Назва",
    col1: "Кількість/шт.",
    col2: "Ціна за шт.",
    col3: "Ціна загалом"
}

const hocTable = Wraper => ({ cashFlow }) => {
    let rows = null
    if (cashFlow) rows = cashFlow.filter(item => item.income >= 0)
    let activeFullPrice = 0
    if (rows !== null) {
        activeFullPrice = upadtePrice(rows)
    }
    return (
        <Wraper
            rows={rows}
            activeFullPrice={activeFullPrice}
            bodyText={bodyText}
        />
    )
}

export default hocTable
