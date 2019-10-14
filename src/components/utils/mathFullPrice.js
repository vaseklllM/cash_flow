const mathFullPrice = (rows, col) => {
    let valletArr = {}
    rows.forEach(element => {
        const price = element[col]
        const numPrice = parseFloat(price.replace(/[,]/g, ""))
        const numValet = price.replace(/.+ /, "")
        valletArr = arrPushToValletArr(valletArr, numValet, numPrice)
    })
    return createLine(valletArr)
}

const arrPushToValletArr = (arr, numValet, numPrice) => {
    return {
        ...arr,
        [numValet]: arr[numValet] + numPrice || numPrice
    }
}
const createLine = arr => {
    if (Object.keys(arr).length > 0) {
        let line = ""
        for (let key in arr) {
            line += `${arr[key].toLocaleString("en-IN")} ${key} `
        }
        return line
    }
}

export default mathFullPrice
