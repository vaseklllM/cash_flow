function getIncome(arr, vallets) {
    let newArr = []
    let fullPrice = 0
    if (arr && vallets) {
        newArr = arr.filter(item => item.income > 0)
        newArr = newArr.filter(item => {
            for (let i = 0; i < vallets.length; i++) {
                if (item.currency === vallets[i].sumbol) {
                    return item
                }
            }
            if (item.currency === "грн.") {
                fullPrice += item.income
            }
            return null
        })
        newArr = newArr.map(item => {
            for (let i = 0; i < vallets.length; i++) {
                if (item.currency === vallets[i].sumbol) {
                    return {
                        income: vallets[i].value * item.income,
                        currency: item.name
                    }
                }
            }
            return null
        })
        newArr.map(item=>{
            fullPrice += item.income
            return null
        })
    }
    return parseFloat(fullPrice.toFixed(1))
}

export default getIncome
