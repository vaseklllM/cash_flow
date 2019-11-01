import React from "react"
import { ProgressBar } from "../../pages"
import { connect } from "react-redux"

class ProgressBarCapital extends React.Component {
    state = {
        capital: null
    }

    render() {
        let capital = 0
        const { cashFlow, vallets } = this.props
        if (cashFlow) {
            cashFlow.forEach(item => {
                if (item.income === 0) {
                    const valet = vallets.filter(i => i.cc === item.rate)
                    capital += parseInt(item.price * item.pcs * valet[0].value)
                }
            })
        }
        const num1 = capital
        const num2 = 50000

        const title = {
            left: "Капитал в грн.",
            right: `${num1.toLocaleString(
                "ru-RU"
            )} грн. / ${num2.toLocaleString("en-IN")} грн.`
        }
        return (
            <ProgressBar
                width={((num1 / num2) * 100).toFixed(1)}
                title={title}
            />
        )
    }
}

const mapStateToProps = ({ serverMoney }) => {
    return {
        cashFlow: serverMoney.cashFlow,
        vallets: serverMoney.vallets
    }
}

export default connect(mapStateToProps)(ProgressBarCapital)
