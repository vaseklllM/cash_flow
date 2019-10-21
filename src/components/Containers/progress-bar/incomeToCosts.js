import React from "react"
import { ProgressBar } from "../../pages"
import { connect } from "react-redux"
import { getIncome } from "../../utils"

const incomeToCosts = ({ cashFlow, vallets }) => {
    const fullIncome = getIncome(cashFlow, vallets)
    const num2 = 6000
    const title = {
        left: "Відношення витрат до доходів в грн.",
        right: `${fullIncome.toLocaleString(
            "en-IN"
        )} грн. / ${num2.toLocaleString("en-IN")} грн.`
    }
    return (
        <ProgressBar
            width={((fullIncome / num2) * 100).toFixed(1)}
            title={title}
        />
    )
}

const mapStateToProps = ({ serverMoney }) => {
    return {
        cashFlow: serverMoney.cashFlow,
        vallets: serverMoney.vallets
    }
}

export default connect(mapStateToProps)(incomeToCosts)
