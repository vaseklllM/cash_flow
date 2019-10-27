const showDate = d => {
    const date = new Date(d)
    const day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`
    const month =
        date.getMonth() + 1 >= 10
            ? date.getMonth() + 1
            : `0${date.getMonth() + 1}`
    return `${day}.${month}.${date.getFullYear()}`
}

export default showDate
