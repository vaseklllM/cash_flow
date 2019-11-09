import React from "react"
import Circle from "../../Creators/graph/Circle"
import { connect } from "react-redux"
import { Loader } from "../../pages"
import { randomColor } from "../../utils"
import propTypes from "prop-types"

const IncomeGraph = ({ cashFlow, vallets, name }) => {
    if (cashFlow && vallets.length !== 0) {
        const arrName = cashFlow.map(i => i.name)
        const arrValue = cashFlow.map(i => {
            for (let j = 0; j < vallets.length; j++) {
                if (vallets[j].sumbol === i.currency) {
                    let priceUah = vallets[j].value * i.price * i.pcs
                    return priceUah < 20
                        ? parseFloat(priceUah.toFixed(2))
                        : parseInt(priceUah)
                }
            }
            return undefined
        })
        const arrColor = cashFlow.map(i => randomColor())
        return (
            <Circle
                names={arrName}
                colors={arrColor}
                value={arrValue}
                circleName={name}
            />
        )
    }
    return <Loader />
}

IncomeGraph.propTypes = {
    name: propTypes.string.isRequired,
    cashFlow: propTypes.arrayOf(propTypes.object)
}

const mapStateToProps = ({ serverMoney }) => {
    return {
        vallets: serverMoney.vallets
    }
}

export default connect(mapStateToProps)(IncomeGraph)
