import {
    SET_CASH_FLOW,
    SET_VALLET_COURSE,
    SET_CASH_FLOW_CHACKBOX,
    SET_NEW_CASH_FLOW_ITEM,
    CHANGE_PARAMETRS_CASH_FLOW,
    SEARCH_CASH_FLOW
} from "./action"

const cashFlowState = {
    searchCashFlow: null,
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

        case SEARCH_CASH_FLOW:
            let arr = null
            if (action.payload !== "") {
                arr = state.cashFlow.filter(item => {
                    const name = item.name.toLowerCase()
                    return name.indexOf(action.payload.toLowerCase()) > -1
                })
            }
            return {
                ...state,
                searchCashFlow: arr
            }

        case CHANGE_PARAMETRS_CASH_FLOW:
            const checkType = txt => {
                if (typeof txt === "string") {
                    return parseFloat(txt.replace(/[^\d,.-]/g, ""))
                } else if (typeof txt === "number") {
                    return parseFloat(txt)
                }
            }

            function CreateObject(newCashFlowItem, item, checkType) {
                const {
                    income,
                    pcs,
                    price,
                    name,
                    currency,
                    rate
                } = newCashFlowItem

                return {
                    ...item,
                    name: name !== "" ? name : item.name,
                    pcs: checkType(pcs),
                    price: checkType(price),
                    income: checkType(income),
                    currency,
                    rate
                }
            }

            const newCeshflow = state.cashFlow.map(item => {
                if (item.id === action.payload) {
                    return CreateObject(state.newCashFlowItem, item, checkType)
                } else return item
            })

            let newSearchCashFlow = null
            if (state.searchCashFlow !== null) {
                newSearchCashFlow = state.searchCashFlow.map(item => {
                    if (item.id === action.payload) {
                        return CreateObject(
                            state.newCashFlowItem,
                            item,
                            checkType
                        )
                    } else return item
                })
            }
            // console.log(newSearchCashFlow);

            return {
                ...state,
                cashFlow: newCeshflow,
                searchCashFlow: newSearchCashFlow
            }

        default:
            return {
                ...state
            }
    }
}

export default serverMoneyReducer
