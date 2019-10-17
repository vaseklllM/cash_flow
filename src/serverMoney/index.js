export default class Money {
    _valletUrl = (valletCode, date) =>
        `https://old.bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${valletCode}&date=${date}&json`
    _btc_uah_url = "https://kuna.io/api/v2/tickers/btcuah"
    _time = 700
    _cashFlow = [
        this._createActive("Акции Гугл", 159, 6.0, 10, "$", "USD"),
        this._createActive("Облигации", 237, 9.0, 30, "$", "USD"),
        this._createActive("Загальні витрати", 1, 0, -4000, "грн.", "UAH"),
        this._createActive("ICO DEEX", 2, 0.3, 0, "Ƀ", "BTC"),
        this._createActive("EXXA+", 1, 0.987, 0, "Ƀ", "BTC"),
        this._createActive("live stars", 1700, 0.12, 250, "$", "USD"),
        this._createActive("Учоба", 1, 60000, -1667, "грн.", "UAH")
    ]

    _createActive(
        name,
        pcs,
        price,
        income /* доход */,
        currency /* Валюта */,
        rate
    ) {
        return {
            name,
            pcs,
            price,
            income /* доход */,
            currency /* Валюта */,
            rate
        }
    }

    getCashFlow = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this._cashFlow)
            }, this._time)
        })
    }
    getValletCourse = () => {
        return new Promise(resolve => {
            const vallutCC = ["EUR", "USD", "RUB"]
            const date = new Date()
            const todaysDate = `${date.getFullYear()}${date.getMonth() +
                1}${date.getDate()}`
            let vallets = {}
            vallutCC.forEach((item, index) => {
                fetch(this._valletUrl(item, todaysDate))
                    .then(result => result.json())
                    .then(result => {
                        vallets = {
                            ...vallets,
                            [result[0].cc]: parseFloat(
                                result[0].rate.toFixed(2)
                            )
                        }
                        if (index === vallutCC.length - 1) resolve(vallets)
                    })
            })
        })
    }
    getBtcVallet = () => {
        return new Promise(resolve => {
            fetch(this._btc_uah_url)
                .then(res => res.json())
                .then(res => {
                    resolve(parseFloat(res.ticker.low))
                })
        })
    }
}
