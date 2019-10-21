import React from "react"
import { ProgressBar } from "../../pages"

const incomeToCosts = () => {
    const num1 = 640
    const num2 = 6000
    const title = {
        left: "Відношення витрат до доходів в грн.",
        right: `${num1.toLocaleString("en-IN")} грн. / ${num2.toLocaleString(
            "en-IN"
        )} грн.`
    }
    return <ProgressBar width={30} title={title} />
}

export default incomeToCosts
