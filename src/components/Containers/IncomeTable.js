import React from "react"
import { connect } from "react-redux"
import CreateTable from "../Creators/Table"
import { mathFullPrice } from "../utils"

function ActiveTable({ cashFlow }) {
    let rows = cashFlow ? createTableContent(cashFlow) : null
    let fullPrice = rows ? mathFullPrice(rows, 1) : []
    return <CreateTable rows={rows} bodyText={bodyText} fullPrice={fullPrice} />
}

const bodyText = {
    title: "Доходи",
    emptyArray: "Немає Доходів",
    collumn: ["Назва", "Доход/міс."]
}

const createTableContent = cashFlow => {
    const obj = cashFlow.filter(item => item.income > 0)
    return obj.map(item => {
        const { name, income, currency } = item
        return [name, `${income.toLocaleString("en-IN")} ${currency}`]
    })
}

const mapStateToProps = ({ serverMoney }) => ({
    cashFlow: serverMoney.cashFlow
})

export default connect(mapStateToProps)(ActiveTable)
