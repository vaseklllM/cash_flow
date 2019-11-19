import React from "react"
import { connect } from "react-redux"
import CreateTable from "../../Creators/Table"
import { mathFullPrice, Calc } from "../../utils"
import { setCheckBox } from "../../../store/serverMoney/action"

// Таблиця капіталу
function ActiveTable({ cashFlow, setCheckBox, searchCashFlow }) {
    const mainArray = searchCashFlow || cashFlow
    let obj
    let checked
    // виводить або массив з пошуку або повний масив cashFlow
    if (cashFlow) {
        obj = mainArray.filter(
            item => item.income === 0 && item.pcs > 0 && item.price !== 0
        )
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
            minWidth='300px'
        />
    )
}

const bodyText = {
    title: "Капітал",
    emptyArray: "Немає капіталу",
    collumn: ["Назва", "Кількість"]
}

const createTableContent = obj => {
    return obj.map(item => {
        return [item.name, Calc.showFullPrice(item)]
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
