import { SET_CASH_FLOW, SET_VALLET_COURSE } from "./action"

const cashFlowState = {
    cashFlow: null,
    vallets: []
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
                vallets: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default serverMoneyReducer
