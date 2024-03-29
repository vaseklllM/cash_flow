import React from "react"
import { connect } from "react-redux"
import CreateTable from "../../Creators/Table"
import { mathFullPrice, Calc } from "../../utils"
import { setCheckBox } from "../../../store/serverMoney/action"

// Таблиця 'Витрати'
function ActiveTable({ cashFlow, setCheckBox, searchCashFlow }) {
    const mainArray = searchCashFlow || cashFlow
    let obj
    let checked
    // виводить або массив з пошуку або повний масив cashFlow
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
    let fullPrice = obj ? mathFullPrice(obj, "income") : []
    return (
        <CreateTable
            rows={rows}
            bodyText={bodyText}
            fullPrice={fullPrice}
            checked={checked}
            setCheckBox={setId}
            minWidth='300px'
        />
    )
}

const bodyText = {
    title: "Витрати",
    emptyArray: "Немає витрат",
    collumn: ["Назва", "Витрати/міс."]
}

const createTableContent = obj => {
    return obj.map(item => {
        const { name } = item
        return [name, Calc.showIncome(item)]
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
