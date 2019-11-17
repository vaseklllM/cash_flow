import React from "react"
import { connect } from "react-redux"
import CreateTable from "../../Creators/Table"
import { mathFullPrice, retentionTime, Calc } from "../../utils"
import { setCheckBox } from "../../../store/serverMoney/action"

function ActiveTable({ cashFlow, setCheckBox, searchCashFlow }) {
    const mainArray = searchCashFlow || cashFlow
    let obj
    let checked
    // виводить або массив з пошуку або повний масив cashFlow
    if (cashFlow) {
        obj = mainArray.filter(item => item.income >= 0)
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
    let fullPrice = obj ? mathFullPrice(obj, "price", "pcs") : []
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
    title: "Активи",
    emptyArray: "Немає Активів",
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
        const { name, dateBuy } = item
        return [
            name,
            Calc.showDate(dateBuy),
            retentionTime(dateBuy),
            Calc.showPcs(item),
            Calc.showPrice(item),
            Calc.showFullPrice(item),
            Calc.roi(item)
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

export default connect(mapStateToProps, mapDispatchToProps)(ActiveTable)
