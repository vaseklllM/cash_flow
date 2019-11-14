import React from "react"
import { ProgressBar } from "../../pages"
import { connect } from "react-redux"
import { getIncome, getCosts } from "../../utils"

const incomeToCosts = ({ cashFlow, vallets }) => {
    const fullIncome = getIncome(cashFlow, vallets)
    const fullCosts =
        getCosts(cashFlow, vallets) < 0
            ? getCosts(cashFlow, vallets) * -1
            : getCosts(cashFlow, vallets)
    const num2 = fullCosts === 0 ? 1 : fullCosts
    const title = {
        left: "Відношення витрат до доходів в грн.",
        right: `${parseInt(fullIncome).toLocaleString(
            "en-IN"
        )} грн. / ${parseInt(num2).toLocaleString("ru-RU")} грн.`
    }
    if (fullIncome < num2) {
        return (
            <ProgressBar
                width={parseFloat(((fullIncome / num2) * 100).toFixed(1))}
                title={title}
            />
        )
    } else if (fullIncome > num2){
        return (
            <ProgressBar
                width={100}
                title={{right: 'Кінець гри'}}
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

export default connect(mapStateToProps)(incomeToCosts)
