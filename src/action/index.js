const getCashFlow = cashFlow => {
    return {
        type: "SET_CASH_FLOW",
        payload: cashFlow
    }
}

export { getCashFlow }
