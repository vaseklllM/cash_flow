import cashFlow from "./cashFlow"

export default class Money {
    // _cashFlowUrl = "http://localhost:3001/cashFlow"
    // _cashFlowUrlPut = `${this._cashFlowUrl}/Put`
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

    // async cashFlowPut(date) {
    //     const res = await fetch(this._cashFlowUrlPut, {
    //         method: "PUT",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(date)
    //     })
    //     const body = await res.json()
    //     return body
    // }
    // async cashFlowGet() {
    //     const res = await fetch(this._cashFlowUrl)
    //     const body = await res.json()
    //     return body
    // }
    // async cashFlowDelete() {
    //     const res = await fetch(this._cashFlowUrl)
    //     const body = await res.json()
    //     return body
    // }

    async GetVallets() {
        // const testDate = {
        //     name: "live stars",
        //     pcs: 1700,
        //     price: 0.12,
        //     income: -5,
        //     currency: "$",
        //     rate: "USD",
        //     dateBuy: "11-20-2018",
        //     checked: false,
        //     id: 3
        // }
        // console.log(await this.cashFlowPut(testDate))
        // console.log(await this.cashFlowGet())
        // console.log(await this.cashFlowDelete(1))
        // console.log(await this.cashFlowGet())

        const date = new Date()
        const todaysDate = `${date.getFullYear()}${date.getMonth() +
            1}${date.getDate()}`

        const vallut = [
            createValut("USD", "$", null),
            createValut("EUR", "€", null),
            createValut("RUB", "₽", null),
            createValut("BTC", "₿", null),
            createValut("UAH", "₴", 1)
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
        return vallut
    }
}
