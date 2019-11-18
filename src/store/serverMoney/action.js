export const SET_CASH_FLOW = "SET_CASH_FLOW"
export const SET_VALLET_COURSE = "SET_VALLET_COURSE"
export const SET_CASH_FLOW_CHACKBOX = "SET_CASH_FLOW_CHACKBOX"
export const SET_NEW_CASH_FLOW_ITEM = "SET_NEW_CASH_FLOW_ITEM"
export const CHANGE_PARAMETRS_CASH_FLOW = "CHANGE_PARAMETRS_CASH_FLOW"
export const SEARCH_CASH_FLOW = "SEARCH_CASH_FLOW"
export const ON_DELETE_CASH_FLOW_ITEM = "ON_DELETE_CASH_FLOW_ITEM"
export const CREATE_NEW_CASH_FLOW_ITEM = "CREATE_NEW_CASH_FLOW_ITEM"

export const getCashFlow = cashFlow => ({
    type: SET_CASH_FLOW,
    payload: cashFlow
})

export const getVallet = vallets => ({
    type: SET_VALLET_COURSE,
    payload: vallets
})

export const setCheckBox = index => ({
    type: SET_CASH_FLOW_CHACKBOX,
    payload: index
})
export const setNewCashFlowItem = value => ({
    type: SET_NEW_CASH_FLOW_ITEM,
    payload: value
})
export const changeParametersCashFlow = itemId => ({
    type: CHANGE_PARAMETRS_CASH_FLOW,
    payload: itemId
})
export const searchCashFlowAction = newCashFlow => ({
    type: SEARCH_CASH_FLOW,
    payload: newCashFlow
})
export const onDeleteCashFlowItem = itemId => ({
    type: ON_DELETE_CASH_FLOW_ITEM,
    payload: itemId
})
export const createNewCashFlowItem = () => ({
    type: CREATE_NEW_CASH_FLOW_ITEM
})
