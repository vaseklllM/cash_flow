const mathFullPrice = rows => {
    let valletArr = {}
    rows.forEach(element => {
        const price = element[element.length - 1]
        const numPrice = parseFloat(price)
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
            line += `${arr[key]}${key} `
        }
        return line
    }
}

export default mathFullPrice
