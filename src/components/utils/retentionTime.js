import formatDistanceToNow from "date-fns/formatDistanceToNow"
import localeRu from "date-fns/locale/ru"

const retentionTime = date => {
    const today = new Date()
    const past = new Date(date)

    const retentionTime = calcDate(today, past)
    return `${formatDistanceToNow(past, {
        locale: localeRu
    })} ( ${
        retentionTime.days <= 365
            ? `${retentionTime.days} дн.`
            : `${retentionTime.months} міс.`
    } )`
}

const calcDate = (date1, date2) => {
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
    // console.log(date);

    return date
}

export default retentionTime
