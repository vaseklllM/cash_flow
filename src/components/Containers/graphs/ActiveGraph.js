import React from "react"
import Circle from "../../Creators/graph/Circle"
import { connect } from "react-redux"
import { Loader } from "../../pages"
import { randomColor } from "../../utils"

const ActiveGraph = ({ cashFlow, vallets }) => {
    if (cashFlow && vallets.length !== 0) {
        console.log(vallets)
        const active = cashFlow.filter(i => i.income >= 0)
        const arrName = active.map(i => i.name)
        const arrValue = active.map(i => i.price * i.pcs)
        const arrColor = active.map(i => randomColor())

        return (
            <Circle
                names={arrName}
                colors={arrColor}
                value={arrValue}
                circleName='graphTest'
            />
        )
    }
    return <Loader />
}
const mapStateToProps = ({ serverMoney }) => {
    return {
        cashFlow: serverMoney.cashFlow,
        vallets: serverMoney.vallets
    }
}

export default connect(mapStateToProps)(ActiveGraph)
