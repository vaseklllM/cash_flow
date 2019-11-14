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
        const num1 = parseInt(capital)
        const num2 = [
            5000,
            10000,
            20000,
            50000,
            100000,
            200000,
            500000,
            1000000
        ]
        for (let i = 0; i < num2.length; i++) {
            if (num1 < num2[i]) {
                const title = {
                    left: "Капитал в грн.",
                    right: `${num1.toLocaleString("ru-RU")} грн. / ${num2[
                        i
                    ].toLocaleString("ru-RU")} грн.`
                }
                return (
                    <ProgressBar
                        width={parseFloat(((num1 / num2[i]) * 100).toFixed(1))}
                        title={title}
                    />
                )
            } else if (num1 > num2[num2.length - 1]) {
                return (
                    <ProgressBar
                        width={100}
                        title={{ right: "Астановись))" }}
                    />
                )
            }
        }
    }
}

const mapStateToProps = ({ serverMoney }) => {
    return {
        cashFlow: serverMoney.cashFlow,
        vallets: serverMoney.vallets
    }
}

export default connect(mapStateToProps)(ProgressBarCapital)
