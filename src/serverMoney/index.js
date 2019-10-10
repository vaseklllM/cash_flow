export default class Money {
    _time = 700
    _cashFlow = [
        this._createActive("Frozen yoghurt", 159, 6.0, 10, "year", "$"),
        this._createActive("Ice cream sandwich", 237, 9.0, 30, "day", "$"),
        this._createActive("Eclair", 262, 16.0, -50, "month", "$"),
        this._createActive("Cupcake", 305, 3.7, 0, "-", "Ƀ"),
        this._createActive("Gingerbread", 356, 5.0, -14, "month", "$")
    ]

    _createActive(
        name,
        pcs,
        price,
        income /* доход */,
        paymentTime /* Время оплаты */,
        currency /* Валюта */
    ) {
        return {
            name,
            pcs,
            price,
            income /* доход */,
            paymentTime /* Время оплаты */,
            currency /* Валюта */
        }
    }

    getCashFlow = new Promise(resolve => {
        setTimeout(() => {
            resolve(this._cashFlow)
        }, this._time)
    })
}
