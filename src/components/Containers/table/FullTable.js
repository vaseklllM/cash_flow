import React from "react"
import { connect } from "react-redux"
import CreateTable from "../../Creators/Table"
import { mathFullPrice } from "../../utils"

function FullTable({ cashFlow }) {
    let rows = cashFlow ? createTableContent(cashFlow) : null
    let fullPrice = rows ? mathFullPrice(rows, 4) : []
    return (
        <CreateTable
            rows={rows}
            bodyText={bodyText}
            fullPrice={fullPrice}
            maxHeignt='900px'
        />
    )
}

const bodyText = {
    title: "Вся таблиця",
    emptyArray: "Таблиця пуста",
    collumn: ["Назва", "Кількість", "Ціна за шт.", "Доход/міс.", "Ціна загалом"]
}

const createTableContent = cashFlow => {
    return cashFlow.map(item => {
        const { name, income, currency, pcs, price } = item
        return [
            name,
            `${pcs} шт.`,
            `${price} ${currency}`,
            `${income.toLocaleString("en-IN")} ${currency}`,
            `${(price * pcs).toLocaleString("en-IN")} ${currency}`
        ]
    })
}

const mapStateToProps = ({ serverMoney }) => ({
    cashFlow: serverMoney.cashFlow
})

export default connect(mapStateToProps)(FullTable)
