import React from "react"
import { ProgressBar } from "../../pages"

const ProgressBarCapital = () => {
    const num1 = 4250
    const num2 = 50000

    const title = {
        left: "Капитал в грн.",
        right: `${num1.toLocaleString("ru-RU")} грн. / ${num2.toLocaleString(
            "en-IN"
        )} грн.`
    }
    return (
        <ProgressBar width={((num1 / num2) * 100).toFixed(1)} title={title} />
    )
}

export default ProgressBarCapital
