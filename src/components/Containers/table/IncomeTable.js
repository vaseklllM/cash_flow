import React from "react"
import { connect } from "react-redux"
import CreateTable from "../../Creators/Table"
import { mathFullPrice } from "../../utils"
import { setCheckBox } from "../../../store/serverMoney/action"

function ActiveTable({ cashFlow, setCheckBox }) {
    let obj
    let checked
    if (cashFlow) {
        obj = cashFlow.filter(item => item.income > 0)
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
    let fullPrice = rows ? mathFullPrice(rows, 1) : []
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
    title: "Доходи",
    emptyArray: "Немає Доходів",
    collumn: ["Назва", "Доход/міс."]
}

const createTableContent = obj => {
    return obj.map(item => {
        const { name, income, currency } = item
        return [name, `${income.toLocaleString("en-IN")} ${currency}`]
    })
}

const mapStateToProps = ({ serverMoney }) => ({
    cashFlow: serverMoney.cashFlow
})
const mapDispatchToProps = dispatch => {
    return {
        setCheckBox: index => dispatch(setCheckBox(index))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActiveTable)
