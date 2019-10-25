import cashFlow from "./cashFlow"

export default class Money {
    _valletUrl = (valletCode, date) =>
        `https://old.bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${valletCode}&date=${date}&json`
    _btc_uah_url = "https://kuna.io/api/v2/tickers/btcuah"

    _getVallet = async url => {
        const response = await fetch(url)
        const course = await response.json()
        return course
    }

    getCashFlow = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(cashFlow)
            }, 700)
        })
    }
    
    calcDate(date1, date2) {
        let diff = Math.floor(date1.getTime() - date2.getTime())
        let day = 1000 * 60 * 60 * 24

        let days = Math.floor(diff / day)
        let months = Math.floor(days / 31)
        let years = Math.floor(months / 12)

        let date = {
            days,
            months,
            years
        }

        return date
    }

    async GetVallets() {
        let today = new Date()
        let past = new Date("8-22-2016")
        let q = this.calcDate(today, past)
        console.log(q)

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
