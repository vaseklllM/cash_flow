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
        if (cashFlow && vallets.length !== 0) {
            const capitalArr = cashFlow.filter(item => item.income === 0)
            capitalArr.forEach(item => {
                let valet = vallets.filter(i => i.cc === item.rate)
                if (valet[0]) {
                    capital += item.price * item.pcs * valet[0].value
                } else {
                    capital += item.price * item.pcs
                }
            })
        }
        const num1 = Math.floor(capital)
        const num2 = 50000

        const title = {
            left: "Капитал в грн.",
            right: `${num1.toLocaleString(
                "ru-RU"
            )} грн. / ${num2.toLocaleString("en-IN")} грн.`
        }
        return (
            <ProgressBar
                width={parseFloat(((num1 / num2) * 100).toFixed(1))}
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
