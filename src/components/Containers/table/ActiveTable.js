import React from "react"
import { connect } from "react-redux"
import CreateTable from "../../Creators/Table"
import { mathFullPrice, showDate, retentionTime, maths } from "../../utils"

function ActiveTable({ cashFlow }) {
    let obj
    if (cashFlow) obj = cashFlow.filter(item => item.income >= 0)
    let rows = obj ? createTableContent(obj) : null
    let fullPrice = rows ? mathFullPrice(rows, 5) : []
    console.log(rows)
    return <CreateTable rows={rows} bodyText={bodyText} fullPrice={fullPrice} />
}

const bodyText = {
    title: "Активи",
    emptyArray: "Немає Активів",
    collumn: [
        "Назва",
        "Дата покупки",
        "Час утримання",
        "Кількість/шт.",
        "Ціна за шт.",
        "Ціна загалом",
        "ROI"
    ]
}

const createTableContent = obj => {
    return obj.map(item => {
        const { name, pcs, price, currency, dateBuy, income } = item
        return [
            name,
            `${showDate(dateBuy)}`,
            `${retentionTime(dateBuy)}`,
            `${pcs.toLocaleString("en-IN")} шт.`,
            `${price ? `${price.toLocaleString("en-IN")} ${currency}` : "-"}`,
            `${
                pcs * price
                    ? `${(pcs * price).toLocaleString("en-IN")} ${currency}`
                    : "-"
            }`,
            `${
                maths.roi(income, price * pcs) !== 0 &&
                maths.roi(income, price * pcs) !== -Infinity
                    ? `${maths.roi(income, price * pcs)} %`
                    : "-"
            }`
        ]
    })
}

const mapStateToProps = ({ serverMoney }) => ({
    cashFlow: serverMoney.cashFlow
})

export default connect(mapStateToProps)(ActiveTable)
