import React from "react"
import { connect } from "react-redux"
import CreateTable from "../../Creators/Table"
import { mathFullPrice, showDate, retentionTime, maths } from "../../utils"
import { setCheckBox } from "../../../store/serverMoney/action"

function PasiveTable({ cashFlow, setCheckBox, searchCashFlow }) {
    const mainArray = searchCashFlow || cashFlow
    let obj
    let checked
    if (cashFlow) {
        obj = mainArray.filter(item => item.income < 0)
        obj.forEach((item, index) => {
            if (item.checked) checked = index
        })
    }
    const setId = id => {
        obj.forEach((item, index) => {
            if (index === id) {
                setCheckBox(item.id)
            }
        })
    }
    let rows = obj ? createTableContent(obj) : null
    let fullPrice = rows ? mathFullPrice(rows, 5) : []
    return (
        <CreateTable
            rows={rows}
            bodyText={bodyText}
            fullPrice={fullPrice}
            checked={checked}
            setCheckBox={setId}
            minWidth='900px'
        />
    )
}

const bodyText = {
    title: "Пасиви",
    emptyArray: "Немає пасивів",
    collumn: [
        "Назва",
        "Дата покупки",
        "Пройшло від покупки",
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
            showDate(dateBuy),
            retentionTime(dateBuy),
            `${pcs.toLocaleString("en-IN")} шт.`,
            price ? `${price.toLocaleString("en-IN")} ${currency}` : "-",

            pcs * price
                ? `${(pcs * price).toLocaleString("en-IN")} ${currency}`
                : "-",
            maths.roi(income, price * pcs) !== 0 &&
            maths.roi(income, price * pcs) !== -Infinity
                ? `${maths.roi(income, price * pcs)} %`
                : "-"
        ]
    })
}

const mapStateToProps = ({ serverMoney }) => ({
    cashFlow: serverMoney.cashFlow,
    searchCashFlow: serverMoney.searchCashFlow
})
const mapDispatchToProps = dispatch => {
    return {
        setCheckBox: index => dispatch(setCheckBox(index))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PasiveTable)
