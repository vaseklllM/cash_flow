import { createChart } from "lightweight-charts"

export default function createGraph(element, data) {
    var chart = createChart(element, {
        width: 800,
        height: 400
    })

    var candleSeries = chart.addCandlestickSeries()

    candleSeries.setData(data)

    var lastClose = data[data.length - 1].close
    var lastIndex = data.length - 1

    var targetIndex = lastIndex + 105 + Math.round(Math.random() + 30)
    var targetPrice = getRandomPrice()

    var currentIndex = lastIndex + 1
    var currentBusinessDay = { day: 29, month: 5, year: 2019 }
    var ticksInCurrentBar = 0
    var currentBar = {
        open: null,
        high: null,
        low: null,
        close: null,
        time: currentBusinessDay
    }

    function mergeTickToBar(price) {
        if (currentBar.open === null) {
            currentBar.open = price
            currentBar.high = price
            currentBar.low = price
            currentBar.close = price
        } else {
            currentBar.close = price
            currentBar.high = Math.max(currentBar.high, price)
            currentBar.low = Math.min(currentBar.low, price)
        }
        candleSeries.update(currentBar)
    }

    function reset() {
        candleSeries.setData(data)
        lastClose = data[data.length - 1].close
        lastIndex = data.length - 1

        targetIndex = lastIndex + 5 + Math.round(Math.random() + 30)
        targetPrice = getRandomPrice()

        currentIndex = lastIndex + 1
        currentBusinessDay = { day: 29, month: 5, year: 2019 }
        ticksInCurrentBar = 0
    }

    function getRandomPrice() {
        return 10 + Math.round(Math.random() * 10000) / 100
    }

    function nextBusinessDay(time) {
        var d = new Date()
        d.setUTCFullYear(time.year)
        d.setUTCMonth(time.month - 1)
        d.setUTCDate(time.day + 1)
        d.setUTCHours(0, 0, 0, 0)
        return {
            year: d.getUTCFullYear(),
            month: d.getUTCMonth() + 1,
            day: d.getUTCDate()
        }
    }
    setInterval(function() {
        var deltaY = targetPrice - lastClose
        var deltaX = targetIndex - lastIndex
        var angle = deltaY / deltaX
        var basePrice = lastClose + (currentIndex - lastIndex) * angle
        var noise = 0.1 - Math.random() * 0.2 + 1.0
        var noisedPrice = basePrice * noise

        mergeTickToBar(noisedPrice)
        if (++ticksInCurrentBar === 5) {
            // move to next bar
            currentIndex++
            currentBusinessDay = nextBusinessDay(currentBusinessDay)
            currentBar = {
                open: null,
                high: null,
                low: null,
                close: null,
                time: currentBusinessDay
            }
            ticksInCurrentBar = 0
            if (currentIndex === 5000) {
                reset()
                return
            }
            if (currentIndex === targetIndex) {
                // change trend
                lastClose = noisedPrice
                lastIndex = currentIndex
                targetIndex = lastIndex + 5 + Math.round(Math.random() + 30)
                targetPrice = getRandomPrice()
            }
        }
    }, 2000)
}
