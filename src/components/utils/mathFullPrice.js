const mathFullPrice = rows => {
    let fullPrice = 0
    rows.forEach(element => {
        const num = parseInt(element[element.length - 1])
        fullPrice += num
    })
    return `${fullPrice}$`
}
export default mathFullPrice
