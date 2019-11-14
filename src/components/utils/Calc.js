const Calc = {
    // повертає - або roi актива
    roi: item => {
        const { income, price, pcs } = item
        const lastPrice = price * pcs
        const ROI = parseFloat(((income / lastPrice) * 100 * 12).toFixed(1))
        if (ROI !== 0 && ROI !== -Infinity && ROI !== Infinity) {
            return `${ROI} %`
        } else return "-"
    },
    // повертає - або повну ціну актива
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
    // повертає - або ціну актива
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
        return `${pcs.toLocaleString("ru-RU")} шт.`
    }
}
export default Calc
