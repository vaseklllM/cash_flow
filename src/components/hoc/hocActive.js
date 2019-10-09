import React from "react"

const upadtePrice = rows => {
    let price = 0
    rows.forEach(element => {
        price += element.price * element.pcs
    })
    return `${price}$`
}

const bodyText = {
    title: "Активи",
    col1: "Назва",
    col2: "Кількість/шт.",
    col3: "Ціна за шт.",
    col4: "Ціна загалом"
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
