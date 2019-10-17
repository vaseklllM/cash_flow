export const SET_CASH_FLOW = "SET_CASH_FLOW"
export const SET_VALLET_COURSE = "SET_VALLET_COURSE"
export const SET_BTC_COURSE = "SET_BTC_COURSE"

export const getCashFlow = cashFlow => ({
    type: SET_CASH_FLOW,
    payload: cashFlow
})

export const getValletCourse = valletCourse => ({
    type: SET_VALLET_COURSE,
    payload: valletCourse
})

export const getBtcCourse = BtcCourse => ({
    type: SET_BTC_COURSE,
    payload: BtcCourse
})
