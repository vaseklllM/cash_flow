const mathFullPrice = (rows, col) => {
    // if ()
    if (!col) {
        const priceArr = createPriceArr(rows)
        const smallPriceArr = createSmallPriceArr(priceArr)
        console.log(smallPriceArr)
    }

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

// оставляет только уникальные обьекты
function createSmallPriceArr(arr) {
    let valetArr = arr.map(i => i.rate)
    valetArr = unique(valetArr)

    let newArr = []
    for (let i = 0; i < valetArr.length; i++) {
        const tempArr = arr.filter(item => {
            return item.rate.indexOf(valetArr[i]) > -1
        })
        if (tempArr.length === 1) {
            newArr.push(tempArr[0])
        } else {
            newArr.push(uniqueObject(tempArr))
        }
    }
    return newArr
}

// обєдиняє однакові об'єкти
function uniqueObject(arr) {
    let newObj = {}
    arr.forEach(i => {
        newObj = {
            price: (newObj.price || 0) + i.price,
            rate: i.rate,
            currency: i.currency
        }
    })
    return newObj
}

// оставляет только уникальные елементы
function unique(arr) {
    let result = []
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str)
        }
    }
    return result
}

// возвращает только цену и валюту
function createPriceArr(arr) {
    return arr.map(item => ({
        price: item.price * item.pcs,
        rate: item.rate,
        currency: item.currency
    }))
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
