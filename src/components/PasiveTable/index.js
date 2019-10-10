import React from "react"
import { connect } from "react-redux"
import CreateTable from "../CreateTable"
import { mathFullPrice } from "../utils"

const bodyText = {
    title: "Пасиви",
    emptyArray: "Немає пасивів",
    collumn: ["Назва", "Кількість/шт.", "Ціна за шт.", "Ціна загалом"]
}

const createTableContent = cashFlow => {
    const obj = cashFlow.filter(item => item.income < 0)
    return obj.map(item => {
        const { name, pcs, price, currency } = item
        return [
            name,
            `${pcs} шт.`,
            `${price} ${currency}`,
            `${pcs * price} ${currency}`
        ]
    })
}

function ActiveTable({ cashFlow }) {
    let rows = null
    let fullPrice = null
    if (cashFlow) {
        rows = createTableContent(cashFlow)
        fullPrice = mathFullPrice(rows)
    }
    return <CreateTable rows={rows} bodyText={bodyText} fullPrice={fullPrice} />
}

const mapStateToProps = cashFlow => cashFlow

export default connect(mapStateToProps)(ActiveTable)
