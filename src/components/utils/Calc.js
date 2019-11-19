const Calc = {
    // повертає roi актива
    roi: item => {
        const { income, price, pcs } = item
        const lastPrice = price * pcs
        if (!income && !lastPrice) return "-"
        const ROI = parseFloat(((income / lastPrice) * 100 * 12).toFixed(1))
        if (ROI !== 0 && ROI !== -Infinity && ROI !== Infinity) {
            return `${ROI} %`
        } else return "-"
    },
    // повертає повну ціну актива
    showFullPrice: item => {
        const { price, pcs, currency } = item
        const lastPrice = price * pcs
        if (!lastPrice) return "-"
        if (lastPrice < 1 && lastPrice > -1) {
            return `${parseFloat(lastPrice.toFixed(5))} ${currency}`
        } else {
            return `${parseInt(lastPrice).toLocaleString("ru-RU")} ${currency}`
        }
    },
    // повертає ціну актива
    showPrice: item => {
        const { price, currency } = item
        if (!price) return "-"
        if (price < 1 && price > -1) {
            return `${parseFloat(price.toFixed(5))} ${currency}`
        } else if (price < 0) {
            return `${Math.abs(price).toLocaleString("ru-RU")} ${currency}`
        } else {
            return `${price.toLocaleString("ru-RU")} ${currency}`
        }
    },
    // повертає кількісь активів
    showPcs: item => {
        const { pcs } = item
        if (!pcs) return "-"
        return `${pcs.toLocaleString("ru-RU")} шт.`
    },
    // повертає дату строкою
    showDate: (d, symbul = ".", type = false) => {
        const date = new Date(d)
        const day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`
        const month =
            date.getMonth() + 1 >= 10
                ? date.getMonth() + 1
                : `0${date.getMonth() + 1}`
        if (isNaN(month) || isNaN(day) || isNaN(date.getFullYear())) {
            return false
        } else if (type) {
            return `${month}${symbul}${day}${symbul}${date.getFullYear()}`
        } else if (!type) {
            return `${day}${symbul}${month}${symbul}${date.getFullYear()}`
        }
    },
    // повертає новий id для масива cashFlow
    lastIdFromCashFlow: cashFlow => {
        let lastId = 0
        cashFlow.forEach(i => {
            if (lastId < i.id) lastId = i.id
        })
        return ++lastId
    },
    
    // повертає витрати/доходи
    showIncome: item => {
        const { income, currency } = item
        if (!income) return "-"
        if (income < 1 && income > -1) {
            return `${parseFloat(income.toFixed(5))} ${currency}`
        } else {
            return `${income.toLocaleString("ru-RU")} ${currency}`
        }
    }
}
export default Calc
