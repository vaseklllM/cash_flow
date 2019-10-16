export default class Money {
    _valletUrl =
        "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
    _time = 700
    _cashFlow = [
        this._createActive("Акции Гугл", 159, 6.0, 10, "$"),
        this._createActive("Облигации", 237, 9.0, 30, "$"),
        this._createActive("Загальні витрати", 1, 0, -4000, "грн."),
        this._createActive("ICO DEEX", 2, 0.3, 0, "Ƀ"),
        this._createActive("EXXA+", 1, 0.987, 0, "Ƀ"),
        this._createActive("live stars", 1700, 0.12, 250, "$"),
        this._createActive("Учоба", 1, 60000, -1667, "грн.")
    ]
    _valletCourse = {}

    _createActive(name, pcs, price, income /* доход */, currency /* Валюта */) {
        return {
            name,
            pcs,
            price,
            income /* доход */,
            currency /* Валюта */
        }
    }

    getCashFlow = new Promise(resolve => { 
        setTimeout(() => {
            resolve(this._cashFlow)
        }, this._time)
    })
    getValletCourse = new Promise(resolve => {
        fetch(this._valletUrl)
            .then(result => {
                if (result.ok) return result.json()
            })
            .then(result => {
                result.forEach(item => {
                    if (item.cc === "USD") {
                        this._valletCourse = {
                            ...this._valletCourse,
                            usd_uah: parseFloat(item.rate.toFixed(2))
                        }
                    }
                })
                resolve(this._valletCourse)
            })
    })
}
