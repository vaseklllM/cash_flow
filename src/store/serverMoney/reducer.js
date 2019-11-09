import {
    SET_CASH_FLOW,
    SET_VALLET_COURSE,
    SET_CASH_FLOW_CHACKBOX,
    SET_NEW_CASH_FLOW_ITEM,
    CHANGE_PARAMETRS_CASH_FLOW
} from "./action"

const cashFlowState = {
    cashFlow: null,
    vallets: [],
    newCashFlowItem: {}
}

const serverMoneyReducer = (state = cashFlowState, action) => {
    switch (action.type) {
        case SET_CASH_FLOW:
            return { ...state, cashFlow: action.payload }

        case SET_VALLET_COURSE:
            return { ...state, vallets: action.payload }

        case SET_CASH_FLOW_CHACKBOX:
            const newCashFlow = state.cashFlow.map(item => {
                if (item.id === action.payload) {
                    item.checked = !item.checked
                    return item
                }
                item.checked = false
                return item
            })
            return { ...state, cashFlow: newCashFlow }

        case SET_NEW_CASH_FLOW_ITEM:
            return {
                ...state,
                newCashFlowItem: { ...state.newCashFlowItem, ...action.payload }
            }

        case CHANGE_PARAMETRS_CASH_FLOW:
            const { income, pcs, price, name } = state.newCashFlowItem
            const checkType = txt => {
                if (typeof txt === "string") {
                    return parseFloat(txt.replace(/[^\d,.-]/g, ""))
                } else if (typeof txt === "number") {
                    return parseFloat(txt)
                }
            }

            const newCeshflow = state.cashFlow.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        name: name !== "" ? name : item.name,
                        pcs: checkType(pcs),
                        price: checkType(price),
                        income: checkType(income)
                    }
                } else return item
            })
            return {
                ...state,
                cashFlow: newCeshflow
            }

        default:
            return {
                ...state
            }
    }
}

export default serverMoneyReducer
