const getActive = (active) => {
    return {
        type: 'GET_PORTFOLIO',
        payload: active
    }
}


export {
    getActive
}

