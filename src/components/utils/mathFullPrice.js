const mathFullPrice = (rows, col) => {
    let valletArr = {}
    rows.forEach(element => {
        const price = element[col]
        if (price !== "-") {
            const numPrice = parseFloat(price.replace(/[,]/g, ""))
            const numValet = price.replace(/.+ /, "")
            valletArr = arrPushToValletArr(valletArr, numValet, numPrice)
        }
    })
    valletArr = createArray(valletArr)
    return valletArr
}

const arrPushToValletArr = (arr, numValet, numPrice) => {
    return {
        ...arr,
        [numValet]: arr[numValet] + numPrice || numPrice
    }
}
const createArray = valletArr => {
    let arr = []
    for (let key in valletArr) {
        arr.push({ summ: valletArr[key], rate: key })
    }
    return arr
}

export default mathFullPrice
