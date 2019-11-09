import React from "react"
import Circle from "../../Creators/graph/Circle"
import { connect } from "react-redux"
import { Loader } from "../../pages"
import { randomColor } from "../../utils"

const ActiveGraph = ({ cashFlow }) => {
    if (cashFlow) {
        const active = cashFlow.filter(i => i.income >= 0)
        const arrName = active.map(i => i.name)
        const arrValue = active.map(i => i.price * i.pcs)
        const arrColor = active.map(i => randomColor())
        // debugger
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
        cashFlow: serverMoney.cashFlow
    }
}

export default connect(mapStateToProps)(ActiveGraph)
