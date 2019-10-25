export default class Money {
    _valletUrl = (valletCode, date) =>
        `https://old.bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${valletCode}&date=${date}&json`
    _btc_uah_url = "https://kuna.io/api/v2/tickers/btcuah"
    _cashFlow = [
        this._createActive("Акции Гугл", 159, 6.0, 10, "$", "USD"),
        this._createActive("Облигации", 237, 9.0, 70, "грн.", "UAH"),
        this._createActive("Загальні витрати", 1, 0, -4000, "грн.", "UAH"),
        this._createActive("ICO DEEX", 2, 0.3, 0, "₿", "BTC"),
        this._createActive("EXXA+", 1, 0.987, 0, "₿", "BTC"),
        this._createActive("live stars", 1700, 0.12, -5, "$", "USD"),
        this._createActive("live stars", 1700, 0.12, 5, "$", "USD"),
        this._createActive("Учоба", 1, 60000, -1667, "грн.", "UAH")
    ]

    _createActive(name, pcs, price, income, currency, rate) {
        return {
            name,
            pcs,
            price,
            income,
            currency,
            rate
        }
    }

    _getVallet = async url => {
        const response = await fetch(url)
        const course = await response.json()
        return course
    }

    getCashFlow = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this._cashFlow)
            }, 700)
        })
    }

    async GetVallets() {
        const date = new Date()
        const todaysDate = `${date.getFullYear()}${date.getMonth() +
            1}${date.getDate()}`

        const vallut = [
            createValut("USD", "$", null),
            createValut("EUR", "€", null),
            createValut("RUB", "₽", null),
            createValut("BTC", "₿", null)
        ]

        function createValut(cc, sumbol, value) {
            return {
                cc,
                sumbol,
                value
            }
        }

        // add btc course
        await this._getVallet(this._btc_uah_url).then(res => {
            vallut.forEach(item =>
                item.cc === "BTC"
                    ? (item.value = parseFloat(res.ticker.low))
                    : null
            )
        })

        // add usd, eur, rub course
        for (let i = 0; i < vallut.length; i++) {
            await this._getVallet(
                this._valletUrl(vallut[i].cc, todaysDate)
            ).then(res => {
                if (res.length) {
                    vallut[i].value = parseFloat(res[0].rate.toFixed(2))
                }
            })
        }

        await vallut.forEach(item => {
            if (!item.value) {
                setTimeout(() => {
                    this.newGetVallets()
                }, 2000)
                return vallut
            }
        })

        return vallut
    }
}
