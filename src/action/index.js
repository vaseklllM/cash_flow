const getCashFlow = cashFlow => {
    return {
        type: "SET_CASH_FLOW",
        payload: cashFlow
    }
}
const getValletCourse = valletCourse => {
    return {
        type: "SET_VALLET_COURSE",
        payload: valletCourse
    }
}

export { getCashFlow, getValletCourse }
