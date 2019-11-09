import React from "react"
import Circle from "../../Creators/graph/Circle"
import { connect } from "react-redux"
import { Loader } from "../../pages"
import { randomColor } from "../../utils"

const ActiveGraph = ({ cashFlow, vallets }) => {
    if (cashFlow && vallets.length !== 0) {
        const active = cashFlow.filter(i => i.income < 0 && i.price !== 0)
        console.log(active);
        const arrName = active.map(i => i.name)
        const arrValue = active.map(i => {
            for (let j = 0; j < vallets.length; j++) {
                if (vallets[j].sumbol === i.currency) {
                    let priceUah = vallets[j].value * i.price * i.pcs
                    return priceUah < 20
                        ? parseFloat(priceUah.toFixed(2))
                        : parseInt(priceUah)
                }
            }
        })
        const arrColor = active.map(i => randomColor())
        return (
            <Circle
                names={arrName}
                colors={arrColor}
                value={arrValue}
                circleName='pasiveGraph'
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
