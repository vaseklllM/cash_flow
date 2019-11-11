import formatDistanceToNow from "date-fns/formatDistanceToNow"
import localeRu from "date-fns/locale/ru"

const retentionTime = date => {
    const past = new Date(date)
    return formatDistanceToNow(past, {
        locale: localeRu
    })
}

export default retentionTime
