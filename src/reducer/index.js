import { createStore } from "redux"

const cashFlowState = {
    cashFlow: null
}

const reducer = (state = cashFlowState, action) => {
    switch (action.type) {
        case "SET_CASH_FLOW":
            return {
                ...state,
                cashFlow: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

const store = createStore(reducer)
export default store
