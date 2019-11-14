const mathFullPrice = (rows, collumn, collumn2) => {
    const priceArr = createPriceArr(rows, collumn, collumn2)
    const smallPriceArr = createSmallPriceArr(priceArr)
    return smallPriceArr
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

// об'єдиняє однакові об'єкти
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
function createPriceArr(arr, collumn, collumn2) {
    return arr.map(item => ({
        price: collumn2 ? item[collumn] * item[collumn2] : item[collumn],
        rate: item.rate,
        currency: item.currency
    }))
}

export default mathFullPrice
