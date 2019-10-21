import React from "react"
import { connect } from "react-redux"
import CreateTable from "../../Creators/Table"
import { mathFullPrice } from "../../utils"

function PasiveTable({ cashFlow }) {
    let rows = cashFlow ? createTableContent(cashFlow) : null
    let fullPrice = rows ? mathFullPrice(rows, 3) : []
    return <CreateTable rows={rows} bodyText={bodyText} fullPrice={fullPrice} />
}

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
            `${pcs.toLocaleString("en-IN")} шт.`,
            `${price.toLocaleString("en-IN")} ${currency}`,
            `${(pcs * price).toLocaleString("en-IN")} ${currency}`
        ]
    })
}

const mapStateToProps = ({ serverMoney }) => ({
    cashFlow: serverMoney.cashFlow
})

export default connect(mapStateToProps)(PasiveTable)
