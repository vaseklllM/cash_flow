import React from "react"

const upadtePrice = rows => {
    let price = 0
    rows.forEach(element => {
        price += element.price * element.pcs
    })
    return `${price}$`
}

const hocTable = Wraper => ({ cashFlow }) => {
    let rows = null
    if (cashFlow) rows = cashFlow.filter(item => item.income >= 0)
    let activeFullPrice = 0
    if (rows !== null) {
        activeFullPrice = upadtePrice(rows)
    }
    return <Wraper rows={rows} activeFullPrice={activeFullPrice} />
}

export default hocTable
