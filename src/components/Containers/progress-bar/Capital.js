import React from "react"
import { ProgressBar } from "../../pages"

const ProgressBarCapital = () => {
    const num1 = 4250
    const num2 = 50000

    const title = {
        left: "Капитал в грн.",
        right: `${num1.toLocaleString("en-IN")} грн. / ${num2.toLocaleString(
            "en-IN"
        )} грн.`
    }
    return <ProgressBar width={14} title={title} />
}

export default ProgressBarCapital
