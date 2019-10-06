import { createStore } from 'redux'

const cashFlowState = {
    active: null, // активы 
    pasive: null, // пасивы
    income: null, // доходы
    costs: null, // расходы
}

const reducer = (state = cashFlowState, action) => {
    switch (action.type) {
        case "GET_PORTFOLIO":
            return {
                ...state,
                active: action.payload
            }
        default:
            return {
                ...state
            }
    }
}


const store = createStore(reducer)
export default store