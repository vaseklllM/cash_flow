import { SET_CASH_FLOW, SET_VALLET_COURSE, SET_BTC_COURSE } from "./action"

const cashFlowState = {
    cashFlow: null,
    valletCourse: null,
    btc_uah: null
}

const serverMoneyReducer = (state = cashFlowState, action) => {
    switch (action.type) {
        case SET_CASH_FLOW:
            return {
                ...state,
                cashFlow: action.payload
            }
        case SET_VALLET_COURSE:
            return {
                ...state,
                valletCourse: action.payload
            }
        case SET_BTC_COURSE:
            return {
                ...state,
                btc_uah: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default serverMoneyReducer
